import React, { useState } from 'react';
import { useGetAllPokemon } from '../api/api';
import { PokeCard, Spinner } from '.';
import Fuse from 'fuse.js';

const PokeList = () => {
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
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
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
