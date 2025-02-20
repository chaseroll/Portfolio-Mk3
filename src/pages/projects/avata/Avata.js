import { Fragment } from 'react';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
} from 'layouts/Project';

import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';

const sections = [
  {
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
  {
    heading: 'Building the Playbook',
    paragraphs: [
      `I researched local high schools and universities, mapped out all venue
      locations within a 15-minute radius, and calculated student populations to
      determine viability. I structured ticket pricing to break even at a low
      attendance threshold while projecting a 3x multiple to fund future events
      and generate profit.`,

      `Risk management was a priority. I planned to secure liability insurance—a
      necessity I recognized when a medical emergency occurred at that Christmas
      party. I built a digital sign-in system to collect attendee information,
      storing it in a growing database for future marketing—after all, data is
      oil.`,

      `For operations, I assembled a cost-effective team—mostly friends—to handle
      ticketing, security, drink service, and event coordination. Through mutual
      connections, I sought out a DJ to manage lighting, acoustics, and crowd
      engagement.`,
    ],
  },
  {
    heading: 'What Actually Happened?',
    paragraphs: [
      `I never got around to hosting any events, but the process of building the
      business on paper was invaluable. Avata became a phenomenal learning
      experience, sharpening my ability to think strategically, break down
      complex problems, and create actionable plans. More importantly, it laid
      the foundation for everything I pursued afterward.`,

      `In retrospect, this wasn't about event hosting—it was about learning how
      to identify opportunities, analyze logistics, and build something real
      from the ground up. I still believe there's an opportunity here, though I
      have no plans to pursue it further.`,
    ],
  },
];

export const Avata = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title="Avata"
          description="An entrepreneurial dive into event hosting—turning strategy, logistics, and marketing into a profitable experience."
          roles={['Hospitality', 'Entrepreneurial']}
        />
        <ProjectSection>
          <ProjectSectionContent>
            {sections.map((section, sectionIndex) => (
              <ProjectTextRow key={sectionIndex}>
                <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </ProjectTextRow>
            ))}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
