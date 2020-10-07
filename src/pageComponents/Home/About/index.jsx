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

function About({ title, aboutImage, bio, skills }) {
  return (
    <AboutContainer>
      <Container>
        <Title>{title}</Title>
        <Row css={RowStyles} className='align-items-center'>
          <Col md='6' css={ColStyles}>
            <ImageBio src={aboutImage.file.url} />
            <BioContainer
              dangerouslySetInnerHTML={{ __html: bio.content[0].value }}
            />
          </Col>
          <Col md='6'>
            <h3>{skills.skillsTitle}</h3>
            <Skills skills={skills.skillItem} />
          </Col>
        </Row>
      </Container>
    </AboutContainer>
  );
}

export default About;
