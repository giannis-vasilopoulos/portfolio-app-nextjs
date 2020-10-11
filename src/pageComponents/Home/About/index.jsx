import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "@emotion/styled";
import mq from "utils/breakpoints";
import Skills from "components/Skills/";
import { css } from "@emotion/core";

const AboutContainer = styled.div({
  minHeight: "100vh",
  padding: "100px 0",
});

const Title = styled.h2({
  textAlign: "center",
  textTransform: "uppercase",
});

const RowStyles = css({
  marginTop: "4.5em",
});

const ToolsRowStyles = css({
  justifyContent: "space-around",
  maxWidth: 700,
  margin: "auto",
});

const ImageBio = styled.img({
  width: 250,
  borderRadius: "20%",
  height: 250,
  objectFit: "cover",
});

const ColStyles = css({ textAlign: "center" });

const BioContainer = styled.div({
  marginTop: "1em",
});

const ToolsContainer = styled.div({
  marginTop: "3em",
  textAlign: "center",
});

const ToolImage = styled.img((props) => ({
  width: props.width ? props.width : 90,
}));

function About({
  title,
  aboutImage,
  bio,
  skillsTitle,
  skillsItems,
  toolsTitle,
  toolsImages,
}) {
  return (
    <AboutContainer id="about">
      <Container>
        <Title>{title}</Title>
        <Row css={RowStyles} className="align-items-center">
          <Col md="6" css={ColStyles}>
            <ImageBio src={aboutImage.file.url} />
            <BioContainer
              dangerouslySetInnerHTML={{ __html: bio.content[0].value }}
            />
          </Col>
          <Col md="6">
            <h3>{skillsTitle}</h3>
            <Skills skills={skillsItems} />
          </Col>
        </Row>
        <ToolsContainer>
          <h3>{toolsTitle}</h3>
          <Row css={ToolsRowStyles} className="align-items-center">
            {toolsImages.map(({ fields: image }) => {
              console.log(image);
              return (
                <Col
                  key={image.title}
                  xs="6"
                  lg={image.description > 90 ? "3" : "2"}
                >
                  <ToolImage
                    alt={image.title}
                    src={image.file.url}
                    width={image.description}
                  />
                </Col>
              );
            })}
          </Row>
        </ToolsContainer>
      </Container>
    </AboutContainer>
  );
}

export default About;
