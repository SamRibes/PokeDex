import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import PokeList from './PokeList';
import { interceptAPICalls, AllTheProviders } from '../../test-utils';

beforeAll(() => {
  interceptAPICalls();
});

afterAll(() => {
  nock.cleanAll();
});

test('Renders the PokeList Component correctly', () => {
  render(
    <AllTheProviders initialEntries="/">
      <PokeList />
    </AllTheProviders>,
  );
  const pokemonName1 = screen.getByText(/Bulbasaur/i);
  expect(pokemonName1).toBeInTheDocument();
  const pokemonName2 = screen.getByText(/Ivysaur/i);
  expect(pokemonName2).toBeInTheDocument();
  const pokemonName3 = screen.getByText(/Venusaur/i);
  expect(pokemonName3).toBeInTheDocument();
});

test('Search works', () => {
  const user = userEvent.setup();

  render(
    <AllTheProviders initialEntries="/">
      <PokeList />
    </AllTheProviders>,
  );

  const searchInput = screen.getByPlaceholderText('Search');
  expect(searchInput).toBeInTheDocument();
  user.type(searchInput, 'bulbasaur');

  const pokemonName1 = screen.getByText(/Bulbasaur/i);
  expect(pokemonName1).toBeInTheDocument();
  const pokemonName2 = screen.getByText(/Ivysaur/i);
  expect(pokemonName2).toNotBeInTheDocument();
  const pokemonName3 = screen.getByText(/Venusaur/i);
  expect(pokemonName3).toNotBeInTheDocument();
});
