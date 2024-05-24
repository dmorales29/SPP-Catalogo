import { Bar } from "../components/Bar";
import { Games } from "../components/Games";
import { useFilters } from "../hooks/useFilters";
import { games } from "../mocks/Games.json";

export function Home() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(games);

  return (
    <>
      <Bar />
      <Games games={filteredProducts} />
    </>
  );
}
