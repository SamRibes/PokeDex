import React from 'react';
import { PokeImage, Spinner } from '.';
import { usePokeContext } from './PokeContext';
import { useGetPokemonByNameOrId } from '../api/api';

const PokeDetails = () => {
  const { selectedPokemon } = usePokeContext();
  const { data: pokemonDetails, isLoading } =
    useGetPokemonByNameOrId(selectedPokemon);

  let index = 0;
  let alt = 'No Pokemon Selected';
  let name = "Welcome! Please select a Pokemon to view it's details";

  if (pokemonDetails) {
    index = pokemonDetails.id;
    alt = pokemonDetails.name;
    name = pokemonDetails.name;
  }

  return (
    <div className="p-5 border-2 border-black bg-black">
      <div className="p-5 flex justify-center items-center flex-wrap bg-slate-300 h-full">
        {isLoading && <Spinner />}
        {!isLoading && (
          <div className="grid grid-rows-3 justify-items-center">
            <PokeImage className="h-80 w-80" index={index} alt={alt} />
            <div>{name} description goes here</div>
            <div>stat table goes here</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeDetails;
