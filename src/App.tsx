import React, { useState } from 'react';
import { PokeDetails, PokeList } from './components';
import { getStorageIsDimmed } from './@/lib/utils';
import {
  PokeContext,
  PokeContextProps,
} from './components/PokeContext/PokeContext';

const App = () => {
  const [isDimmed, setIsDimmed] = useState(getStorageIsDimmed());

  const pokeContextValue: PokeContextProps = {
    isDimmed,
    setIsDimmed,
  };

  return (
    <div
      className={`h-screen p-4 ${isDimmed ? 'bg-slate-800' : 'bg-zinc-300'} center-element`}
    >
      <div className="h-[90%] w-[85%] p-10 rounded-l-lg border-2 border-black bg-red-400">
        <PokeContext.Provider value={pokeContextValue}>
          <div className="h-full w-full grid grid-cols-[1fr,1rem,1fr]">
            <PokeList />
            <div className="w-5" />
            <PokeDetails />
          </div>
        </PokeContext.Provider>
      </div>
    </div>
  );
};

export default App;
