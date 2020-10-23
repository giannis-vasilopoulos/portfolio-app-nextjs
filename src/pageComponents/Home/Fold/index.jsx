import Typed from "react-typed";
import AnimatedArrowDown from "components/AnimatedArrowDown/";
import Particles from "react-tsparticles";
import Menu from "components/Menu/";
import { FoldContainer, TechnologiesContainer, Logo } from "./fold.styles";
import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";

function Fold({ title, typingTitles, technologies, menuData }) {
  const [foldHeight, setFoldHeight] = useState(null)
  const foldRef = useRef(null);

  useEffect(() => {
    if(foldRef.current){
      setFoldHeight(foldRef.current.getBoundingClientRect().height)
    }
  }, [foldRef])
  
  return (
    <>
    <FoldContainer id="home" ref={foldRef}>
      <Particles
        params={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.2,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      {title}
      <Typed
        strings={typingTitles}
        start-delay={2000}
        typeSpeed={100}
        backSpeed={100}
        cursor-char="'|'"
        backDelay={1}
        loop
        loopCount={3}
        smartBackspace
      />
      <TechnologiesContainer>
        {technologies.map(({ title, file }) => {
          return <Logo src={file.url} alt={title} key={title} />;
        })}
      </TechnologiesContainer>
      <Link to="about" spy smooth duration={500}>
        <AnimatedArrowDown />
      </Link>
    </FoldContainer>
    <Menu data={menuData} foldHeight={foldHeight && foldHeight} />
    </>
  );
}

export default Fold;
