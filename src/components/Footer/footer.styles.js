import styled from "@emotion/styled";
import mq from "utils/breakpoints";

export const ContactContainer = styled.div({
  padding: "40px 0 0",
  background: "#3490dc",
  color: "#fff",
  overflow: "hidden",
});
export const SocialContainer = styled.div(
  {
    paddingBottom: 70,
    paddingTop: 40,
    textAlign: "center",
    transition: "all ease 0.7s",
    ">h2": {
      textTransform: "uppercase",
    },
  },
  (props) => ({
    transform: props.inView ? "translateY(0)" : "translateY(50vh)",
  })
);
export const SocialList = styled.ul({
  listStyleType: "none",
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
  maxWidth: 300,
  margin: "auto",
  fontSize: 30,
  a: {
    color: "#fff",
    svg: {
      height: "auto",
      width: "100%",
      maxWidth: 32,
    },
  },
});

export const VersionStyle = styled.small({
  fontFamily: "sans-serif",
  textTransform: "lowercase",
  fontSize: 12,
});

export const CopyrightContainer = styled.div({
  padding: "1em",
  background: "#281d1d",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const CopyrightText = styled.p((props) =>
  mq({
    textAlign: ["left", props.align ? props.align : "left"],
    margin: [props.gutterMb ? "10px 0" : "0", "0"],
  })
);
