import React from 'react';
import { useGetAllPokemon } from '../api/api';
import { PokeCard, Spinner } from '.';

const PokeList = () => {
  const { data: pokeData, isLoading } = useGetAllPokemon();
  return (
    <div className="p-5 rounded-lg border-2 border-black bg-black overflow-scroll">
      <div
        className={`p-5 flex ${isLoading ? 'justify-center items-center' : 'justify-evenly'} flex-wrap bg-teal-600 h-full overflow-auto`}
      >
        {isLoading && <Spinner />}
        {!isLoading &&
          pokeData?.results.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} index={index} />
          ))}
      </div>
    </div>
  );
};

export default PokeList;
