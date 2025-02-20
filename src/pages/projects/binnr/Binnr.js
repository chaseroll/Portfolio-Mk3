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
export const Binnr = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />{' '}
        <ProjectHeader
          title="Binnr"
          description="A modern, student-run trash collection service making dorm waste management effortless."
          roles={['Entrepreneurial']}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Impetus</ProjectSectionHeading>
              <p>
                University life gets messy fast—I learned that firsthand. Lugging trash
                across our dorm only to find overflowing dumpsters was frustrating and
                inconvenient. My roommates and I knew there had to be a better way.
              </p>
              <p>
                So, we launched Binnr, a door-to-door, affiliate-driven trash collection
                service. What started as a proof of concept quickly demonstrated
                scalability, with over 45% of our dorm signing up within a week and a
                nearly 90% retention rate over the first semester.
              </p>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The Vision</ProjectSectionHeading>
              <p>
                We do not plan to continue running Binnr manually—its future is a
                scalable, affiliate-run waste collection model designed to be replicated
                across universities and beyond. The goal is a seamless, student-run system
                where affiliates handle pickups in exchange for automated, recurring
                payments, earning anywhere from 75%–85% based on the number of rooms they
                service. Essentially, the Uber of trash collection.
              </p>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
