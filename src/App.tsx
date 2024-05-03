import React from 'react';
import { useGetPokemonByNameOrId } from './api/api';

const App = () => {
  const pokemonString = '1';
  const { data, isLoading } = useGetPokemonByNameOrId(pokemonString);

  if (isLoading) <>isLoading</>;

  return (
    <div className="flex justify-center items-center h-screen p-4">
      {data?.name}
    </div>
  );
};

export default App;
