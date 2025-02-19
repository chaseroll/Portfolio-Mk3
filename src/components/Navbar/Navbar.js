import { Icon } from 'components/Icon';
import { Monogram } from 'components/Monogram';
import { useTheme } from 'components/ThemeProvider';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useAppContext, useScrollToHash, useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, useCallback, memo } from 'react';
import { cssProps, media, msToNum, numToMs } from 'utils/style';
import { NavToggle } from './NavToggle';
import styles from './Navbar.module.css';
import { ThemeToggle } from './ThemeToggle';
import { navLinks, socialLinks } from './navData';
import { DecoderText } from 'components/DecoderText';
import profileKatakana from 'assets/katakana-profile.svg?url';

export function Navbar() {
  // Combine related states
  const [navState, setNavState] = useState({
    show: true,
    prevScroll: 0,
  });
  const [current, setCurrent] = useState(null);
  const [target, setTarget] = useState(null);

  const { themeId } = useTheme();
  const { menuOpen, dispatch } = useAppContext();
  const { route, asPath } = useRouter();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const scrollTimeout = useRef(null);
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();

  // Optimized scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = window.requestAnimationFrame(() => {
        setNavState(prev => {
          const currentScroll = window.scrollY;
          const scrollDelta = Math.abs(currentScroll - prev.prevScroll);

          return {
            prevScroll: currentScroll,
            show:
              currentScroll < prev.prevScroll || scrollDelta > 10 || currentScroll <= 50,
          };
        });

        scrollTimeout.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, []);

  // Simplified current path handling
  useEffect(() => {
    setCurrent(asPath);
  }, [asPath]);

  // Optimized smooth scroll handling
  const handleNavItemClick = useCallback(
    event => {
      const href = event.currentTarget.href;
      const hash = href.split('#')[1];

      if (hash && route === '/') {
        event.preventDefault();

        const element = document.getElementById(hash);
        if (element) {
          // Update URL without navigation
          window.history.pushState({}, '', `/#${hash}`);
          setTarget(`#${hash}`);
          setCurrent(`/${hash}`);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setTarget(null);
      }
    },
    [route]
  );

  // Optimized mobile nav handler
  const handleMobileNavClick = useCallback(
    event => {
      handleNavItemClick(event);
      if (menuOpen) {
        requestAnimationFrame(() => {
          dispatch({ type: 'toggleMenu' });
        });
      }
    },
    [menuOpen, dispatch, handleNavItemClick]
  );

  // Optimized theme inversion
  useEffect(() => {
    if (themeId !== 'light') return;

    const navItems = document.querySelectorAll('[data-navbar-item]');
    const inverseTheme = 'dark';
    let rafId;

    const handleInversion = () => {
      rafId = requestAnimationFrame(() => {
        const invertedElements = document.querySelectorAll(
          `[data-theme='${inverseTheme}'][data-invert]`
        );

        navItems.forEach(item => {
          item.dataset.theme = '';

          const itemRect = item.getBoundingClientRect();
          const { scrollY } = window;

          invertedElements.forEach(inverted => {
            const invertedRect = inverted.getBoundingClientRect();
            if (isOverlap(invertedRect, itemRect, scrollY)) {
              item.dataset.theme = inverseTheme;
            }
          });
        });
      });
    };

    document.addEventListener('scroll', handleInversion, { passive: true });
    handleInversion();

    return () => {
      document.removeEventListener('scroll', handleInversion);
      if (rafId) cancelAnimationFrame(rafId);
      navItems.forEach(item => {
        item.dataset.theme = '';
      });
    };
  }, [themeId, windowSize, asPath]);

  // Check if a nav item should be active
  const getCurrent = (pathname = '') => {
    // Get the current hash from the URL
    const currentHash = asPath.split('#')[1];
    const linkHash = pathname.split('#')[1];
    // For home page
    if (route === '/') {
      // If both the nav item and current URL have hashes, compare them
      if (linkHash && currentHash) {
        return linkHash === currentHash ? 'page' : '';
      }
      // If nav item has no hash but we're on home page root
      return !currentHash && pathname === '/' ? 'page' : '';
    }

    // For other pages, compare the route paths without hashes
    const routePath = pathname.split('#')[0];
    return routePath === route ? 'page' : '';
  };

  return (
    <header className={styles.navbar} ref={headerRef}>
      <RouterLink href={route === '/' ? '/#intro' : '/'} scroll={false}>
        <a
          data-navbar-item
          className={styles.logo}
          aria-label="Chase Roll, Student"
          onClick={handleMobileNavClick}
          style={{
            transition: 'all 0.3s ease-in-out',
            opacity: !isMobile || menuOpen ? 1 : navState.show ? 1 : 0,
          }}
        >
          <Monogram highlight />
        </a>
      </RouterLink>
      <NavToggle
        onClick={() => dispatch({ type: 'toggleMenu' })}
        menuOpen={menuOpen}
        style={{
          transition: 'all 0.3s ease-in-out',
          opacity: !isMobile || menuOpen ? 1 : navState.show ? 1 : 0,
        }}
      />

      <nav className={styles.nav}>
        <div className={styles.navList}>
          {navLinks.map(({ label, pathname }) => (
            <RouterLink href={pathname} scroll={false} key={label}>
              <a
                data-navbar-item
                className={styles.navLink}
                aria-current={getCurrent(pathname)}
                onClick={handleNavItemClick}
              >
                {label}
              </a>
            </RouterLink>
          ))}
        </div>
        <NavbarIcons desktop />
      </nav>

      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {visible => (
          <nav className={styles.mobileNav} data-visible={visible}>
            {navLinks.map(({ label, pathname }, index) => (
              <RouterLink href={pathname} scroll={false} key={label}>
                <a
                  className={styles.mobileNavLink}
                  data-visible={visible}
                  aria-current={getCurrent(pathname)}
                  onClick={handleMobileNavClick}
                  style={cssProps({
                    transitionDelay: numToMs(
                      Number(msToNum(tokens.base.durationS)) + index * 50
                    ),
                  })}
                >
                  {label}
                </a>
              </RouterLink>
            ))}
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle data-navbar-item />}
    </header>
  );
}

const NavbarIcons = ({ desktop }) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon }) => (
      <NavIconLink label={label} url={url} icon={icon} key={label} desktop={desktop} />
    ))}
  </div>
);

// Optimize NavIconLink with memo
const NavIconLink = memo(({ label, url, icon, desktop }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef();

  const handleMouseOver = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(false), 100);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <a
      data-navbar-item={desktop || undefined}
      className={styles.navIconLink}
      aria-label={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Icon className={styles.navIcon} icon={icon} />
      {visible && (
        <span className={styles.navSpan}>
          <div className={styles.navAnim} data-show={visible}>
            <DecoderText text={label} start={visible} startDelay={1000} />
          </div>
        </span>
      )}
    </a>
  );
});

NavIconLink.displayName = 'NavIconLink';
