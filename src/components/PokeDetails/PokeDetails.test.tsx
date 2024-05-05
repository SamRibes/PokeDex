import React from 'react';
import { render, screen } from '@testing-library/react';
import { AllTheProviders } from '../../test-utils';
import PokeDetails from './PokeDetails';

test('Renders the PokeDetails Component correctly', async () => {
  render(
    <AllTheProviders initialEntries="?pokeId=1">
      <PokeDetails />
    </AllTheProviders>,
  );

  await new Promise((r) => setTimeout(r, 500));
  const linkElement = await screen.getByText(/Bulbasaur/i);
  expect(linkElement).toBeInTheDocument();
});
