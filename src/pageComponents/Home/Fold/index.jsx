import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import Typed from "react-typed";

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
});

const Logo = styled.img({
  maxWidth: "50px",
});

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
        {technologies.map((tech) => {
          return <Logo src={tech.file.url} alt={tech.title} key={tech.title} />;
        })}
      </TechnologiesContainer>
    </FoldContainer>
  );
}

export default Fold;
