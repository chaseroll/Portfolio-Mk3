import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import rocketEngine from 'assets/rocket-engine-dark-large.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { Button } from 'components/Button';
import { useEffect, useRef, useState, useContext } from 'react';
import styles from './Home.module.css';
import { Contact } from 'pages/contact/Contact';
import { Article } from 'pages/articles/Article';
import { CustomCursor } from 'components/CustomCursor';
import { CustomCursorCore } from 'components/CustomCursorCore';
import { ScrollTop } from 'components/ScrollTop';
import { List } from 'pages/projects/list/List';
import { Heading } from 'components/Heading';
import { AppContext } from 'pages/_app.page';

const disciplines = ['Athlete', 'Businessman', 'Innovator'];

const posts = [
    {
      title: 'Humans and AI',
      abstract:
        'An exploration of the evolving relationship between humans and artificial intelligence, examining the implications for society.',
      date: '2024-10-09',
      banner: '/static/humans-ai-banner.jpg',
      type: 'Technology',
      timecode: '00:02:45:30',
      slug: 'humans-and-ai',
    },
    {
      title: 'Thinking In Words',
      abstract:
        'Exploring the art of articulating thoughts through written expression and its impact on cognitive development.',
      date: '2024-08-08',
      banner: '/static/thinking-words-banner.jpg',
      type: 'Philosophy',
      timecode: '00:02:15:30',
      slug: 'thinking-in-words',
    },
    {
      title: 'Eagle Scout Letter of Ambition',
      abstract:
        'A personal reflection on leadership, service, and the journey toward achieving the Eagle Scout rank.',
      date: '2024-05-25',
      banner: '/static/eagle-scout-banner.jpg',
      type: 'Leadership',
      timecode: '00:01:45:20',
      slug: 'eagle-scout-letter',
    },
    {
      title: 'Eagle Scout Letter of Ambition',
      abstract:
        'A personal reflection on leadership, service, and the journey toward achieving the Eagle Scout rank.',
      date: '2024-05-25',
      banner: '/static/eagle-scout-banner.jpg',
      type: 'Leadership',
      timecode: '00:01:45:20',
      slug: 'eagle-scout-letter',
    },
    {
      title: "Parkinson's Syndrome: A Personal Perspective",
      abstract:
        "Exploring the complexities of Parkinson's syndrome through both medical and human lenses",
      date: '2023-09-14',
      banner: '/static/parkinsons-banner.jpg',
      type: 'Health',
      timecode: '00:01:30:00',
      slug: 'parkinsons-syndrome',
    },
  ],
  featured = {
    title: 'Lament of Academia',
    abstract:
      'A critical examination of modern educational systems and their impact on intellectual growth.',
    date: '2024-09-19',
    banner: '/static/academia-banner.jpg',
    type: 'Education',
    featured: true,
    timecode: '00:05:30:00',
    slug: 'lament-of-academia',
  };

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const project = useRef();
  const details = useRef();
  const contact = useRef();
  const article = useRef();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const sections = [intro, details, project, contact, article];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        let target = entries[0];
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            target = entry;
            const section = entry.target;
            console.log(section);

            observer.unobserve(section);
            dispatch({
              type: 'updateSection',
              value: section,
            });
            if (visibleSections.includes(section)) return;

            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px 0% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    let isHovering1 = false;
    let isHovering2 = false;
    const LERP_SCALE = 0.15;
    const LERP_SCALE_SLOW = 0.14; // New: Slower lerp scale

    let currentBorderOpacity = 1;
    let targetBorderOpacity = 1;
    let currentBorderWidth = 1;
    let targetBorderWidth = 1;

    function isDarkMode() {
      let isDark = document.body.getAttribute('data-theme') === 'light' ? false : true;
      // console.log(isDark);
      return isDark;
    }

    function updateCursors() {
      const cursor1 = document.querySelector('.custom-cursor');
      const cursor2 = document.querySelector('.custom-cursor-2');
      const darkMode = isDarkMode();

      cursor1.style.backgroundColor = darkMode ? 'white' : 'black';
      let cursorColor2 = darkMode
        ? `rgba(255, 255, 255, ${currentBorderOpacity})`
        : `rgba(0, 0, 0, ${currentBorderOpacity})`;
      cursor2.style.borderColor = cursorColor2;
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    let scale = 1.0;
    let targetScale = 1.0;

    let mouseX = 0;
    let mouseY = 0;
    let prevCursorX1 = 0;
    let prevCursorY1 = 0;
    let prevCursorX2 = 0;
    let prevCursorY2 = 0;
    let prevWindowWidth = window.innerWidth;

    function update() {
      if (window.angular) {
        return;
      }

      const cursor1 = document.querySelector('.custom-cursor');
      const cursor2 = document.querySelector('.custom-cursor-2');

      prevCursorX1 = lerp(prevCursorX1, mouseX, LERP_SCALE * 4);
      prevCursorY1 = lerp(prevCursorY1, mouseY, LERP_SCALE * 4);

      prevCursorX2 = lerp(prevCursorX2, mouseX, LERP_SCALE * 3);
      prevCursorY2 = lerp(prevCursorY2, mouseY, LERP_SCALE * 3);

      const transform1 = `translate3D(${prevCursorX1}px, ${prevCursorY1}px, 0) scale(1.0)`;
      cursor1.style.transform = transform1;

      let scaleLerpScale = isHovering1 && isHovering2 ? LERP_SCALE_SLOW : LERP_SCALE;
      scale = lerp(scale, targetScale, scaleLerpScale);
      currentBorderWidth = lerp(currentBorderWidth, targetBorderWidth, LERP_SCALE);
      currentBorderOpacity = lerp(currentBorderOpacity, targetBorderOpacity, LERP_SCALE);

      const transform2 = `translate3D(${prevCursorX2}px, ${prevCursorY2}px, 0) scale(${scale})`;
      cursor2.style.transform = transform2;
      cursor2.style.borderWidth = `${currentBorderWidth}px`;

      updateCursors();

      requestAnimationFrame(update);
    }

    window.addEventListener('mousemove', e => {
      const cursor2 = document.querySelector('.custom-cursor-2');
      const cursor1 = document.querySelector('.custom-cursor');
      if (cursor1) cursor1.style.opacity = 1;
      if (cursor2) cursor2.style.opacity = 1;
      const widthRatio = window.innerWidth / prevWindowWidth;
      mouseX = e.clientX - 16 * widthRatio;
      mouseY = e.clientY - 16;
      prevWindowWidth = window.innerWidth;
    });

    function setupCursors() {
      // const cursor1 = document.querySelector('.custom-cursor');
      const button = document.querySelectorAll('a');
      const link = document.querySelectorAll('button');

      button.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
          isHovering2 = true;
          targetScale = 1.5;
          targetBorderWidth = 15.5;
          targetBorderOpacity = 0.5;
        });

        button.addEventListener('mouseleave', function () {
          isHovering2 = false;
          targetScale = 1.0;
          targetBorderWidth = 1;
          targetBorderOpacity = 1;
        });
      });

      link.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
          isHovering2 = true;
          targetScale = 1.5;
          targetBorderWidth = 15.5;
          targetBorderOpacity = 0.5;
        });

        link.addEventListener('mouseleave', function () {
          isHovering2 = false;
          targetScale = 1.0;
          targetBorderWidth = 1;
          targetBorderOpacity = 1;
        });
      });
    }

    setupCursors();
    updateCursors();

    // document.querySelector('.mode-switcher').addEventListener('click', function () {
    //     setTimeout(updateCursors, 100);
    // });

    // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    // prefersDarkScheme.addEventListener("change", function () {
    //     updateCursors();
    // });

    update();
  }, []);

  return (
    <>
      <ScrollTop scrollIndicatorHidden={scrollIndicatorHidden} />
      <CustomCursor />
      <CustomCursorCore />
      <div className={styles.home}>
        <Meta title="Portfolio" description="Portfolio of Chase Roll." />
        <Intro
          id="intro"
          sectionRef={intro}
          disciplines={disciplines}
          scrollIndicatorHidden={scrollIndicatorHidden}
        />

        <Profile
          sectionRef={details}
          visible={visibleSections.includes(details.current)}
          id="about"
        />

        <List
          sectionRef={project}
          visible={visibleSections.includes(project.current)}
          id="projects"
        />

        <Article
          posts={posts}
          featured={featured}
          id="articles"
          sectionRef={article}
          visible={visibleSections.includes(article.current)}
        />
        <Contact
          id="contact"
          visible={visibleSections.includes(contact.current)}
          sectionRef={contact}
        />
        <Footer />
      </div>
    </>
  );
};
