import Typed from "react-typed";
import AnimatedArrowDown from "components/AnimatedArrowDown/";
import { FoldContainer, TechnologiesContainer, Logo } from "./fold.styles";
import { Link } from "react-scroll";

function Fold({ title, typingTitles, technologies }) {
  return (
    <FoldContainer id="home">
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
      <Link to="about" spy={true} smooth={true} duration={500}>
        <AnimatedArrowDown />
      </Link>
    </FoldContainer>
  );
}

export default Fold;
