import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLinkStyle, VersionStyle, BurgerStyle, FixedMenu} from "./menu.styles";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-scroll";

function Menu({ data: { logoName, menuItems } }) {
  const [animateOnScroll, setAnimateOnScroll] = useState(false);
  const menuEl = useRef(null)

  const handleScroll = (menuTop) => {
    setAnimateOnScroll(window.scrollY >= menuTop);
  };

  useEffect(() => {
    const menuTop = menuEl.current.getBoundingClientRect().top

    window.addEventListener("scroll", () => handleScroll(menuTop));

    return () => window.removeEventListener("scroll", () => handleScroll(menuTop));

  }, []);

  return (
    <Navbar bg="white" expand="lg" id="header-menu" ref={menuEl} css={animateOnScroll && FixedMenu } className="shadow-sm py-0">
      <Navbar.Brand css={NavLinkStyle} href="#home">
        {logoName}{" "}
        <VersionStyle>{process.env.NEXT_PUBLIC_VERSION}</VersionStyle>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" css={BurgerStyle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {menuItems.map(({ fields }) => {
            return (
              <Link
                key={fields.label}
                activeClass="active"
                to={fields.link}
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                css={NavLinkStyle}
              >
                {fields.label}
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
