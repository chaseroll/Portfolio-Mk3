import { Fragment } from 'react';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
} from 'layouts/Project';
import indoFormula from 'assets/indo-formula.png';
import sliceBackground from 'assets/Indomitable.png';
import indoBgCan from 'assets/indo-bg-can.png';
import indoCan from 'assets/indo-can.png';
import indoBrain from 'assets/indo-brain-bg.png';
import { Meta } from 'components/Meta';
import styles from './Slice.module.css';
import { Image } from 'components/Image';
import { media } from 'utils/style';

const PROJECT_DATA = {
  title: 'Indomitable',
  description:
    'A clean, high-performance energy drink designed to fuel both mind and body—without compromise.',
  roles: ['Health and Nutrition', 'Consumer Packaged Goods', 'Entrepreneurial'],
};

const CONTENT = {
  gap: {
    heading: 'The Gap',
    paragraphs: [
      'There is a strong yet underestimated demand for a truly healthy energy drink. Brands like Celsius and Reign claim to fit that description but, in reality, merely masquerade as health-conscious options. They rely on artificial sweeteners like sucralose, excessive amounts of caffeine, and cheap additives such as cyanocobalamin instead of its far more beneficial methylated counterpart—methylcobalamin.',
    ],
  },
  solution: {
    heading: 'The Solution',
    paragraphs: [
      'I am developing Indomitable, an energy drink built from the ground up to prioritize health, performance, and longevity. Implementing novel yet proven nutritional science, it features a base of hydrogen-infused, carbonated coconut water, naturally derived caffeine from green tea and guarana, and organic pure honey as a natural sweetener—eliminating artificial sugars entirely. Flavoring comes from natural fruit extracts and juices, while high-quality vitamins, minerals, and nootropics are carefully selected to enhance energy, hydration, and cognitive function without the crash.',
    ],
  },
  nextSteps: {
    heading: "What's Next?",
    paragraphs: [
      'Before its official launch, I plan to shelve Indomitable locally and gather feedback, refining the formula and branding as needed. From there, I will launch it through Valqora, leveraging my existing brand presence to establish a strong foundation. Over time, I aim to secure brand deals and partnerships to scale its reach and introduce a truly healthy and effective energy drink that will disrupt the market.',
    ],
  },
};

export const IndomitablePage = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <Meta
          title={PROJECT_DATA.title}
          prefix="Projects"
          description={PROJECT_DATA.description}
        />

        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackground} 2560w`}
          placeholder={sliceBackground}
          opacity={0.8}
        />
        <ProjectHeader
          title={PROJECT_DATA.title}
          description={PROJECT_DATA.description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={PROJECT_DATA.roles}
        />

        <ProjectSection padding="top" light>
          <ProjectSectionColumns centered className={styles.columns}>
            <ProjectTextRow>
              <ProjectSectionHeading>{CONTENT.gap.heading}</ProjectSectionHeading>
              {CONTENT.gap.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ProjectTextRow>
            <div className={styles.sidebarImages} style={{ display: 'flex' }}>
              <Image
                raised
                style={{ opacity: 1 }}
                className={styles.sidebarImage}
                srcSet={[indoFormula]}
                placeholder={indoFormula}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <ProjectTextRow>
              <ProjectSectionHeading>{CONTENT.solution.heading}</ProjectSectionHeading>
              {CONTENT.solution.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ProjectTextRow>

            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[indoBgCan]}
                placeholder={indoBgCan}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 300px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[indoBgCan]}
                placeholder={indoBgCan}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 300px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          {/* <ProjectSectionContent> */}
          <ProjectTextRow>
            <ProjectSectionHeading>{CONTENT.nextSteps.heading}</ProjectSectionHeading>
            {CONTENT.nextSteps.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ProjectTextRow>
          <Image
            style={{ marginTop: '8rem' }}
            className={styles.sidebarImage}
            srcSet={[indoBrain]}
            placeholder={indoBrain}
            alt="Multiple user annotations on a shared layer."
            sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
          />
          {/* </ProjectSectionContent> */}
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
