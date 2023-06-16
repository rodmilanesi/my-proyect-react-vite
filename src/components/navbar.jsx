import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/div.svg";
import cartWidthget from "../assets/img/carro-de-la-carretilla.png";
import { Context } from "../context/cartContext";
import { useContext } from "react";

function MyNavbar() {
  const { spanItem } = useContext(Context);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo de la marca" width={200} height="auto" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <LinkContainer to="/category/teclados">
                <NavDropdown.Item>Teclados</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/escritorios">
                <NavDropdown.Item>Escritorios</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/sillas">
                <NavDropdown.Item>Sillas</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/monitores">
                <NavDropdown.Item>Monitores</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav></Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <img src={cartWidthget} alt="" />
                <span>{spanItem}</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
