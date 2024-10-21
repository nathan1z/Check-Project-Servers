import React from "react";
import TableProduct from "../components/Table";
import NavBar from "../components/Navbar";
import { Helmet } from "react-helmet";
import "../login.css";

class Ingreso extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Administrar</title>
          <link rel="icon" type="image/png" href="[ruta_al_logotipo]" />
        </Helmet>
        <NavBar />
        <TableProduct />
      </>
    );
  }
}

export default Ingreso;
