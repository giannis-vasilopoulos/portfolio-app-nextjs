import {
  ContactContainer,
  SocialContainer,
  SocialList,
  VersionStyle,
  CopyrightContainer,
  CopyrightText,
} from "./footer.styles";
import { InView } from "react-intersection-observer";

function Footer({ footer, id }) {
  return (
    <ContactContainer id={id}>
      <InView threshold={0.5} triggerOnce={true}>
        {({ ref, inView }) => (
          <div ref={ref}>
            <SocialContainer inView={inView}>
              <h2>{footer.contactTitle}</h2>
              <SocialList>
                {footer.socialMenu.map(({ fields: social }) => (
                  <li key={social.title}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      dangerouslySetInnerHTML={{ __html: social.svgCode }}
                    />
                  </li>
                ))}
              </SocialList>
            </SocialContainer>
          </div>
        )}
      </InView>
      <CopyrightContainer>
        <CopyrightText>
          © {new Date().getFullYear()} {footer.copyright}{" "}
          <VersionStyle>{process.env.NEXT_PUBLIC_VERSION}</VersionStyle>
        </CopyrightText>
        <CopyrightText align="right" gutterMb>
          {footer.createdLabel}
        </CopyrightText>
      </CopyrightContainer>
    </ContactContainer>
  );
}

export default Footer;
