import "./Games.css";

export function Games({ games }) {
  return (
    <div className="products">
      <ul>
        {games.map((game) => (
          <li key={game.Id_Juego}>
            <div className="thumb">
              <img src={game.imagen} />
            </div>
            <div className="info">
              <h1>{game.Nombre_Juego}</h1>
              <p className="descripcion">{game.descripcion}</p>
              <p className="badge">{game.desarrollador}</p>
            </div>
            <div className="actions">
              <p className="price">$ {game.precio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
