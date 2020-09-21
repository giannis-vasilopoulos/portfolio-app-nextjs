import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu({ data: { logoName, menuItems } }) {
  return (
    <Navbar bg="white" expand="lg" id="header-menu" className="shadow-sm">
      <Navbar.Brand href="#home">{logoName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {menuItems?.map(({ fields }) => {
            return (
              <Nav.Link key={fields.label} href={fields.link}>
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
