import styled from "@emotion/styled";
import mq from "utils/breakpoints";

export const FoldContainer = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    height: "100vh",
    color: "#fff",
    background: "#281d1d",
    alignItems: "center",
    padding: "0 15px",
  },
  mq({
    fontSize: ["2em", "2.3em", "2.8em"],
  })
);

export const TechnologiesContainer = styled.div(
  {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 625,
    padding: "20px 15px 0",
    width: "100%",
    alignItems: "start",
  },
  mq({
    flexWrap: ["wrap", "nowrap"],
  })
);

export const Logo = styled.img(
  {
    maxWidth: "50px",
  },
  mq({
    margin: "0 15px 25px",
  })
);
