import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "@emotion/styled";
import mq from "utils/breakpoints";
import { css } from "@emotion/core";

const AboutContainer = styled.div({
  minHeight: "100vh",
  padding: "100px 0",
});

const Title = styled.h2({
  textAlign: "center",
  fontWeight: 700,
  textTransform: "uppercase",
});

const RowStyles = css({
  marginTop: "4.5em",
});

function About({ title }) {
  return (
    <AboutContainer>
      <Container>
        <Title>{title}</Title>
        <Row css={RowStyles} className="align-items-center">
          <Col md="6">Lorem Ipsum</Col>
          <Col md="6">Lorem Ipsum</Col>
        </Row>
      </Container>
    </AboutContainer>
  );
}

export default About;
