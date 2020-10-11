import styled from "@emotion/styled";

export const ContactContainer = styled.div({
  padding: "40px 0 0",
  background: "#3490dc",
  color: "#fff",
});
export const SocialContainer = styled.div({
  paddingBottom: 70,
  paddingTop: 40,
  textAlign: "center",
  ">h2": {
    textTransform: "uppercase",
  },
});
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

export const CopyrightText = styled.p(
  {
    margin: 0,
  },
  (props) => ({ textAlign: props.align ? props.align : "left" })
);
