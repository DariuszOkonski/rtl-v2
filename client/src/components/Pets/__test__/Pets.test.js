import { render, screen } from '@testing-library/react';
import Pets from '../Pets';

describe('Pets', () => {
  test.skip('should render the correct amount of cards', async () => {
    // TODO: this test is wrong because it uses axios and it should be mocked
    render(<Pets />);
    const cards = await screen.findAllByRole('article');

    expect(cards.length).toBe(5);
  });
});
