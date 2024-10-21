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
            <Nav.Link href="/productos">
              Ingreso de Productos
            </Nav.Link>
            <Nav.Link href="/categorias">
              Ingreso de Categorias
            </Nav.Link>
            <Nav.Link href="/productoSalida">Salida de Productos</Nav.Link>
            <Nav.Link href="/reportesSalida">
              Reporte de Salida de Producto
            </Nav.Link>
            <Nav.Link href="/reporteSalida">
              Reporte de Salida de Producto 2
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
