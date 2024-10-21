import React from "react";
import TableCategory from "../components/TableCategory";
import NavBar from "../components/Navbar";
import { Helmet } from "react-helmet";
import "../login.css";

class Category extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Administrar categorias</title>
          <link rel="icon" type="image/png" href="[ruta_al_logotipo]" />
        </Helmet>
        <NavBar />
        <TableCategory />
      </>
    );
  }
}

export default Category;
