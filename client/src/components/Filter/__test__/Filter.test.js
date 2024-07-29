import { render, screen } from '@testing-library/react';
import Filter from '../Filter';
import userEvent from '@testing-library/user-event';

describe.skip('Filter', () => {
  test('should be able to change value of favoured select', async () => {
    render(<Filter />);
    const select = screen.getByLabelText(/favourite/i);
    expect(select.value).toBe('any');

    await userEvent.selectOptions(select, 'favoured');
    expect(select.value).toBe('favoured');

    await userEvent.selectOptions(select, 'not favoured');
    expect(select.value).toBe('not favoured');
  });

  test('should be able to change value of gender select', async () => {
    render(<Filter />);

    const select = screen.getByLabelText(/gender/i);

    expect(select.value).toBe('any');

    await userEvent.selectOptions(select, 'male');
    expect(select.value).toBe('male');

    await userEvent.selectOptions(select, 'female');
    expect(select.value).toBe('female');
  });
});
