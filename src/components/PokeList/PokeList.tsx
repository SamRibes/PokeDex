import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { useGetAllPokemon } from '../../api/api';
import { Input } from '../../@/components/ui/input';
import { PokeCard, Spinner } from '..';
import { Switch } from '../../@/components/ui/switch';
import { usePokeContext } from '../PokeContext/PokeContext';
import { setStorageIsDimmed } from '../../@/lib/utils';

const PokeList = () => {
  const { isDimmed, setIsDimmed } = usePokeContext();
  const { data: pokeData, isLoading } = useGetAllPokemon();
  const [searchString, setSearchString] = useState('');

  const renderResults = () => {
    if (pokeData && !isLoading) {
      const fuse = new Fuse(pokeData.results, {
        keys: ['name'],
        threshold: 0.3,
      });

      const searchResult = fuse.search(searchString);

      const allResults = pokeData.results.map((val, index) => ({
        item: Object.assign(val, {}),
        refIndex: index,
        matches: [],
        score: 1,
      }));

      const dataToUse = searchString.length > 1 ? searchResult : allResults;

      return (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="w-40"></div>
            <Input
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="w-[40%] text-2xl text-center"
              placeholder="Search"
            />
            <div className="center-element w-40">
              <label className="mr-1">Dim the lights</label>
              <Switch
                checked={isDimmed}
                onCheckedChange={() => {
                  setStorageIsDimmed(!isDimmed);
                  setIsDimmed(!isDimmed);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly h-full overflow-auto mt-4">
            {!isLoading &&
              dataToUse.map((searchItem, index) => (
                <PokeCard
                  key={index}
                  pokemon={searchItem.item}
                  index={searchItem.refIndex}
                />
              ))}
            {dataToUse.length < 1 && <>There are no results</>}
          </div>
        </>
      );
    }
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  };

  return (
    <>
      <div className="p-5 rounded-lg border-2 border-black bg-black overflow-scroll">
        <div
          className={`p-5 flex flex-col justify-center items-center bg-teal-600 h-full`}
        >
          {renderResults()}
        </div>
      </div>
    </>
  );
};

export default PokeList;
