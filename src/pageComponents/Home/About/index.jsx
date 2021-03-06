import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "components/Skills/";
import { InView } from "react-intersection-observer";

import {
  AboutContainer,
  Title,
  RowStyles,
  ToolsContainer,
  ToolsRowStyles,
  ImageBio,
  BioContainer,
  LeftColStyles,
  RightColStyles,
  ToolImage,
  ColStyles,
} from "./about.styles";

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
            <InView threshold={0.5} triggerOnce={true}>
              {({ ref, inView }) => (
                <div ref={ref}>
                  <LeftColStyles inView={inView}>
                    <ImageBio
                      src={aboutImage.file.url}
                      alt={aboutImage.file.fileName.replace(".jpg", "")}
                    />
                    <BioContainer
                      dangerouslySetInnerHTML={{ __html: bio.content[0].value }}
                    />
                  </LeftColStyles>
                </div>
              )}
            </InView>
          </Col>
          <Col md="6">
            <InView threshold={0.5} triggerOnce={true}>
              {({ ref, inView }) => (
                <div ref={ref}>
                  <RightColStyles inView={inView}>
                    <h3>{skillsTitle}</h3>
                    <Skills skills={skillsItems} />
                  </RightColStyles>
                </div>
              )}
            </InView>
          </Col>
        </Row>

        <ToolsContainer>
          <h3>{toolsTitle}</h3>
          <Row css={ToolsRowStyles} className="align-items-center">
            {toolsImages.map(({ fields: image }) => {
              return (
                <Col
                  key={image.title}
                  xs="6"
                  lg={image.description > 90 ? "3" : "2"}
                  className="mb-4"
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
