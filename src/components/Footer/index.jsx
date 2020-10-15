import {
  ContactContainer,
  SocialContainer,
  SocialList,
  VersionStyle,
  CopyrightContainer,
  CopyrightText,
} from "./footer.styles";

import { Slide } from "react-awesome-reveal";

function Footer({ footer, id }) {
  return (
    <ContactContainer id={id}>
      <Slide direction="up" triggerOnce>
        <SocialContainer>
          <h2>{footer.contactTitle}</h2>
          <SocialList>
            {footer.socialMenu.map(({ fields: social }) => {
              return (
                <li key={social.title}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    dangerouslySetInnerHTML={{ __html: social.svgCode }}
                  />
                </li>
              );
            })}
          </SocialList>
        </SocialContainer>
      </Slide>
      <CopyrightContainer>
        <CopyrightText>
          © {new Date().getFullYear()} {footer.copyright}{" "}
          <VersionStyle>{process.env.NEXT_PUBLIC_VERSION}</VersionStyle>
        </CopyrightText>
        <CopyrightText align="right">{footer.createdLabel}</CopyrightText>
      </CopyrightContainer>
    </ContactContainer>
  );
}

export default Footer;
