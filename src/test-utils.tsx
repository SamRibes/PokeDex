import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import nock from 'nock';
import mockedSpeciesAPIResponse from './mockData/mockedSpeciesAPIResponse.json';
import mockedPokemonAPIResponse from './mockData/mockedPokemonAPIResponse.json';
import mockedAllPokemonAPIResponse from './mockData/mockedAllPokemonAPIResponse.json';
import {
  PokeContext,
  PokeContextProps,
} from './components/PokeContext/PokeContext';

export const baseUrl = 'https://pokeapi.co/api/v2/';

export const AllTheProviders = ({
  children,
  initialEntries,
}: {
  children: React.ReactNode;
  initialEntries: string;
}) => {
  const queryClient = new QueryClient();
  const [isDimmed, setIsDimmed] = useState(false);
  const contextValue: PokeContextProps = {
    isDimmed,
    setIsDimmed,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <PokeContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[initialEntries]}>
          {children}
        </MemoryRouter>
      </PokeContext.Provider>
    </QueryClientProvider>
  );
};

export function interceptAPICalls() {
  nock(baseUrl)
    .persist()
    .get('/pokemon?limit=151&offset=0')
    .reply(200, mockedAllPokemonAPIResponse);
  nock(baseUrl).persist().get('/1').reply(200, mockedPokemonAPIResponse);
  nock(baseUrl)
    .persist()
    .get('/pokemon-species/1')
    .reply(200, mockedSpeciesAPIResponse);
}
