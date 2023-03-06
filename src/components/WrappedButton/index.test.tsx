import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import React from 'react';

import WrappedButton from '.';


describe('WrappedButton', () => {
  beforeEach(() => {
    render(<WrappedButton />);
  })

  test('should display button', () => {

    // const button = screen.queryByText(/Button/);
    screen.logTestingPlaygroundURL();

    const button = screen.getByRole('button', {
      name: /button/i
    })

    expect(button).toHaveClass('btn');
    expect(button).toBeInTheDocument();
  });

  test('should display button with new text', async () => {
    const button = screen.getByRole('button', {
      name: /button/i
    })

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    screen.debug()

    expect(button).toHaveTextContent('New Button');
  })

  test.skip('should call alert on click', () => {
    const button = screen.getByRole('button', {
      name: /button/i
    })

    jest.spyOn(window, 'alert').mockImplementationOnce(() => "Click");

    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    expect(window.alert).toHaveBeenCalledTimes(1);
  })
})
