import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

function NavBarWrapper() {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">RR</Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            flexGrow: 0,
          }}>
          <Nav
            className="me-auto"
            style={{
              gap: "1rem",
              alignItems: "center",
            }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}>
              Home
            </Link>
            <Link
              to="about"
              style={{
                textDecoration: "none",
              }}>
              About
            </Link>
            <Button onClick={loginHandler} variant="secondary">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarWrapper;
