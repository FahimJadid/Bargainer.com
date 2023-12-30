import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="md" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Bargainer" /> Bargainer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/cart">
                  Cart <FaShoppingCart />
                </Nav.Link>
                <Nav.Link href="/login">
                  Sign In <FaUser />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
