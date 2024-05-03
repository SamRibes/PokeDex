import React from 'react';
import { PokeDetails, PokeList } from './components';
import { useGetAllPokemon } from './api/api';

const App = () => {
  return (
    <div className="h-screen p-4 bg-zinc-300 flex justify-center items-center">
      <div className="h-[70%] w-[70%] p-10 rounded-l-lg border-2 border-black bg-red-400">
        <div className="h-full w-full grid grid-cols-[1fr,1rem,1fr]">
          <PokeList />
          <div className="w-5"></div>
          <PokeDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
