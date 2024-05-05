import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import nock from 'nock';
import mockedSpeciesAPIResponse from './mockData/mockedSpeciesAPIResponse.json';
import mockedPokemonAPIResponse from './mockData/mockedPokemonAPIResponse.json';
import mockedAllPokemonAPIResponse from './mockData/mockedAllPokemonAPIResponse.json';

export const baseUrl = 'https://pokeapi.co/api/v2/';

export const AllTheProviders = ({
  children,
  initialEntries,
}: {
  children: React.ReactNode;
  initialEntries: string;
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[initialEntries]}>{children}</MemoryRouter>
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
