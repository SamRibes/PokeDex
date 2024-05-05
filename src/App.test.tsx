import React from 'react';
import { render, screen } from '@testing-library/react';
import nock from 'nock';
import { AllTheProviders, interceptAPICalls } from './test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';

// TODO- Having trouble getting the interceptor to catch urls with query params.

beforeAll(() => interceptAPICalls());
afterAll(() => nock.cleanAll());

test('Click on Bulbasaur and correct description is displayed', async () => {
  const user = userEvent.setup();
  render(
    <AllTheProviders initialEntries="/">
      <App />
    </AllTheProviders>,
  );

  const bulbasaur = await screen.findByText('Bulbasaur', undefined, {
    timeout: 500,
  });
  user.click(bulbasaur);

  const description = await screen.findByText(
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
    undefined,
    {
      timeout: 500,
    },
  );
  expect(description).toBeInTheDocument();
});
