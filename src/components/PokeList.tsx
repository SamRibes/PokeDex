import React from 'react';
import PokeCard from './PokeCard';
import { useGetAllPokemon } from '../api/api';

const PokeList = () => {
  const { data: pokeData, isLoading } = useGetAllPokemon();
  return (
    <div className="p-5 border-2 border-black bg-black overflow-auto">
      <div className="p-5 flex justify-left flex-wrap bg-teal-600 h-full overflow-auto">
        {isLoading && <>...is loading...</>}
        {!isLoading &&
          pokeData?.results.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} index={index} />
          ))}
      </div>
    </div>
  );
};

export default PokeList;
