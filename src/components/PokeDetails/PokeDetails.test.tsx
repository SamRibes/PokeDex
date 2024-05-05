import React from 'react';
import { render, screen } from '@testing-library/react';
import nock from 'nock';
import { AllTheProviders, interceptAPICalls } from '../../test-utils';
import PokeDetails from './PokeDetails';

test('Renders the PokeDetails Component correctly', async () => {
  render(
    <AllTheProviders initialEntries="?pokeId=1">
      <PokeDetails />
    </AllTheProviders>,
  );

  await new Promise((r) => setTimeout(r, 500));
  interceptAPICalls();
  const pokemonName = screen.getByText(/Bulbasaur/i);
  expect(pokemonName).toBeInTheDocument();

  const description = screen.getByText(
    /A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON./i,
  );
  expect(description).toBeInTheDocument();

  const hp = await screen.getByText(/Hp/i);
  expect(hp).toBeInTheDocument();
  const hpValue = await screen.getByText(/45/i);
  expect(hpValue).toBeInTheDocument();

  const attack = await screen.getByText(/Attack/i);
  expect(attack).toBeInTheDocument();
  const attackValue = await screen.getByText(/49/i);
  expect(attackValue).toBeInTheDocument();

  const defense = await screen.getByText(/Defense/i);
  expect(defense).toBeInTheDocument();
  const defenseValue = await screen.getByText(/49/i);
  expect(defenseValue).toBeInTheDocument();

  const specialAttack = await screen.getByText(/Special-attack/i);
  expect(specialAttack).toBeInTheDocument();
  const specialAttackValue = await screen.getByText(/65/i);
  expect(specialAttackValue).toBeInTheDocument();

  const specialDefense = await screen.getByText(/Special-defense/i);
  expect(specialDefense).toBeInTheDocument();
  const specialDefenseValue = await screen.getByText(/65/i);
  expect(specialDefenseValue).toBeInTheDocument();

  const speed = await screen.getByText(/Speed/i);
  expect(speed).toBeInTheDocument();
  const speedValue = await screen.getByText(/45/i);
  expect(speedValue).toBeInTheDocument();

  nock.cleanAll();
});
