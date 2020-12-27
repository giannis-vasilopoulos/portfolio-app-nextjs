import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import mq from "utils/breakpoints";

export const ArrowContainer = styled.div(
  {
    position: "relative",
  },
  mq({
    marginTop: [0, 40],
  })
);

const AnimateDown = keyframes`
  0% {
      opacity: 0
  }
  
  50% {
      opacity: 1
  }
  
  to {
      opacity: 0
  }
  `;

export const ArrowDown = styled.span({
  position: "absolute",
  top: 0,
  left: "50%",
  width: 24,
  height: 24,
  marginLeft: -12,
  borderLeft: "1px solid #fff",
  borderBottom: "1px solid #fff",
  transform: "rotate(-45deg)",
  animation: `${AnimateDown} 2s infinite`,
  opacity: 0,
  cursor: "pointer",
  boxSizing: "border-box",
  "&:first-of-type": {
    animationDelay: "0s",
  },
  "&:nth-of-type(2)": {
    animationDelay: ".15s",
    top: 16,
  },
  "&:nth-of-type(3)": {
    animationDelay: ".3s",
    top: 32,
  },
});
