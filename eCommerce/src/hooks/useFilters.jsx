import { useContext } from "react";
import { FiltersContext } from "../context/filters.jsx";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (games) => {
    return games.filter((game) => {
      return (
        game.Id_Juego.toLowerCase().includes(
          filters.Id_Juego.toLocaleLowerCase()
        ) &&
        game.Nombre_Juego.toLowerCase().includes(
          filters.Nombre_Juego.toLocaleLowerCase()
        ) &&
        (filters.IdCategoria === "all" ||
          game.IdCategoria === filters.IdCategoria) &&
        game.precio >= filters.minPrice
      );
    });
  };
  return { filterProducts, setFilters };
}
