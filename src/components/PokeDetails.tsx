import React from 'react';
import { PokeImage, Spinner } from '.';
import { usePokeContext } from './PokeContext';
import { useGetPokemonByNameOrId } from '../api/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../@/components/ui/table';
import { capitalizeFirstLetter } from '../@/lib/utils';

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
          <div className="grid grid-cols-[h-80,1fr,1fr] justify-items-center">
            <PokeImage className="h-80 w-80" index={index} alt={alt} />
            <div className="flex flex-col items-center">
              <h1>{capitalizeFirstLetter(name)}</h1>
              <p></p>
            </div>
            {/* Can't figure out why I have to set this font size manually*/}
            <Table className="text-[1.7rem]">
              {pokemonDetails && (
                <>
                  <TableHeader>
                    <TableHead>Stat</TableHead>
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
