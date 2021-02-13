import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const AboutContainer = styled.div({
  minHeight: "100vh",
  padding: "100px 0",
});

export const Title = styled.h2({
  textAlign: "center",
  textTransform: "uppercase",
});

export const RowStyles = css({
  marginTop: "4.5em",
});

export const ToolsRowStyles = css({
  justifyContent: "space-around",
  maxWidth: 700,
  margin: "auto",
});

export const ImageBio = styled.img({
  width: 250,
  borderRadius: "20%",
  height: 250,
  objectFit: "cover",
});

export const ColStyles = css({
  textAlign: "center",
});

export const LeftColStyles = styled.div(
  {
    transition: "all ease 0.6s",
  },
  (props) => ({
    transform: props.inView ? "translateX(0)" : "translateX(-50vw)",
  })
);

export const RightColStyles = styled.div(
  {
    transition: "all ease 0.6s",
  },
  (props) => ({
    transform: props.inView ? "translateX(0)" : "translateX(50vw)",
  })
);

export const BioContainer = styled.div({
  marginTop: "1em",
});

export const ToolsContainer = styled.div({
  marginTop: "3em",
  textAlign: "center",
});

export const ToolImage = styled.img((props) => ({
  width: props.width ? props.width : 90,
}));
