import './App.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar';
import IngresoProducto from './pages/ingresoProducto';
import ProductoSalida from './pages/productoSalida';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/ventas" element={<ProductoSalida />} />
        <Route path="/administrar" element={<IngresoProducto />} />
      </Routes>
    </>
  );
}
export default App;
