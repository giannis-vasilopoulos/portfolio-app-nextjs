import styled from "@emotion/styled";
import { css } from "@emotion/core";

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
