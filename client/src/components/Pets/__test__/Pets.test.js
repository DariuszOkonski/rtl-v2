import { render, screen } from '@testing-library/react';
import Pets from '../Pets';
import userEvent from '@testing-library/user-event';

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import catsMock from '../../../mocks/cats.json';

// const server = setupServer(
//   rest.get('http://localhost:4000/cats', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(catsMock));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.restoreHandlers());
// afterAll(() => server.close());

// describe('Pets', () => {
//   test('should render the correct amount of cards', async () => {
//     render(<Pets />);
//     const cards = await screen.findAllByRole('article');

//     expect(cards.length).toBe(5);
//   });
// });

//FIX THIS TEST, TEXTENCODER IS NOT DEFINED

describe('Pets', () => {
  test.skip('should filter for male cats', async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByLabelText(/gender/i), 'male');

    const maleCards = screen.getAllByRole('article');

    // expect(maleCards).toStrictEqual([cards[1], cards[3]]);
  });
  test.skip('should filter for female cats', async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByLabelText(/gender/i), 'female');

    const maleCards = screen.getAllByRole('article');

    // expect(maleCards).toStrictEqual([cards[0], cards[2], cards[4]]);
  });
});
