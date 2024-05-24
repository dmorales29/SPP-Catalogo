import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar({}) {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img
            className="link-home"
            src="/src/assets/overall/logo.png"
            alt="OXA Play"
            width="auto"
          />
        </Link>
        <div className="navbar">
          <NavLink to="/agregar-producto">Agregar Producto</NavLink>
          <NavLink to="/editar-borrar-producto">
            Editar o Borrar Producto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
