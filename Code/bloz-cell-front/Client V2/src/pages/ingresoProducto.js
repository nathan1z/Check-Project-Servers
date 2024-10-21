/* eslint-disable react/jsx-no-comment-textnodes */
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import React from "react";
import axios from "axios";

const url = "http://localhost:3001/api/products";

class App extends React.Component {
  //Estado del data y del form
  state = {
    data: [],
    form: {
      idProducto: "",
      nombre: "",
      marca: "",
      modelo: "",
      precio: "",
      caracteristicas: "",
      imagen: "",
      cantidad: "",
      categoria: "",
    },
    modalInsert: false,
    modalDelete: false,
    modalEdit: false,
    errors: {},
  };

  //Validar
  validate = () => {
    const { form } = this.state;
    const errors = {};

    //Nombre
    if (!isNaN(form.nombre)) {
      errors.nombre = "No se permiten numeros.";
    }
    if (form.nombre.length > 50) {
      errors.nombre = "Excediste el numero de caracteres.";
    }
    if (!form.nombre) {
      errors.nombre = "Campo requerido.";
    }

    //Marca
    if (!isNaN(form.marca)) {
      errors.marca = "No se permiten numeros.";
    }
    if (form.marca.length > 50) {
      errors.marca = "Excediste el numero de caracteres.";
    }
    if (!form.marca) {
      errors.marca = "Campo requerido.";
    }

    //Modelo
    if (!isNaN(form.modelo)) {
      errors.modelo = "No se permiten numeros.";
    }
    if (form.modelo.length > 50) {
      errors.modelo = "Excediste el numero de caracteres.";
    }
    if (!form.modelo) {
      errors.modelo = "Campo requerido.";
    }

    //Caracteristicas
    if (!isNaN(form.caracteristicas)) {
      errors.caracteristicas = "No se permiten numeros.";
    }
    if (form.caracteristicas.length > 50) {
      errors.caracteristicas = "Excediste el numero de caracteres.";
    }
    if (!form.caracteristicas) {
      errors.caracteristicas = "Campo requerido.";
    }

    //Cantidad
    if (isNaN(form.cantidad)) {
      errors.cantidad = "Solo se permiten numeros.";
    }
    if (form.cantidad < 0) {
      errors.cantidad = "No se permiten numeros negativos.";
    }
    if (form.cantidad > 1000) {
      errors.cantidad = "No se permiten numeros mayores a 1000.";
    }
    if (!form.cantidad) {
      errors.cantidad = "Campo requerido.";
    }

    //Precio
    if (isNaN(form.precio)) {
      errors.precio = "Solo se permiten numeros.";
    }
    if (form.precio < 0) {
      errors.precio = "No se permiten numeros negativos.";
    }
    if (form.precio > 1000) {
      errors.precio = "No se permiten numeros mayores a 1000.";
    }
    if (!form.precio) {
      errors.precio = "Campo requerido.";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  getQuery = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  postQuery = async () => {
    if (this.validate()) {
      await axios
        .post(url, this.state.form)
        .then((response) => {
          this.modalInsert();
          this.getQuery();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  putQuery = () => {
    if (this.validate()) {
      axios
        .put(url + "/" + this.state.form.idProducto, this.state.form)
        .then((response) => {
          this.modalEdit();
          this.getQuery();
        });
    }
  };

  deleteQuery = () => {
    axios.delete(url + "/" + this.state.form.idProducto).then((response) => {
      this.setState({ modalDelete: false });
      this.getQuery();
    });
  };
  componentDidMount() {
    this.getQuery();
  }

  //Controlador de cambios
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };
  //Controlador de envios
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      console.log("Form is valid", this.state.form);
    } else {
      console.log("Form is invalid", this.state.errors);
    }
  };
  //Modal insert
  modalInsert = () => {
    this.setState({
      modalInsert: !this.state.modalInsert,
      form: { ...this.state.form, idProducto: this.state.data.length + 1 },
    });
  };
  modalInsertHide = () => {
    this.setState({
      modalInsert: !this.state.modalInsert,
    });
  };

  //Modal editar
  modalEdit = () => {
    this.setState({
      modalEdit: !this.state.modalEdit,
    });
  };
  modalEditHide = () => {
    this.setState({
      modalEdit: !this.state.modalEdit,
    });
  };

  selectElement = (element) => {
    this.setState({
      form: {
        idProducto: element.idProducto,
        nombre: element.nombre,
        marca: element.marca,
        modelo: element.modelo,
        precio: element.precio,
        caracteristicas: element.caracteristicas,
        imagen: element.imagen,
        cantidad: element.cantidad,
        categoria: element.categoria,
      },
    });
  };

  render() {
    const { form, errors } = this.state;
    return (
      <>
        <Container>
          <br />
          <Button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.modalInsert(0);
            }}
          >
            Insertar Producto
          </Button>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Precio</th>
                <th>Caracteristicas</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((element) => (
                <tr>
                  <td>{element.idProducto}</td>
                  <td>{element.nombre}</td>
                  <td>{element.marca}</td>
                  <td>{element.modelo}</td>
                  <td>{element.precio}</td>
                  <td>{element.caracteristicas}</td>
                  <td>{element.cantidad}</td>
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => {
                        this.selectElement(element);
                        this.modalEdit();
                      }}
                    >
                      Editar
                    </Button>
                    {"   "}
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        this.selectElement(element);
                        this.setState({ modalDelete: true });
                      }}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal
          isOpen={/*Modal para insertar productos*/ this.state.modalInsert}
        >
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalInsertHide()}
            >
              x
            </span>
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="idProducto">ID: </Label>
                <Input
                  className="form-control"
                  type="text"
                  name="idProducto"
                  id="idProducto"
                  onChange={this.handleChange}
                  value={form.idProducto}
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <Label for="nombre">Nombre: </Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={form.nombre}
                  onChange={this.handleChange}
                  invalid={!!errors.nombre}
                />
                <FormFeedback>{errors.nombre}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="marca">Marca: </Label>
                <Input
                  type="text"
                  name="marca"
                  id="marca"
                  value={form.marca}
                  onChange={this.handleChange}
                  invalid={!!errors.marca}
                />
                <FormFeedback>{errors.marca}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="modelo">Modelo: </Label>
                <Input
                  type="text"
                  name="modelo"
                  id="modelo"
                  value={form.modelo}
                  onChange={this.handleChange}
                  invalid={!!errors.modelo}
                />
                <FormFeedback>{errors.modelo}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="precio">Precio: </Label>
                <Input
                  type="number"
                  name="precio"
                  id="precio"
                  value={form.precio}
                  onChange={this.handleChange}
                  invalid={!!errors.precio}
                />
                <FormFeedback>{errors.precio}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="caracteristicas">Caracteristicas: </Label>
                <Input
                  type="text"
                  name="caracteristicas"
                  id="caracteristicas"
                  value={form.caracteristicas}
                  onChange={this.handleChange}
                  invalid={!!errors.caracteristicas}
                />
                <FormFeedback>{errors.caracteristicas}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="cantidad">Cantidad: </Label>
                <Input
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  value={form.cantidad}
                  onChange={this.handleChange}
                  invalid={!!errors.cantidad}
                />
                <FormFeedback>{errors.cantidad}</FormFeedback>
              </FormGroup>

              <Input
                className="btn btn-primary"
                type="submit"
                value="Insertar"
                onClick={() => this.postQuery()}
              />
            </Form>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertHide()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={/*Modal para editar productos*/ this.state.modalEdit}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalEditHide()}
            >
              x
            </span>
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="idProducto">ID: </Label>
                <Input
                  className="form-control"
                  type="text"
                  name="idProducto"
                  id="idProducto"
                  onChange={this.handleChange}
                  value={form.idProducto}
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <Label for="nombre">Nombre: </Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={form.nombre}
                  onChange={this.handleChange}
                  invalid={!!errors.nombre}
                />
                <FormFeedback>{errors.nombre}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="marca">Marca: </Label>
                <Input
                  type="text"
                  name="marca"
                  id="marca"
                  value={form.marca}
                  onChange={this.handleChange}
                  invalid={!!errors.marca}
                />
                <FormFeedback>{errors.marca}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="modelo">Modelo: </Label>
                <Input
                  type="text"
                  name="modelo"
                  id="modelo"
                  value={form.modelo}
                  onChange={this.handleChange}
                  invalid={!!errors.modelo}
                />
                <FormFeedback>{errors.modelo}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="precio">Precio: </Label>
                <Input
                  type="number"
                  name="precio"
                  id="precio"
                  value={form.precio}
                  onChange={this.handleChange}
                  invalid={!!errors.precio}
                />
                <FormFeedback>{errors.precio}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="caracteristicas">Caracteristicas: </Label>
                <Input
                  type="text"
                  name="caracteristicas"
                  id="caracteristicas"
                  value={form.caracteristicas}
                  onChange={this.handleChange}
                  invalid={!!errors.caracteristicas}
                />
                <FormFeedback>{errors.caracteristicas}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="cantidad">Cantidad: </Label>
                <Input
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  value={form.cantidad}
                  onChange={this.handleChange}
                  invalid={!!errors.cantidad}
                />
                <FormFeedback>{errors.cantidad}</FormFeedback>
              </FormGroup>

              <Input
                className="btn btn-primary"
                type="submit"
                value="Actualizar"
                onClick={() => this.putQuery()}
              />
            </Form>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.modalEditHide()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalDelete}>
          <ModalBody>
            Estás seguro que deseas eliminar {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteQuery()}
            >
              Sí
            </button>
            <button
              className="btn btn-secundary"
              onClick={() => this.setState({ modalDelete: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
