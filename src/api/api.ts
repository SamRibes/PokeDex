import { useQuery } from '@tanstack/react-query';
import { AllPokemon, Pokemon, PokemonSpecies } from './types';

const baseUrl = 'https://pokeapi.co/api/v2/';

const getPokemonByNameOrId = async (nameOrId?: string): Promise<Pokemon> => {
  return await fetch(`${baseUrl}pokemon/${nameOrId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const useGetPokemonByNameOrId = (nameOrId?: string) => {
  return useQuery({
    queryKey: ['getPokemon', nameOrId],
    queryFn: () => getPokemonByNameOrId(nameOrId),
    enabled: !!nameOrId,
  });
};

const getPokemonSpeciesByNameOrId = async (
  nameOrId?: string,
): Promise<PokemonSpecies> => {
  return await fetch(`${baseUrl}/pokemon-species/${nameOrId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const useGetPokemonSpeciesByNameOrId = (nameOrId?: string) => {
  return useQuery({
    queryKey: ['getPokemonSpecies', nameOrId],
    queryFn: () => getPokemonSpeciesByNameOrId(nameOrId),
    enabled: !!nameOrId,
  });
};

// Not actually all but the first 151
const getAllPokemon = async (): Promise<AllPokemon> => {
  return await fetch(`${baseUrl}pokemon?limit=151&offset=0`)
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
