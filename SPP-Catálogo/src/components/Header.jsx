import "./Header.css";

export function Header({}) {
  return (
    <nav>
      <div className="nav-container">
        <a href="./index.html">
          <img
            src="/src/assets/overall/logo.png"
            alt="OXA Play"
            width="auto"
            height="60"
          />
        </a>
        {/* <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="menu-items">
          <ul className="navbar">
            <li className="nav-item">
              <a className="nav-link active" href="./index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./juegos_populares.html">
                Juegos populares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./ofertas.html">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./community.html">
                Comunidad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./carrito.html">
                Carrito
              </a>
            </li>
          </ul>
        </div>*/}
      </div>
    </nav>
  );
}
