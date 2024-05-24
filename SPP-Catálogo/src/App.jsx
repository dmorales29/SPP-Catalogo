import "./App.css";
import { Home } from "./screens/Home";
import { NavBar } from "../src/components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgregarProducto from "./screens/AgregarProducto";
import EditarBorrarProducto from "./screens/EditarBorrarProducto";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route
            path="/editar-borrar-producto"
            element={<EditarBorrarProducto />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
