import { useQuery } from '@tanstack/react-query';
import { AllPokemon, Pokemon } from './types';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonByNameOrId = async (nameOrId: string): Promise<Pokemon> => {
  return await fetch(`${baseUrl}/${nameOrId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const useGetPokemonByNameOrId = (nameOrId: string) => {
  return useQuery({
    queryKey: ['getPokemon', nameOrId],
    queryFn: () => getPokemonByNameOrId(nameOrId),
  });
};

// Not actually all but the first 151
const getAllPokemon = async (): Promise<AllPokemon> => {
  return await fetch(`${baseUrl}?limit=151&offset=0`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const useGetAllPokemon = () => {
  return useQuery({
    queryKey: ['getPokemon'],
    queryFn: getAllPokemon,
  });
};
