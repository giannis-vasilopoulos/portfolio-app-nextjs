import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "components/Skills/";
import { motion, useViewportScroll } from "framer-motion";

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

function About({
  title,
  aboutImage,
  bio,
  skillsTitle,
  skillsItems,
  toolsTitle,
  toolsImages,
}) {
  const { scrollY } = useViewportScroll();
  console.log(scrollY);
  return (
    <motion.div style={{ top: scrollY }}>
      <AboutContainer id="about">
        <Container>
          <Title>{title}</Title>
          <Row css={RowStyles} className="align-items-center">
            <Col md="6" css={ColStyles}>
              <ImageBio
                src={aboutImage.file.url}
                alt={aboutImage.file.fileName.replace(".jpg", "")}
              />
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
    </motion.div>
  );
}

export default About;
