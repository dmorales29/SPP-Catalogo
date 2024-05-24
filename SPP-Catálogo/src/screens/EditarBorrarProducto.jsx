import { useState } from "react";
import "./AgregarProducto.css";

const AgregarProducto = () => {
  // State para los valores del formulario
  const [producto, setProducto] = useState({
    imagen: null,
    descripcion: "",
    desarrollador: "",
    precio: "",
  });

  const games = [
    "Among Us",
    "League of Legends",
    "Fortnite",
    "Minecraft",
    "Cyberpunk 2077",
    "Assassin's Creed Valhalla",
    "FIFA 22",
    "Red Dead Redemption 2",
    "The Legend of Zelda: Breath of the Wild",
    "Call of Duty: Modern Warfare",
  ];

  const desarrolladores = [
    "Activision",
    "Nintendo",
    "Rockstar Games",
    "Electronic Arts",
    "Ubisoft",
    "CD Projekt",
    "Mojang Studios",
    "Epic Games",
    "Riot Games",
    "InnerSloth",
  ];

  const categorias = [
    "Acción",
    "Aventura",
    "Rol (RPG)",
    "Estrategia",
    "Deportes",
    "Carreras",
    "Lucha",
    "Plataforma",
    "Simulación",
    "Puzzles",
  ];

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el cambio de imagen
  const handleImageChange = (e) => {
    setProducto({
      ...producto,
      imagen: e.target.files[0],
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del producto, incluida la imagen
    console.log(producto);
    // Limpia el formulario después de enviar
    setProducto({
      imagen: null,
      descripcion: "",
      desarrollador: "",
      precio: "",
    });
  };

  return (
    <div className="form-container">
      <h3>Editar o Borrar Producto</h3>
      <form onSubmit={handleSubmit}>
        <div className="games">
          <label htmlFor="games">Selecciona el juego a editar o borrar:</label>
          <select
            id="games"
            name="games"
            value={producto.games}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un juego</option>
            {games.map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>
        </div>
        <div className="adjuntar-imagen">
          <label htmlFor="imagen">Adjuntar Imagen</label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <label htmlFor="idJuego">ID Juego:</label>
          <input
            type="text"
            id="idJuego"
            name="idJuego"
            value={producto.Id_Juego}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="idJuego">Nombre del juego:</label>
          <input
            type="text"
            id="nombreJuego"
            name="nombreJuego"
            value={producto.Nombre_Juego}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="desarrollador">Desarrollador:</label>
          <select
            id="desarrollador"
            name="desarrollador"
            value={producto.desarrollador}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un desarrollador</option>
            {desarrolladores.map((desarrollador) => (
              <option key={desarrollador} value={desarrollador}>
                {desarrollador}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="categorias">Categoría:</label>
          <select
            id="categorias"
            name="categorias"
            value={producto.IdCategoria}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttons">
          <button className="warning" type="submit">
            Eliminar
          </button>
          <button type="submit">Editar/Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default AgregarProducto;
