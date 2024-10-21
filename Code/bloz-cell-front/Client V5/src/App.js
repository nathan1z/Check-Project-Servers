import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ProductoSalida from "./pages/productoSalida";
import IngresoProducto from "./pages/ingresoProducto";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ventas" element={<ProductoSalida />} />
        <Route path="/administrar" element={<IngresoProducto />} />
      </Routes>
    </>
  );
}
export default App;
