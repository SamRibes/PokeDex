import React from 'react';
import { useGetAllPokemon } from './api/api';
import PokeCard from './components/PokeCard';

const App = () => {
  const { data, isLoading } = useGetAllPokemon();

  return (
    <div className="h-screen p-4 bg-zinc-300">
      {isLoading && <>...is loading...</>}
      <div className="flex justify-left flex-wrap ">
        {!isLoading &&
          data?.results.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} index={index} />
          ))}
      </div>
    </div>
  );
};

export default App;
