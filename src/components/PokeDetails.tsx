import React from 'react';
import { PokeImage, Spinner } from '.';
import { usePokeContext } from './PokeContext';
import {
  useGetPokemonByNameOrId,
  useGetPokemonSpeciesByNameOrId,
} from '../api/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../@/components/ui/table';
import { capitalizeFirstLetter, processDescription } from '../@/lib/utils';

const PokeDetails = () => {
  const { selectedPokemon } = usePokeContext();
  const { data: pokemonDetails, isLoading: isDetailsLoading } =
    useGetPokemonByNameOrId(selectedPokemon);
  const { data: pokemonSpecies, isLoading: isSpeciesLoading } =
    useGetPokemonSpeciesByNameOrId(selectedPokemon);

  let index = 0;
  let alt = 'No Pokemon Selected';
  let name = 'Welcome! Please select a Pokemon to view its details';
  let description = '';

  if (pokemonDetails) {
    index = pokemonDetails.id;
    alt = pokemonDetails.name;
    name = pokemonDetails.name;
  }

  if (pokemonSpecies) {
    const englishDescription = pokemonSpecies.flavor_text_entries.find(
      (entry) => {
        return entry.language.name === 'en';
      },
    );
    if (englishDescription)
      description = processDescription(englishDescription.flavor_text);
  }

  return (
    // TODO- Long term I'd have breakpoints for smaller screen sizes (change images sizes and reformat the PokeDetails)
    <div className="p-5 border-2 border-black bg-black overflow-scroll">
      <div className="p-5 flex justify-center items-center flex-wrap bg-slate-300 h-full">
        {(isDetailsLoading || isSpeciesLoading) && <Spinner />}
        {!isDetailsLoading && !isSpeciesLoading && (
          <div className="flex flex-col justify-center items-center">
            <PokeImage className="h-80 w-80" index={index} alt={alt} />
            <div className="flex flex-col items-center">
              <h1>{capitalizeFirstLetter(name)}</h1>
              <p className=" break-words w-[80%] text-center">{description}</p>
            </div>
            {/* Can't figure out why I have to set this font size manually*/}
            <Table className="text-[1.7rem] w-[50%]">
              {pokemonDetails && (
                <>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Stat</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pokemonDetails &&
                      pokemonDetails.stats.map((statDetails) => {
                        return (
                          <TableRow key={statDetails.stat.name}>
                            <TableCell>
                              {capitalizeFirstLetter(statDetails.stat.name)}
                            </TableCell>
                            <TableCell>{statDetails.base_stat}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </>
              )}
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeDetails;
