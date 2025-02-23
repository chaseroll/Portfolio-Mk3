import { Fragment } from 'react';
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
import styles from './Slice.module.css';
import { Image } from 'components/Image';
import { media } from 'utils/style';

import nextValqora from 'assets/valq-brand.png';
import videoSprMotionLarge from 'assets/valq-des.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';

import reviewLayer2 from 'assets/valq-review.png';
import reviewLayer from 'assets/valq-review2.png';

import sliceBackgroundLarge from 'assets/valqora4.png';
import sliceBackgroundPlaceholder from 'assets/valqora4.png';
import sliceBackground from 'assets/valqora4.png';
import { Meta } from 'components/Meta';

const PROJECT_DATA = {
  title: 'Valqora',
  description:
    'A motivational brand with 32.5K followers, sharing ideas, refining them in real time, and building toward something greater.',
  roles: ['Social Media'],
};

const CONTENT = {
  howItStarted: {
    heading: 'How It Started',
    paragraphs: [
      'Valqora began in 2024 as a motivational brand on social media, initially planned to support the promotion of my upcoming AI-based productivity app, Helios. Over time, however, it took on its own distinct form, evolving into a space where I share my thoughts, document what I learn, and highlight insights from others—all presented in a polished, visually engaging format.',
      `Recently, my team and I archived all past posts on the page and are reimagining Valqora's content with a sharper focus, aligning it more effectively with my long-term vision.`,
      'Here’s a preview of our revamped approach:',
    ],
  },
  vision: {
    heading: 'The Vision',
    paragraphs: [
      'As the brand continues to grow, I envision Valqora becoming something of a town hall, connecting my projects—such as Indomitable and Helios—each built upon shared core ideals. More than just a platform, it is becoming a launch pad for new ventures and a space where ideas are tested, refined, and strengthened in real time by my audience.',
    ],
  },
  bringingTogether: {
    heading: `What’s Next?`,
    paragraphs: [
      'I plan to continue working with my team, posting regularly, and growing Valqora into one of the largest motivational brands across social media—and eventually expand into my own personal brand.',
    ],
  },
};

export const Slice = () => {
  return (
    <Fragment>
      <Meta
        title={PROJECT_DATA.title}
        prefix="Projects"
        description={PROJECT_DATA.description}
      />

      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={PROJECT_DATA.title}
          description={PROJECT_DATA.description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={PROJECT_DATA.roles}
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
        <ProjectSection padding="top" light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                {CONTENT.howItStarted.heading}
              </ProjectSectionHeading>
              {CONTENT.howItStarted.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ProjectTextRow>
            <Image
              raised
              className={styles.video}
              srcSet={[
                { src: videoSprMotionLarge, width: 640 },
                { src: videoSprMotionLarge, width: 1250 },
              ]}
              //change the video
              placeholder={videoSprMotionPlaceholder}
              alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
              sizes={`(max-width: ${media.mobile}px) 50vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <ProjectTextRow>
              <ProjectSectionHeading>{CONTENT.vision.heading}</ProjectSectionHeading>
              {CONTENT.vision.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ProjectTextRow>

            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[reviewLayer]}
                placeholder={reviewLayer}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[reviewLayer2]}
                placeholder={reviewLayer2}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>
              {CONTENT.bringingTogether.heading}
            </ProjectSectionHeading>
            {CONTENT.bringingTogether.paragraphs.map((paragraph, index) => (
              <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
            ))}
          </ProjectTextRow>

          <Image
            style={{ marginTop: '8rem' }}
            srcSet={[nextValqora, nextValqora]}
            placeholder={nextValqora}
            alt="The new My Slides tab in slice, showing annotated and favorited slides."
            sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
          />
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
