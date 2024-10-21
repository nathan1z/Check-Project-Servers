import React, { Component } from "react";
import NavBar from "../components/Navbar";

class Form extends React.Component {
  state = { positiveInt: "" };

  handlePositiveIntChange = (event) => {
    const value = event.target.value;

    if (!value || (value && /^\d+$/.test(value))) {
      this.setState({ positiveInt: value });
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <form>
          <div>
            <label htmlFor="positiveInt">Número entero positivo:</label>
            <input
              type="text"
              id="positiveInt"
              value={this.state.positiveInt}
              onChange={this.handlePositiveIntChange}
            />
          </div>
        </form>
      </>
    );
  }
}
export default Form;
