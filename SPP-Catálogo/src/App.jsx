import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Bar } from "./components/Bar";
import { Games } from "./components/Games";
import { games } from "./mocks/Games.json";
import { useFilters } from "./hooks/useFilters";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(games);

  return (
    <>
      <Header />
      <Bar />
      <Games games={filteredProducts} />
    </>
  );
}

export default App;
