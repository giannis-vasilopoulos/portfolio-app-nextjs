import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "components/Skills/";
import {
  AboutContainer,
  Title,
  RowStyles,
  ToolsContainer,
  ToolsRowStyles,
  ImageBio,
  BioContainer,
  ToolImage,
  ColStyles,
} from "./about.styles";
import { Slide } from "react-awesome-reveal";

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
            <Slide direction="left" triggerOnce>
              <ImageBio src={aboutImage.file.url} />
              <BioContainer
                dangerouslySetInnerHTML={{ __html: bio.content[0].value }}
              />
            </Slide>
          </Col>
          <Col md="6">
            <Slide direction="right" triggerOnce>
              <h3>{skillsTitle}</h3>
              <Skills skills={skillsItems} />
            </Slide>
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
