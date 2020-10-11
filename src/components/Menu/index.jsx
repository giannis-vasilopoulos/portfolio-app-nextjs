import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLinkStyle, VersionStyle, BurgerStyle } from "./menu.styles";
import { Link } from "react-scroll";

function Menu({ data: { logoName, menuItems } }) {
  return (
    <Navbar bg="white" expand="lg" id="header-menu" className="shadow-sm py-0">
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
