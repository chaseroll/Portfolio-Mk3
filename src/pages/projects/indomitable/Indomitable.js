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
export const Indomitable = () => {
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
          title="Indomitable"
          description="A clean, high-performance energy drink designed to fuel both mind and body—without compromise."
          roles={['Health and Nutrition', 'Consumer Packaged Goods', 'Entrepreneurial']}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Gap</ProjectSectionHeading>
              <p>
                There is a strong yet underestimated demand for a truly healthy energy
                drink. Brands like Celsius and Reign claim to fit that description but, in
                reality, merely masquerade as health-conscious options. They rely on
                artificial sweeteners like sucralose, excessive amounts of caffeine, and
                cheap additives such as cyanocobalamin instead of its far more beneficial
                methylated counterpart—methylcobalamin.
              </p>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The Solution</ProjectSectionHeading>
              <p>
                I am developing Indomitable, an energy drink built from the ground up to
                prioritize health, performance, and longevity. Implementing novel yet
                proven nutritional science, it features a base of hydrogen-infused,
                carbonated coconut water, naturally derived caffeine from green tea and
                guarana, and organic pure honey as a natural sweetener—eliminating
                artificial sugars entirely. Flavoring comes from natural fruit extracts
                and juices, while high-quality vitamins, minerals, and nootropics are
                carefully selected to enhance energy, hydration, and cognitive function
                without the crash.
              </p>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>What's Next?</ProjectSectionHeading>
              <p>
                Before its official launch, I plan to shelve Indomitable locally and
                gather feedback, refining the formula and branding as needed. From there,
                I will launch it through Valqora, leveraging my existing brand presence to
                establish a strong foundation. Over time, I aim to secure brand deals and
                partnerships to scale its reach and introduce a truly healthy and
                effective energy drink that will disrupt the market.
              </p>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
