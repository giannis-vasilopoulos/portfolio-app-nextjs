import Typed from "react-typed";
import AnimatedArrowDown from "components/AnimatedArrowDown/";
import Menu from "components/Menu/";
import { FoldContainer, TechnologiesContainer } from "./fold.styles";
import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function Fold({ title, typingTitles, technologies, menuData }) {
  const [foldHeight, setFoldHeight] = useState(null);
  const foldRef = useRef(null);

  useEffect(() => {
    if (foldRef.current) {
      setFoldHeight(foldRef.current.getBoundingClientRect().height);
    }
  }, [foldRef]);

  return (
    <>
      <FoldContainer id="home" ref={foldRef}>
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
            return (
              <Image
                src={`https:${file.url}`}
                alt={title}
                width={50}
                key={title}
                priority
                height={50}
              />
            );
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
