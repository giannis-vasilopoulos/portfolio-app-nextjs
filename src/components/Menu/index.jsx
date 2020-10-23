import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLinkStyle, VersionStyle, BurgerStyle, FixedMenu} from "./menu.styles";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Menu({ data: { logoName, menuItems }, foldHeight }) {
  const [animateOnScroll, setAnimateOnScroll] = useState(false);

  const handleScroll = (menuTop) => {
    setAnimateOnScroll(window.scrollY >= menuTop);
  };

  useEffect(() => {

    if(foldHeight){
      window.addEventListener("scroll", () => handleScroll(foldHeight));
    }

    return () => window.removeEventListener("scroll", () => handleScroll(foldHeight));

  }, [foldHeight]);

  return (
    <Navbar bg="white" expand="lg" id="header-menu" css={animateOnScroll && FixedMenu} className="shadow-sm py-0">
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
                spy
                smooth
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
