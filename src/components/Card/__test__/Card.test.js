import { render, screen } from '@testing-library/react';
import Card from '../Card';

const cardProps = {
  name: 'Sydney',
  phone: '111-111-1111',
  email: 'laith@hotmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'cute cat',
  },
  favoured: false,
};

describe('Card', () => {
  test('should show name of cat', () => {
    render(<Card {...cardProps} />);

    expect(
      screen.getByRole('heading', {
        name: /sydney/i,
      })
    ).toBeInTheDocument();
  });

  test('should show phone number', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  test('should show email', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/laith@hotmail.com/i)).toBeInTheDocument();
  });
});
