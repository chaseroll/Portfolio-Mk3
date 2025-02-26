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

import nextValqora from 'assets/binner2.png';
import visionLayer from 'assets/binner3.png';

import sliceBackgroundLarge from 'assets/binner.png';
import sliceBackgroundPlaceholder from 'assets/binner.png';
import sliceBackground from 'assets/binner.png';
import { Meta } from 'components/Meta';
import { CustomCursor } from '../../../components/CustomCursor';
import { CustomCursorCore } from '../../../components/CustomCursorCore';

const PROJECT_DATA = {
  title: 'Binnr',
  description:
    'A modern, student-run trash collection service making dorm waste management effortless.',
  roles: ['Entrepreneurial'],
};

const CONTENT = {
  howItStarted: {
    heading: 'The Impetus',
    paragraphs: [
      'University life gets messy fast—I learned that firsthand. Lugging trash across our dorm only to find overflowing dumpsters was frustrating and inconvenient. My roommates and I knew there had to be a better way.',
      'So, we launched Binnr, a door-to-door, affiliate-driven trash collection service. What started as a proof of concept quickly demonstrated scalability, with over 45% of our dorm signing up within a week and a nearly 90% retention rate over the first semester.',
    ],
  },
  vision: {
    heading: 'The Vision',
    paragraphs: [
      'We do not plan to continue running Binnr manually—its future is a scalable, affiliate-run waste collection model designed to be replicated across universities and beyond. The goal is a seamless, student-run system where affiliates handle pickups in exchange for automated, recurring payments, earning anywhere from 75%–85% based on the number of rooms they service. Essentially, the Uber of trash collection.',
      '\n',
      'To refine current operations, we’re integrating SMS notifications, tap-to-pay signups via our partner Whisp.io, and a streamlined website to eliminate friction and enhance user experience. Affiliates will earn flexibly on their own terms, with incentives to maintain high service standards while operating independently.',
    ],
  },
  bringingTogether: {
    heading: `What’s Next?`,
    paragraphs: [
      'We’re rolling out tiered plans, automated pickup reminders, and an optimized affiliate program where students can effortlessly manage clients, schedules, and payments through an app we are designing. Marketing efforts will expand across universities through on-campus outreach, QR codes, and targeted social media campaigns.',
      'Long-term, Binnr has the potential to disrupt waste management, scaling its student-run model into smart waste solutions, automated sorting, and enterprise partnerships.',
      'For now, we’re keeping it simple—one dorm, one pickup at a time.',
    ],
  },
};

export const Binnr = () => {
  return (
    <Fragment>
      <CustomCursor />
      <CustomCursorCore />
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
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </ProjectTextRow>
            <Image
              srcSet={[nextValqora, nextValqora]}
              placeholder={nextValqora}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <ProjectTextRow>
              <ProjectSectionHeading>{CONTENT.vision.heading}</ProjectSectionHeading>
              {CONTENT.vision.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </ProjectTextRow>
            <Image
              srcSet={[visionLayer, visionLayer]}
              placeholder={visionLayer}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
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
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
