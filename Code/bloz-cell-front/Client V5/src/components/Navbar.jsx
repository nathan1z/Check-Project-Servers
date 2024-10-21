import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Bloz Cell</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/administrar">Administrar productos</Nav.Link>
            <Nav.Link href="/ventas">Ventas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
