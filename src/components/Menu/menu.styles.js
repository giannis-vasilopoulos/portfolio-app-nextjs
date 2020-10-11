import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

export const NavLinkStyle = css({
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "#111111 !important",
  "&:hover": {
    color: "#567998!important",
  },
});

export const VersionStyle = styled.small({
  fontFamily: "sans-serif",
  textTransform: "lowercase",
  fontSize: 12,
});

export const BurgerStyle = css({
  margin: "10px 0",
});

const SlideDown = keyframes`
  0% {
    transform: translateY(-100px);
  }
`;

export const FixedMenu = css({
  top: 0,
  bottom: "inherit",
  left: 0,
  width: "100%",
  animation: `${SlideDown} 0.5s`,
  position: "fixed",
  zIndex: 100,
});
