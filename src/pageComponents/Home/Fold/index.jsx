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
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
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
