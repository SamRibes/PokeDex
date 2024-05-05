import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useGetPokemonByNameOrId,
  useGetPokemonSpeciesByNameOrId,
} from '../../api/api';
import { PokeImage, Spinner } from '..';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../@/components/ui/table';
import { capitalizeFirstLetter, processDescription } from '../../@/lib/utils';
import { Button } from '../../@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PokeDetails = () => {
  const [params, setParams] = useSearchParams();
  const newQueryParameters = new URLSearchParams();
  const param = params.get('pokeId');
  const pokeId = param ? param : undefined;

  const { data: pokemonDetails, isLoading: isDetailsLoading } =
    useGetPokemonByNameOrId(pokeId);
  const { data: pokemonSpecies, isLoading: isSpeciesLoading } =
    useGetPokemonSpeciesByNameOrId(pokeId);

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

  const navigatePokemon = (direction: 'previous' | 'next') => {
    if (pokeId) {
      newQueryParameters.set(
        'pokeId',
        (parseInt(pokeId) + (direction === 'previous' ? -1 : 1)).toString(),
      );
      setParams(newQueryParameters);
    }
  };

  return (
    // TODO- Long term I'd have breakpoints for smaller screen sizes (change images sizes and reformat the PokeDetails)
    <div className="p-5 border-2 border-black bg-black overflow-scroll">
      <div className="flex items-center justify-around p-5 bg-slate-300 h-full">
        {(isDetailsLoading || isSpeciesLoading) && <Spinner />}
        {!isDetailsLoading && !isSpeciesLoading && (
          <>
            <Button
              variant="ghost"
              size="icon"
              disabled={index === 1}
              onClick={() => navigatePokemon('previous')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex flex-col justify-center items-center">
              <PokeImage className="h-80 w-80" index={index} alt={alt} />
              <div className="flex flex-col items-center">
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p className=" break-words w-[80%] text-center">
                  {description}
                </p>
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
            <Button
              variant="ghost"
              size="icon"
              disabled={index === 151}
              onClick={() => navigatePokemon('next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PokeDetails;
