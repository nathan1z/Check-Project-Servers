import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";

import AxiosService from "../services/axios";

class TableCategory extends React.Component {
  constructor(props) {
    super(props);
    this.axiosService = new AxiosService("http://localhost:3001/api/category");
  }

  state = {
    data: [],
    form: {
      idCategoria: "",
      nombre: "",
    },
    modalInsert: false,
    modalDelete: false,
    modalEdit: false,
    errors: {},
  };

  //Validar
  validateLetters(inputtxt) {
    return /^[a-zA-Z]+$/.test(inputtxt);
  }

  validate = () => {
    const { form } = this.state;
    const errors = {};

    //Nombre
    if (!this.validateLetters(form.nombre)) {
      errors.nombre = "No se permiten números.";
    }
    if (!form.nombre) {
      errors.nombre = "Campo requerido.";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

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

  getQuery = () => {
    this.axiosService.get("/").then((response) => {
      this.setState({ data: response.data.data });
    });
  };

  componentDidMount() {
    this.getQuery();
  }

  postQuery = async () => {
    if (this.validate()) {
      this.axiosService.post("/", this.state.form).then((response) => {
        this.modalInsert();
        this.getQuery();
      });
    }
  };

  putQuery = () => {
    if (this.validate()) {
      this.axiosService
        .put("/" + this.state.form.idCategoria, this.state.form)
        .then((response) => {
          this.modalEdit();
          this.getQuery();
        });
    }
  };

  deleteQuery = () => {
    this.axiosService
      .delete("/" + this.state.form.idCategoria)
      .then((response) => {
        this.setState({ modalDelete: false });
        this.getQuery();
      });
  };

  //Modal insert
  modalInsert = () => {
    this.setState({
      modalInsert: !this.state.modalInsert,
      form: { ...this.state.form, idCategoria: this.state.data.length + 1 },
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
        idCategoria: element.idCategoria,
        nombre: element.nombre,
      },
    });
  };

  render() {
    const { form, errors } = this.state;
    return (
      <>
        <Container>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((element) => (
                <tr>
                  <td>{element.idCategoria}</td>
                  <td>{element.nombre}</td>
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
        <div style={{ display: "flex" }}>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.modalInsert(0);
            }}
          >
            Insertar Categoria
          </Button>
        </div>

        <Modal
          isOpen={/*Modal para insertar categorias*/ this.state.modalInsert}
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
                <Label for="idCategoria">ID: </Label>
                <Input
                  className="form-control"
                  type="text"
                  name="idCategoria"
                  id="idCategoria"
                  onChange={this.handleChange}
                  value={form.idCategoria}
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <Label for="nombre">Nombre cateogria: </Label>
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

        <Modal isOpen={/*Modal para editar categorias*/ this.state.modalEdit}>
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
                <Label for="idCategoria">ID: </Label>
                <Input
                  className="form-control"
                  type="text"
                  name="idCategoria"
                  id="idCategoria"
                  onChange={this.handleChange}
                  value={form.idCategoria}
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <Label for="nombre">Nombre Categoria: </Label>
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

export default TableCategory;
