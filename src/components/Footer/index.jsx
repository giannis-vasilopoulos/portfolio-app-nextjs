import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactContainer = styled.div({
  padding: "40px 0 0",
  background: "#3490dc",
  color: "#fff",
});
const SocialContainer = styled.div({
  paddingBottom: 70,
  paddingTop: 40,
  textAlign: "center",
  ">h2": {
    textTransform: "uppercase",
  },
});
const SocialList = styled.ul({
  listStyleType: "none",
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
  maxWidth: 300,
  margin: "auto",
  fontSize: 30,
  a: {
    color: "#fff",
  },
});

function Footer({ footer }) {
  return (
    <ContactContainer>
      <SocialContainer>
        <h2>{footer.contactTitle}</h2>
        <SocialList>
          {footer.socialMenu.map(({ fields: social }) => {
            return (
              <li key={social.title}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={[social.iconType, social.title]} />
                </a>
              </li>
            );
          })}
        </SocialList>
      </SocialContainer>
    </ContactContainer>
  );
}

export default Footer;
