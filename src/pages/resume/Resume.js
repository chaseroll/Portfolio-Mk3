import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { theme, useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import { Text } from 'components/Text';
import { useInterval, usePrevious, useScrollToHash } from 'hooks';
import dynamic from 'next/dynamic';
import { Fragment, useEffect, useState } from 'react';
import styles from './Resume.module.css';
import { Link } from 'components/Link';
import { Footer } from 'components/Footer';
import { CustomCursor } from 'components/CustomCursor';
import { CustomCursorCore } from 'components/CustomCursorCore';
import { Button } from 'components/Button';

const DisplacementSphere = dynamic(() =>
  import('layouts/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);

export function Resume({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const titleId = `${id}-title`;
  const theme = useTheme();
  const prevTheme = usePrevious(theme);

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

      if (cursor1?.style) cursor1.style.backgroundColor = darkMode ? 'white' : 'black';
      let cursorColor2 = darkMode
        ? `rgba(255, 255, 255, ${currentBorderOpacity})`
        : `rgba(0, 0, 0, ${currentBorderOpacity})`;
      if (cursor2?.style) cursor2.style.borderColor = cursorColor2;
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
      if (cursor1?.style) cursor1.style.transform = transform1;

      let scaleLerpScale = isHovering1 && isHovering2 ? LERP_SCALE_SLOW : LERP_SCALE;
      scale = lerp(scale, targetScale, scaleLerpScale);
      currentBorderWidth = lerp(currentBorderWidth, targetBorderWidth, LERP_SCALE);
      currentBorderOpacity = lerp(currentBorderOpacity, targetBorderOpacity, LERP_SCALE);

      const transform2 = `translate3D(${prevCursorX2}px, ${prevCursorY2}px, 0) scale(${scale})`;
      if (cursor2?.style) cursor2.style.transform = transform2;
      if (cursor2?.style) cursor2.style.borderWidth = `${currentBorderWidth}px`;

      updateCursors();

      requestAnimationFrame(update);
    }

    window.addEventListener('mousemove', e => {
      const cursor2 = document.querySelector('.custom-cursor-2');
      const cursor1 = document.querySelector('.custom-cursor');

      if (cursor1?.style) cursor1.style.opacity = 1;
      if (cursor2?.style) cursor2.style.opacity = 1;
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

  useEffect(() => {}, [theme.themeId, prevTheme]);

  const skills = [
    'Rapid Learner & Research-Driven',
    'Critical & Analytical Thinking',
    'Detail- and Optimization-Oriented',
    'Excellent Communication & Team Collaboration',
    'Entrepreneurial & Disruptive Thinking',
    'Self-Directed and Autonomous',
    'Adaptable, Resilient, & Disciplined',
  ];

  const experience = [
    {
      company: 'Wisp.io, Miami, Florida (Tech Startup)',
      type: 'Affiliate: (2025 - Present)',
      skills: [
        "Leading the expansion of Whisp's SMS technology and brand into the Orlando area.",
        'Recruiting and training a high-achieving team to drive local market presence.',
        'Developing strategic outreach initiatives to establish partnerships and accelerate ubiquitous adoption.',
      ],
    },
    {
      company: 'CPAC, Washington, DC & Orlando, FL',
      type: 'Intern: (2022)',
      skills: [
        "Volunteered on a team to manage CPAC's annual conferences with over 10,000 attendees, focusing on the social media campaigns and working logistics for event speakers over 2, 3-day events.",
        'Conducted video in-person interviews with various political officials.',
        "Enhanced CPAC's social media presence by creating and uploading quality posts, boosting engagement and audience reach.",
      ],
    },
    {
      company: 'Cashes Creek Farms, Blue Ridge, GA',
      type: 'Farm Team Member: (2020 - 2023)',
      skills: [
        'Managed land, harvested crops, and a multitude of machinery for small-scale agricultural operations.',
        'Assisted in animal care, including feed and medication preparation, milking dairy goats, managing chickens, rabbits, and horses.',
        'Constructed and maintained fences around grazing areas to ensure animal safety.',
      ],
    },
  ];

  const education = [
    'Freshman Physics major at UCF.',
    'Graduated high school with a 3.96 cumulative unweighted GPA, completing advanced coursework in BC Calculus, AP Physics, and computer science through The Art of Problem Solving.',
    'Self-studied and explored competitive math training programs such as Worldwide Online Olympiad Training (WOOT) to deepen my skills, along with additional studies in Latin, philosophy, and Spanish.',
  ];

  const projects = [
    [
      'Growing',
      'Valqora,',
      ' a motivational brand with 32.5K followers, into a vibrant community and a launchpad for larger ventures.',
      'valqora',
    ],
    [
      'Expanding',
      'Binnr,',
      ' a modern, student-run trash collection service making dorm waste management effortless.',
      'binnr',
    ],
    [
      'Formulating',
      'Indomitable,',
      ' a clean, high-performance energy drink designed to fuel both mind and body—without compromise.',
      'indomitable',
    ],
    [
      'Developing',
      'Helios,',
      ' an AI-powered productivity app designed to help users maximize discipline, efficiency, and personal growth.',
      'helios',
    ],
    [
      'Designed a small',
      'hybrid rocket engine',
      ' with variable thrust and thrust vectoring capabilities.',
      'rocket-engine',
    ],
    [
      'Founded',
      'Avata,',
      ' a startup that sought to streamline local event planning and coordination.',
      'avata',
    ],
    [
      'Developed a small-scale',
      'neural network',
      ' in Python using nnfs.io for image recognition and classification.',
      'neural-network',
    ],
  ];

  const extra = [
    'Jujitsu, Chess, Piano, and Flight School.',
    'Eagle Scout in the Boy Scouts of America.',
    'Cross Country State Champion.',
  ];

  const website = ['ChaseRoll.com', 'Avata.events', 'UseHelios.com'];

  return (
    <>
      <CustomCursor />
      <CustomCursorCore />
      <Section
        className={styles.resume}
        as="section"
        ref={sectionRef}
        id={id}
        aria-labelledby={titleId}
        tabIndex={-1}
        {...rest}
      >
        <Transition in key={theme.themeId} timeout={1000}>
          {(visible, status) => (
            <Fragment>
              <DisplacementSphere
                style={{
                  position: 'fixed',
                  top: 0,
                }}
              />
              <div className={styles.heading}>
                <Heading
                  className={styles.heading}
                  data-visible={visible}
                  level={3}
                  weight="bold"
                >
                  <DecoderText text="RESUME" start={true} />
                </Heading>
                <div className={styles.downloadButtonWrap}>
                  <Button
                    style={{ zIndex: '-1' }}
                    href="Resume.pdf"
                    target="_blank"
                    className={styles.downloadButton}
                    download
                  >
                    Download CV
                  </Button>
                </div>
              </div>
              <div className={styles.resumeWrapper}>
                <div className={styles.resumeContent}>
                  <div className={styles.section}>
                    <Heading data-visible={true} level={4}>
                      Chase Roll
                    </Heading>
                    <p className={styles.textContent}>
                      <p>
                        Phone Number: <Link href="/#contact">706-633-9432</Link>
                      </p>
                      <p>
                        E-mail: <Link href="/#contact">rollchase@gmail.com</Link>
                      </p>
                    </p>
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Profile
                    </Heading>
                    <p className={styles.textContent}>
                      I am an ambitious 18 year old entrepreneur, engineer, and creator
                      with a relentless drive to learn and challenge conventional
                      thinking, solve complex problems, and build incredible things. I
                      thrive at the intersection of technology, business, and
                      innovation—learning quickly, iterating frequently, and executing
                      with precision. I aim to spearhead systems, institutions, and
                      technologies that fundamentally upend the status quo and improve the
                      human condition.
                    </p>
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Key Skills
                    </Heading>
                    <ul className={styles.listContent}>
                      {skills.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Experience
                    </Heading>
                    {experience.map((item, idx) => (
                      <div key={idx}>
                        <p
                          className={styles.textContent}
                          style={{ paddingBottom: '0px', paddingTop: '15px' }}
                        >
                          <Link href="">{item.type}</Link>
                        </p>
                        <i
                          className={styles.textContent}
                          style={{ textDecoration: 'italic' }}
                        >
                          {item.company}
                        </i>
                        <ul className={styles.listContent}>
                          {item.skills.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Education
                    </Heading>
                    <ul className={styles.listContent}>
                      {education.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Projects
                    </Heading>
                    <ul className={styles.listContent}>
                      {projects.map((item, idx) => (
                        <li key={idx}>
                          {item[0]}{' '}
                          <Link href={`/projects/${item[3]}`}>
                            {item[1].toUpperCase()}
                          </Link>{' '}
                          {item[2]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Extracurriculars
                    </Heading>
                    <ul className={styles.listContent}>
                      {extra.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.section}>
                    <Heading data-visible={true} level={5}>
                      Websites
                    </Heading>
                    <ul className={styles.listContent}>
                      {website.map((item, idx) => (
                        <li key={idx}>
                          <Link href={`https://${item}`}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                    <p className={styles.listContent}> ... ... ...</p>
                  </div>
                </div>
              </div>
              <div className={styles.download}>
                <Button style={{ width: '300px' }} href="Resume.pdf" download>
                  Download CV
                </Button>
              </div>
            </Fragment>
          )}
        </Transition>
      </Section>
      <Footer />
    </>
  );
}
