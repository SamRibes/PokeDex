import React from 'react';
import { useGetAllPokemonByNameOrId, useGetPokemonByNameOrId } from './api/api';

const App = () => {
  const { data: allPokemon, isLoading: allPokemonIsLoading } =
    useGetAllPokemonByNameOrId();

  if (allPokemonIsLoading) <>isLoading</>;

  const pokemonIndex = 0;
  const firstPokemon = allPokemon?.results[pokemonIndex];

  return (
    <div className="flex justify-center items-center h-screen p-4">
      {/* {allPokemon?.results.map((pokemon) => { */}
      {
        <div>
          {firstPokemon?.name}
          <img
            src={`/sprites/${pokemonIndex + 1}.png`}
            alt={firstPokemon?.name}
          />
        </div>
      }
    </div>
  );
};

export default App;
