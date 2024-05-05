import React from 'react';
import { render } from '@testing-library/react';
import PokeImage from './PokeImage';

test('Renders the PokeImage Component correctly', () => {
  const { container } = render(<PokeImage index={1} alt="something" />);

  const pokemonImage = container.querySelector('img');
  expect(pokemonImage).toHaveAttribute('alt', 'something');
  expect(pokemonImage).toHaveAttribute('src', `/sprites/1.png`);
});
