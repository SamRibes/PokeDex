import { capitalizeFirstLetter, processDescription } from './utils';

test('test capitalizeFirstLetter', () => {
  const uncapitalizedString = 'abcdefg';
  const capitalizedString = capitalizeFirstLetter(uncapitalizedString);
  expect(capitalizedString).toEqual('Abcdefg');
});

test('test processDescription', () => {
  const encodedString =
    'A strange seed was\nplanted on its\nback at birth.\u000cThe plant sprouts\nand grows with\nthis POKéMON.';
  const capitalizedString = processDescription(encodedString);
  expect(capitalizedString).toEqual(
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
  );
});
