import mq from "../utils/breakpoints";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const LoaderContainer = styled.div({
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: 10000,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  "&:before, &:after": {
    content: '""',
    height: "50vh",
    position: "absolute",
    background: "#191919",
    width: "100%",
    transition: "all .5s ease",
    transitionDelay: ".7s",
  },
  "&:before": {
    top: 0,
  },
  "&:after": {
    bottom: 0,
  },
});

const AnimateDualRing = keyframes`
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
`;
const DualRing = styled.div({
  width: 180,
  height: 200,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "5.2em",
  zIndex: 1,
  transition: "all .5s ease",
  transform: "scale(1)",
  color: "#ffffff",
  "&:after": {
    content: '""',
    display: "block",
    width: 190,
    height: 190,
    margin: 1,
    borderRadius: "50%",
    borderColor: "#fff transparent",
    borderStyle: "solid",
    borderWidth: 5,
    animation: `${AnimateDualRing} 1.2s linear infinite`,
    position: "absolute",
    top: 0,
  },
});

function Loader() {
  return (
    <LoaderContainer>
      <DualRing>GV</DualRing>
    </LoaderContainer>
  );
}

export default Loader;
