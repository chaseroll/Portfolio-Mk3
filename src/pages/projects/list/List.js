import { ProjectSummary } from 'layouts/Home/ProjectSummary';
// import { Meta } from 'components/Meta';
// import { Section } from 'components/Section';
import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import valqora from 'assets/valqora.png';
import valqora1 from 'assets/valqora-1.png';
import binner from 'assets/binner.png';
import indomitable from 'assets/indomitable.png';

import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import rocketEngine from 'assets/rocket-engine-dark-large.jpg';
import styles from './List.module.css';
import React, { useRef, useState, useEffect } from 'react';
import { Heading } from 'components/Heading';
import { DecoderText } from 'components/DecoderText';
import { Input } from 'components/Input';
import { msToNum, numToMs } from 'utils/style';
import { tokens } from 'components/ThemeProvider/theme';
import { classes, cssProps } from 'utils/style';
import { useFormInput } from 'hooks';
// import { CustomCursor } from 'components/CustomCursor';
// import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
// import { CustomCursorCore } from 'components/CustomCursorCore';

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

const initDelay = tokens.base.durationS;

export const List = props => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const [size, setSize] = useState(2);
  const searchText = useFormInput('');
  const [filterType, setFilterType] = useState('');
  const [text, setText] = useState('');
  const refArray = [
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
  ];
  const [menuShow, setMenuShow] = useState(0);
  const [enter, setEnter] = useState(false);
  const [leave, setLeave] = useState(false);
  const [sections, setSection] = useState([projectOne, projectTwo]);

  // console.log(projectThree);
  const projectType = ['Engineering', 'Electronics', 'Computer Science'];

  const projects = [
    {
      id: 'project-3',
      sectionRef: projectThree,
      index: 3,
      title: 'Valqora',
      alternative: false,
      description:
        'A motivational brand with 32.5K followers, sharing ideas, refining them in real time, and building toward something greater.',
      buttonText: 'View project',
      buttonLink: '/projects/valqora',
      type: 'Computer Science',
      model: {
        type: 'phone',
        alt: 'Valqora Brand',
        textures: [
          {
            srcSet: [valqora, valqora],
            placeholder: valqora,
          },
          {
            srcSet: [valqora1, valqora1],
            placeholder: valqora1,
          },
        ],
      },
    },
    {
      id: 'project-5',
      sectionRef: projectFive,
      index: 5,
      title: 'Binnr',
      alternative: false,
      description:
        'A modern, student-run trash collection service making dorm waste management effortless.',
      buttonText: 'View project',
      buttonLink: '/projects/binnr',
      type: 'Computer Science',
      model: {
        type: 'laptop',
        alt: 'Binnr Service',
        textures: [
          {
            srcSet: [binner, binner],
            placeholder: binner,
          },
        ],
      },
    },
    {
      id: 'project-4',
      sectionRef: projectFour,
      index: 4,
      title: 'Indomitable',
      alternative: true,
      description:
        'A clean, high-performance energy drink designed to fuel both mind and body—without compromise.',
      buttonText: 'View project',
      buttonLink: '/projects/indomitable',
      type: 'Engineering',
      model: {
        type: 'laptop',
        alt: 'Indomitable Drink',
        textures: [
          {
            srcSet: [indomitable, indomitable],
            placeholder: indomitable,
          },
        ],
      },
    },
    {
      id: 'project-2',
      sectionRef: projectTwo,
      index: 2,
      title: 'Helios App',
      alternative: true,
      description:
        'An AI-powered productivity app designed to help users maximize discipline, efficiency, and personal growth.',
      buttonText: 'View project',
      buttonLink: '/projects/helios',
      type: 'Computer Science',
      model: {
        type: 'phone',
        alt: 'Digital Development',
        textures: [
          {
            srcSet: [gamestackTexture, gamestackTextureLarge],
            placeholder: gamestackTexturePlaceholder,
          },
          {
            srcSet: [gamestackTexture2, gamestackTexture2Large],
            placeholder: gamestackTexture2Placeholder,
          },
        ],
      },
    },
    {
      id: 'project-1',
      sectionRef: projectOne,
      index: 1,
      alternative: false,
      title: 'Hybrid Rocket Engine',
      description:
        'A hands-on approach to aerospace engineering, pushing the boundaries of small-scale rocketry.',
      buttonText: 'View project',
      buttonLink: '/projects/rocket-engine',
      type: 'Engineering',
      model: {
        type: 'laptop',
        alt: 'Rocket Engine',
        textures: [
          {
            srcSet: [rocketEngine, rocketEngine],
            placeholder: sprTexturePlaceholder,
          },
        ],
      },
    },
    {
      id: 'project-6',
      sectionRef: projectSix,
      index: 6,
      title: 'Avata',
      alternative: true,
      description:
        'An entrepreneurial dive into event hosting—turning strategy, logistics, and marketing into a profitable experience.',
      buttonText: 'View project',
      buttonLink: '/projects/avata',
      type: 'Computer Science',
      model: {
        type: 'laptop',
        alt: 'Avata Events',
        textures: [
          {
            srcSet: [sliceTexture, sliceTextureLarge],
            placeholder: sliceTexturePlaceholder,
          },
        ],
      },
    },
  ];

  // useEffect(() => {
  //   const newSection = size === 3 ? refArray[2] : size === 4 ? refArray[3] : null;
  //   if(newSection === null) {
  //     console.log('yes');
  //     setSection([refArray[0], refArray[1]]);

  //   }
  //   else setSection((prevSections) => [...prevSections, newSection]);
  // }, [size]);

  useEffect(() => {
    console.log(filterType);
    if (
      projects
        .filter(item => item.type.includes(filterType))
        .filter(checkFunction)
        .slice(0, size).length > 0
    )
      setSection(
        projects
          .filter(item => item.type.includes(filterType))
          .filter(checkFunction)
          .map(item => item.sectionRef)
          .slice(0, size)
      );
    else setSection([refArray[0], refArray[1]]);
  }, [text, size, filterType]);

  useEffect(() => {
    if (!sections?.length) return;

    // Create observers with configurations
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            setVisibleSections(prevSections => {
              if (prevSections.includes(section)) return prevSections;
              return [...prevSections, section];
            });
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    // Observe all sections
    sections.forEach(section => {
      if (section?.current) {
        sectionObserver.observe(section.current);
      }
    });

    // Observe first section for scroll indicator
    if (sections[0]?.current) {
      indicatorObserver.observe(sections[0].current);
    }

    // Cleanup function
    return () => {
      if (sectionObserver) {
        sections.forEach(section => {
          if (section?.current) {
            sectionObserver.unobserve(section.current);
          }
        });
        sectionObserver.disconnect();
      }
      if (indicatorObserver) {
        indicatorObserver.disconnect();
      }
    };
  }, [sections]); // Only re-run if sections array changes

  const checkFunction = item => {
    return (
      String(item.title).toLowerCase().includes(text.toLowerCase()) ||
      String(item.description).toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <section
      id={props.id}
      ref={props.sectionRef}
      onClick={e => {
        if (!(enter === true && leave === false) && menuShow === true) setMenuShow(false);
      }}
    >
      <div
        className={styles.heading}
        style={{
          marginBottom: '0px',
          paddingLeft: 30,
        }}
      >
        <Heading
          level={3}
          as="h1"
          style={{
            marginBottom: '-50px',
          }}
        >
          <DecoderText text="PROJECTS" />
        </Heading>

        <div className={styles.inputGroup}>
          <Input
            className={styles.btn}
            style={{
              marginBottom: '-50px',
              paddingLeft: 0,
              zIndex: 31,
              animationDelay: getDelay(tokens.base.durationXS, initDelay), // example property
            }}
            autoComplete="off"
            label="Search Projects"
            maxLength={512}
            {...searchText}
            onChange={e => {
              setText(e.target.value);
            }}
            value={text}
          />

          <Button
            secondary
            className={styles.button}
            data-visible={true}
            style={{
              marginBottom: '-50px',
              zIndex: 31,
              paddingLeft: '0',
              paddingRight: '0',
              textAlign: 'center',
              // backgroundColor:  filterType === "" ? "rgb(var(--rgbText) / 0.0)" : "rgb(var(--varText) / 0.3)!important"
            }}
            onClick={e => {
              // e.preventDefault();
              setMenuShow(!menuShow);
            }}
          >
            <Icon
              icon="filter"
              style={{
                width: '30px',
                height: '30px',
                margin: '0',
                marginLeft: '10px',
                padding: '',
                color:
                  filterType === ''
                    ? 'rgb(var(--rgbText) / 0.5)'
                    : 'rgb(var(--varText) / 1)',
              }}
            />
          </Button>
          <div
            className={styles.modal}
            style={{
              position: 'absolute',
              right: 10,
              top: menuShow ? '70px' : '60px',
              opacity: menuShow ? 1 : 0,
              zIndex: menuShow ? 'var(--zIndex3)' : -1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              height: 'auto',
              transition: 'all 0.2s ease-in',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            onMouseEnter={e => {
              // e.preventDefault();
              setEnter(true);
              setLeave(false);
            }}
            onMouseLeave={e => {
              // e.preventDefault();
              setLeave(true);
              setEnter(false);
            }}
          >
            {projectType.map((item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                  }}
                >
                  <Button
                    secondary
                    as="button"
                    onClick={e => {
                      setFilterType(item === filterType ? '' : item);
                    }}
                    style={{
                      backgroundColor:
                        item === filterType ? 'rgb(var(--rgbText) / 0.3)' : 'transparent',
                    }}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
        }}
      >
        {projects
          .filter(item => item.type.includes(filterType))
          .filter(checkFunction)
          .slice(0, size).length > 0 &&
          projects
            .filter(item => item.type.includes(filterType))
            .filter(checkFunction)
            .slice(0, size)
            .map((item, idx) => {
              // console.log(item);
              return (
                <>
                  <ProjectSummary
                    key={item.id || idx}
                    id={item.id}
                    alternate={item.alternative}
                    sectionRef={item.sectionRef}
                    visible={visibleSections.includes(item.sectionRef.current)}
                    index={idx + 1}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    buttonLink={item.buttonLink}
                    model={item.model}
                  />
                </>
              );
            })}
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            height: 'auto',
            display: projects.length === size ? 'none' : 'flex',
          }}
        >
          <Button
            iconHoverShift
            iconEnd="arrowDown"
            style={{ transition: 'all 0.4s ease', opacity: '1' }}
            onClick={e => {
              // e.preventDefault();
              setSize(size + 2);
            }}
          >
            LOAD MORE
          </Button>
        </div>
        {projects
          .filter(item => item.type.includes(filterType))
          .filter(checkFunction)
          .slice(0, size).length == 0 &&
          projects.slice(0, size).map((item, idx) => {
            // console.log(item);
            return (
              <>
                <ProjectSummary
                  key={item.id || idx}
                  id={item.id}
                  alternate={item.alternative}
                  sectionRef={item.sectionRef}
                  visible={
                    visibleSections.includes(item.sectionRef.current) &&
                    checkFunction(item)
                  }
                  index={idx + 1}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  buttonLink={item.buttonLink}
                  model={item.model}
                  style={{
                    display: checkFunction(item) ? 'flex' : 'none',
                  }}
                />
              </>
            );
          })}
        {projects
          .filter(item => item.type.includes(filterType))
          .filter(checkFunction)
          .slice(0, size).length == 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '200px',
            }}
          >
            <Heading level={4}>{'There is no result.'}</Heading>
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '200px',
          marginTop: '200px',
        }}
      >
        {/* <Button iconHoverShift style = {{width: "300px"}} href = {size == 4 ? '/#article' : ""} onClick = {(e) =>{
            if(size == 4) setSize(2);
            else setSize(++size);
          }}>
              <Heading level = {5} style = {{color: "var(--rgbBackground)", letterSpacing: "5px"}} >{`${size == 4 ? "GO ARTICLE" : "VIEW MORE"} `}</Heading>
          </Button> */}
      </div>
      {/* <Footer className={styles.footer} /> */}
    </section>
  );
};
