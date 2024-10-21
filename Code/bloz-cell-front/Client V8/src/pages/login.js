import React from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

class Login extends React.Component {
  state = {
    isLoggedIn: false,
    logemail: "",
    logpass: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.logemail === "a" && this.state.logpass === "a") {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Navigate to="/home" />;
    }
    return (
      <>
        <Helmet>
          <title>Bloz Cell</title>
          <link rel="icon" type="image/png" href="[ruta_al_logotipo]" />
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
          />
          <link rel="stylesheet" href="../login.css" />
        </Helmet>

        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Iniciar Sesión</span>
                    <span>Registrarse</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Iniciar Sesión</h4>
                            <form onSubmit={this.handleSubmit}>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="logemail"
                                  className="form-style"
                                  placeholder="Nombre de usuario"
                                  id="logemail"
                                  autoComplete="off"
                                  value={this.state.logemail}
                                  onChange={this.handleChange}
                                />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="logpass"
                                  className="form-style"
                                  placeholder="Contraseña"
                                  id="logpass"
                                  autoComplete="off"
                                  value={this.state.logpass}
                                  onChange={this.handleChange}
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <button className="btn mt-4" type="submit">
                                Entrar
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Registrarse</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Nombre de usuario"
                                id="logname"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>

                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Contraseña"
                                id="logpass"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="#" className="btn mt-4">
                              Enviar
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
