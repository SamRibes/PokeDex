import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeCard from './PokeCard';
import { PokemonItem } from '../../api/types';
import { MemoryRouter } from 'react-router-dom';

test('Renders PokeCard correctly', () => {
  const pokemonItem: PokemonItem = {
    name: 'bulbasaur',
    url: "doesn't really matter",
  };
  const index = 0;
  const { container } = render(
    <MemoryRouter initialEntries={['/?pokeId=1']}>
      <PokeCard pokemon={pokemonItem} index={index} />
    </MemoryRouter>,
  );
  const pokemonNumber = screen.getByText(/1/i);
  expect(pokemonNumber).toBeInTheDocument();
  const pokemonName = screen.getByText(/Bulbasaur/i);
  expect(pokemonName).toBeInTheDocument();
  const pokemonImage = container.querySelector('img');
  expect(pokemonImage).toBeInTheDocument();
  expect(pokemonImage).toHaveAttribute('src', '/sprites/1.png');
});
