import React from "react";
import TableCategory from "../components/TableCategory";
import NavBar from "../components/Navbar";
import { Helmet } from "react-helmet";
import "../login.css";
import logo from "../assets/logoTienda.png";

class Category extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Administrar categorias</title>
          <link rel="icon" type="image/png" href={logo} />
        </Helmet>
        <NavBar />
        <TableCategory />
      </>
    );
  }
}

export default Category;
