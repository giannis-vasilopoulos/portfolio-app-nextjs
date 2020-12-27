import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const LoaderContainer = styled.div(
  {
    width: "100%",
    height: "100%",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
    top: 0,
    transition: "all .5s ease",
    transitionDelay: "1.3s",
    "&:before, &:after": {
      content: '""',
      height: "50vh",
      position: "absolute",
      background: "#191919",
      width: "100%",
      transition: "all .5s ease",
      transitionDelay: ".7s",
    },
  },
  (props) => ({
    right: props.loaded ? "-100vw" : 0,
    "&:before": {
      top: props.loaded ? "-50vh" : 0,
    },
    "&:after": {
      bottom: props.loaded ? "-50vh" : 0,
    },
  })
);

const AnimateDualRing = keyframes`
      0% {
          transform: rotate(0deg)
      }
  
      to {
          transform: rotate(1turn)
      }
  `;

export const DualRing = styled.div(
  {
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
  },
  (props) => ({
    transform: props.loaded ? "scale(0)" : "scale(1)",
  })
);
