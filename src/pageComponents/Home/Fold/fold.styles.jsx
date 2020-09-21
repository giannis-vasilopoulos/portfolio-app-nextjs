import styled from "@emotion/styled";

export const FoldContainer = styled.div({
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

export const TechnologiesContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 625,
  padding: "20px 15px 0",
  width: "100%",
  alignItems: "start",
});

export const Logo = styled.img({
  maxWidth: "50px",
});
