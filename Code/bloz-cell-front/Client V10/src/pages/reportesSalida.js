import React, { Component } from "react";
import NavBar from "../components/Navbar";

class Form extends React.Component {
  state = { name: "", email: "", error: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.email) {
      this.setState({
        error: "El nombre y el correo electrónico son requeridos",
      });
      return;
    }

    // Enviar los datos aquí
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}

export default Form;
