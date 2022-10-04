/* eslint-disable import/export */

import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const customRender = (ui: React.ReactNode, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed

    wrapper: ({ children }) => children,

    ...options,
  });

export const renderWithRouter = (ui: React.ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(<>{ui}</>, { wrapper: BrowserRouter }),
  };
};
