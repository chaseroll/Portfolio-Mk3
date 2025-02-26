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

// Add this function at the top level, outside the Navbar component
const isElementInViewport = (element, offset = 0) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= offset + window.innerHeight / 3 &&
    rect.bottom >= offset + window.innerHeight / 3
  );
};

export function Navbar() {
  // Combine related states
  const [navState, setNavState] = useState({
    show: true,
    prevScroll: 0,
  });

  const { themeId } = useTheme();
  const { menuOpen, dispatch } = useAppContext();
  const { route, asPath } = useRouter();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  // Add this state to track active section
  const [activeSection, setActiveSection] = useState('');

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
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      console.log('route>>>', route);
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

  // Add this effect to handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      if (route !== '/') return;

      // Use requestAnimationFrame for performance
      requestAnimationFrame(() => {
        const sections = navLinks.map(link => ({
          id: link.pathname.replace('/#', ''),
          element: document.getElementById(link.pathname.replace('/#', '')),
        }));

        const currentSection = sections.find(section =>
          isElementInViewport(section.element)
        );

        setActiveSection(currentSection ? `/#${currentSection.id}` : '');
      });
    };

    if (route) {
      const baseRoute = route.split('/')[1];
      console.log('first', baseRoute);
      // Find matching nav item and set active section
      const matchingNavItem = navLinks.find(link => link.pathname.includes(baseRoute));
      console.log('matchingNavItem', matchingNavItem);
      if (matchingNavItem) {
        setActiveSection(matchingNavItem.pathname);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [route]);

  // Keep the getCurrent function simple
  const getCurrent = (pathname = '') => {
    if (route === '/') {
      return pathname === activeSection ? 'page' : '';
    }
    // For other pages, keep existing logic
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
                aria-current={
                  getCurrent(pathname) || activeSection === pathname ? 'page' : ''
                }
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
                  aria-current={
                    getCurrent(pathname) || activeSection === pathname ? 'page' : ''
                  }
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

  return (
    <a
      key={label}
      data-navbar-item={desktop || undefined}
      className={styles.navIconLink}
      aria-label={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => {
        setVisible(true);
      }}
      onMouseOut={() => {
        setVisible(false);
      }}
    >
      <Icon className={styles.navIcon} icon={icon} />
      <span
        className={styles.navSpan}
        style={{
          margin: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          position: 'relative',
          padding: '0',
        }}
      >
        {visible && (
          <div
            style={{
              position: 'absolute',
              top: '-8px',
              left: visible ? '20px' : '0px',
              opacity: visible ? 1 : 0,
              width: '100px',
            }}
            className={styles.navAnim}
            data-show={visible}
          >
            <DecoderText text={label} start={visible} startDelay={1000} />
          </div>
        )}
      </span>
    </a>
  );
});

NavIconLink.displayName = 'NavIconLink';
