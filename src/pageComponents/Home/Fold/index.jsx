import styled from "@emotion/styled";
import Typed from "react-typed";
import AnimatedArrowDown from "components/AnimatedArrowDown/";

const FoldContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  height: "100vh",
  color: "#fff",
  fontSize: "2.8em",
  background: "#281d1d",
  alignItems: "center",
  padding: "0 15px",
});

const TechnologiesContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 625,
  padding: "20px 15px 0",
  width: "100%",
  alignItems: "start",
});

const Logo = styled.img({
  maxWidth: "50px",
});

function Fold({ title, typingTitles, technologies }) {
  return (
    <FoldContainer id='home'>
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
      <AnimatedArrowDown />
    </FoldContainer>
  );
}

export default Fold;
