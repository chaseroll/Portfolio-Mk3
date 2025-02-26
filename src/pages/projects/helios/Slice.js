import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
// import sliceAppLarge from 'assets/slice-app-large.jpg';
// import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
// import sliceApp from 'assets/slice-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
// import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
// import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/helios.png';
import sliceSidebarAnnotations from 'assets/halios1.png';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
import sliceSidebarLayers from 'assets/halios2.png';
import haliosHome from 'assets/haliosHome.png';

import heliosNext from 'assets/helios-next.jpg'; // Replace with actual path to your image
import heliosNextLarge from 'assets/helios-next-large.jpg'; // Replace with actual path
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment, useEffect } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';
import { CustomCursor } from 'components/CustomCursor';
import { CustomCursorCore } from 'components/CustomCursorCore';

const title = 'Helios App';
const description =
  'An AI-powered productivity app designed to help users maximize discipline, efficiency, and personal growth.';

const roles = [
  'UI / UX Design',
  'Front / Backend Development',
  'Artificial Intelligence',
];

const CONTENT = {
  howItStarted: {
    heading: 'How It All Started',
    paragraphs: [
      'Helios was born from my struggle with discipline and the desire to help others facing similar challenges. The app provides a toolkit for individuals looking to enhance their productivity, physicality, and mental acuity. If successful, Helios will aid users in their journey toward realizing their full potential.',
    ],
  },
  bringingItTogether: {
    heading: 'Bringing it together',
    paragraphs: [
      'I aimed to integrate the best features from time management, fitness, nutrition, and social media apps and elevate them with AI—making it one of the first of its kind. Helios achieves this while maintaining a simple, clean, and easy-to-use interface.',
    ],
  },
  professionalFeedback: {
    heading: 'Professional Feedback',
    paragraphs: [
      'Throughout the design phase, I’ve engaged with UI/UX designers, developers, and successful CEOs to refine the app’s functionality and business model. This feedback has not only shaped Helios to better meet user needs but has also expanded my professional network and applied learning.',
    ],
  },
  whatsNext: {
    heading: 'Whats Next?',
    paragraphs: [
      'Slated for a late 2025 release under the Valqora brand, Helios is set to revolutionize personal productivity. I am currently in the process of adding additional features, polishing the user experience, and preparing post-launch support. The future is bright!',
    ],
  },
  projectRelease: {
    heading: 'Project Release',
    paragraphs: [
      'Completion of this project is on the horizon. Expect this page to be updated with comprehensive details soon.',
    ],
  },
};

export const Slice = () => {
  useEffect(() => {
    let isHovering1 = false;
    let isHovering2 = false;
    const LERP_SCALE = 0.15;
    const LERP_SCALE_SLOW = 0.13; // New: Slower lerp scale

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

  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <CustomCursor />
      <CustomCursorCore />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackground} 2560w`}
          placeholder={sliceBackground}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            {/* <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            /> */}
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                {CONTENT.howItStarted.heading}
              </ProjectSectionHeading>
              {CONTENT.howItStarted.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns
            style={{ marginBottom: '0px' }}
            centered
            className={styles.columns}
          >
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                {CONTENT.bringingItTogether.heading}
              </ProjectSectionHeading>
              {CONTENT.bringingItTogether.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers]}
                placeholder={sliceSidebarLayers}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations]}
                placeholder={sliceSidebarAnnotations}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <Image
          srcSet={[haliosHome]}
          placeholder={haliosHome}
          alt="Multiple user annotations on a shared layer."
          sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>
                {CONTENT.professionalFeedback.heading}
              </ProjectSectionHeading>
              {CONTENT.professionalFeedback.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection dark>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>{CONTENT.whatsNext.heading}</ProjectSectionHeading>
              {CONTENT.whatsNext.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </ProjectTextRow>
            <Image
              srcSet={[heliosNext, heliosNextLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>
                {CONTENT.projectRelease.heading}
              </ProjectSectionHeading>
              {CONTENT.projectRelease.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
