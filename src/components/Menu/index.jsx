import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLinkStyle, VersionStyle } from "./menu.styles";

function Menu({ data: { logoName, menuItems } }) {
  return (
    <Navbar bg='white' expand='lg' id='header-menu' className='shadow-sm py-0'>
      <Navbar.Brand css={NavLinkStyle} href='#home'>
        {logoName}{" "}
        <VersionStyle>{process.env.NEXT_PUBLIC_VERSION}</VersionStyle>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {menuItems.map(({ fields }) => {
            return (
              <Nav.Link
                key={fields.label}
                href={fields.link}
                css={NavLinkStyle}
              >
                {fields.label}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
