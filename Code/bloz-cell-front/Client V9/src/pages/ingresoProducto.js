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
          <title>Administrar productos</title>
          <link rel="icon" type="image/png" href="../assets/logoTienda.png"/>
        </Helmet>
        <NavBar />
        <TableProduct />
      </>
    );
  }
}

export default Ingreso;
