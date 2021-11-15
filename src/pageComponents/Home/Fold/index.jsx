import Typed from "react-typed";
import AnimatedArrowDown from "components/AnimatedArrowDown/";
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
