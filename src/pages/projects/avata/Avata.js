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
import { Meta } from 'components/Meta';
import styles from './Slice.module.css';
import { Image } from 'components/Image';
import { media } from 'utils/style';

import sliceBackground from 'assets/avata.png';
import avataFeed from 'assets/avata-feedback.png';
import avataStack from 'assets/avata-stack.png';
import avataBanner from 'assets/avata-banner.png';
import { CustomCursor } from '../../../components/CustomCursor';
import { CustomCursorCore } from '../../../components/CustomCursorCore';

const PROJECT_DATA = {
  title: 'Avata',
  description:
    'An entrepreneurial dive into event hosting—turning strategy, logistics, and marketing into a profitable experience.',
  roles: ['Hospitality', 'Entrepreneurial'],
};

const CONTENT = {
  howItStarted: {
    heading: 'How It Started',
    paragraphs: [
      `Avata was my first true entrepreneurial venture—or at least, the first one
      I seriously planned. The idea struck me at a Christmas party at a local
      wedding venue my friend had brought me to. As I looked around, I realized
      how much money the organizers were making from ticket fees and concessions
      simply for hosting an event with music for students.`,

      `Curious, I tracked down the organizer—a high school senior—and picked his
      brain for half an hour. What I learned reinforced my belief that this was
      an untapped local opportunity, one I could improve upon, outcompete, and
      monopolize. That night, I began brainstorming and created a massive
      document outlining my strategy.`,
    ],
  },
  vision: {
    heading: 'Building the Playbook',
    paragraphs: [
      `I researched local high schools and universities, mapped out all venue locations within a 15-minute radius, and calculated student populations to determine viability. I structured ticket pricing to break even at a low attendance threshold while projecting a 3x multiple to fund future events and generate profit.`,
      `Risk management was a priority. I planned to secure liability insurance—a necessity I recognized when a medical emergency occurred at that Christmas party. I built a digital sign-in system to collect attendee information, storing it in a growing database for future marketing—after all, data is oil.`,
      `For operations, I assembled a cost-effective team—mostly friends—to handle ticketing, security, drink service, and event coordination. Through mutual connections, I sought out a DJ to manage lighting, acoustics, and crowd engagement.`,
      `Marketing was aggressive. Social media was key, leveraging mass-connected Instagram accounts to build a database of students and their contacts at target schools, alongside automation to scale outreach. I planned to attend sporting events, distribute flyers, and offer free entrance to select students in exchange for bringing friends. Additionally, I planned to partner with students with popular social media accounts, giving them free entry for promotion on their pages.`,
      `To establish credibility and trust, I built a fully operational website—Avata.events (no longer functioning)—using WordPress with Stripe API integration. The site not only made the company look professional but also offered incentives for discounted tickets if attendees signed up and paid in advance. I also reached out to local schools, offering to organize their events at razor-thin margins to build relationships—though none ever responded to my many letters.`,
    ],
  },
  financialModel: {
    heading: 'Financial Model & Scalability',
    paragraphs: [
      `The financial model was built for a 300% return on investment per event, with approximately one-third covering expenses, one-third reinvested, and one-third as net profit. The system was designed to be scalable, competitive, and sustainable.`,
    ],
  },
  bringingTogether: {
    heading: 'What Actually Happened?',
    paragraphs: [
      `I never got around to hosting any events, but the process of building the business on paper was invaluable. Avata became a phenomenal learning experience, sharpening my ability to think strategically, break down complex problems, and create actionable plans. More importantly, it laid the foundation for everything I pursued afterward.`,
      `In retrospect, this wasn’t about event hosting—it was about learning how to identify opportunities, analyze logistics, and build something real from the ground up.`,
      `I still believe there’s an opportunity here, though I have no plans to pursue it further. If you’re interested in trying this out, feel free to reach out—I’d be happy to share the document outlining my full strategy.`,
    ],
  },
};

export const Avata = () => {
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
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackground.src} 2560w`}
          placeholder={sliceBackground}
          opacity={0.8}
        />
        <ProjectHeader
          title={PROJECT_DATA.title}
          description={PROJECT_DATA.description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={PROJECT_DATA.roles}
          linkLabel="Retired"
        />
        <ProjectSection padding="top" light>
          <ProjectSectionColumns centered className={styles.columns}>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  {CONTENT.howItStarted.heading}
                </ProjectSectionHeading>
                {CONTENT.howItStarted.paragraphs.map((paragraph, index) => (
                  <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
                ))}
              </ProjectTextRow>
            </ProjectSectionContent>
            <Image
              style={{ marginTop: '4rem' }}
              raised
              srcSet={[avataBanner, avataBanner]}
              placeholder={avataBanner}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
            />
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>{CONTENT.vision.heading}</ProjectSectionHeading>
            {CONTENT.vision.paragraphs.map((paragraph, index) => (
              <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
            ))}
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            {/* <Image
              style={{ marginTop: '8rem' }}
              srcSet={[avataFeed, avataFeed]}
              placeholder={avataFeed}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />  */}
            <Image
              srcSet={[avataStack, avataStack]}
              placeholder={avataStack}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                {CONTENT.financialModel.heading}
              </ProjectSectionHeading>
              {CONTENT.financialModel.paragraphs.map((paragraph, index) => (
                <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
              ))}
            </ProjectTextRow>
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
