import { Routes, Route } from "react-router-dom";
import ProductoSalida from "./pages/productoSalida";
import IngresoProducto from "./pages/ingresoProducto";
import ReporteSalida from "./pages/reporteSalida";
import ReportesSalida from "./pages/reportesSalida";
import Category from "./pages/category";
import Login from "./pages/login";
import Home from "./pages/home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<IngresoProducto />} />
        <Route path="/categorias" element={<Category />} />
        <Route path="/productoSalida" element={<ProductoSalida />} />
        <Route path="/reportesSalida" element={<ReportesSalida />} />
        <Route path="/reporteSalida" element={<ReporteSalida />} />
      </Routes>
    </>
  );
}
export default App;
