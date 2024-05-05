import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const handleChangeID = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      Id_Juego: event.target.value,
    }));
  };

  const handleChangeName = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      Nombre_Juego: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      IdCategoria: event.target.value,
    }));
  };

  return (
    <fieldset className="filtros">
      <legend>Buscar Juego:</legend>
      <div className="options">
        <div>
          <label htmlFor="Search">ID del juego: </label>
          <input
            value={filters}
            onChange={handleChangeID}
            type="text"
            id="nombre"
            name="Search"
          />
        </div>
        <div>
          <label htmlFor="Search">Nombre del juego: </label>
          <input
            value={filters}
            onChange={handleChangeName}
            type="text"
            id="nombre"
            name="Search"
          />
        </div>
        <div>
          <label htmlFor="IdCategoria">Categoría: </label>
          <select id="IdCategoria" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Rol (RPG)">Rol (RPG)</option>
            <option value="Estrategia">Estrategia</option>
            <option value="Deportes">Deportes</option>
            <option value="Carreras">Carreras</option>
            <option value="Lucha">Lucha</option>
            <option value="Plataforma">Plataforma</option>
            <option value="Simulación">Simulación</option>
            <option value="Puzzles">Puzzles</option>
          </select>
        </div>
      </div>
    </fieldset>
  );
}
