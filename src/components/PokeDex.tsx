import React from 'react';
import { useGetAllPokemon } from '../api/api';
import PokeCard from './PokeCard';

const PokeDex = () => {
  const { data, isLoading } = useGetAllPokemon();

  return (
    <div className="h-[70%] w-[70%] p-10 rounded-l-lg border-2 border-black bg-red-400">
      <div className="h-full w-full grid grid-cols-[1fr,1rem,1fr]">
        <div className="p-5 border-2 border-black bg-black">
          <div className="p-5 flex justify-left flex-wrap bg-slate-500 h-full">
            something
            {/* {isLoading && <>...is loading...</>}
        {!isLoading &&
          data?.results.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} index={index} />
          ))} */}
          </div>
        </div>
        <div className="w-5"></div>
        <div className="p-5 border-2 border-black bg-black">
          <div className="p-5 flex justify-left flex-wrap bg-slate-500 h-full">
            {' '}
            something
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDex;
