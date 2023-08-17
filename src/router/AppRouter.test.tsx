import React from 'react';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import AppRouter from './index';

const dispatchMock = jest.fn();
jest.mock('hooks/redux', () => ({
  useCustomSelector: () => {
    return {
      auth: {
        accessToken: '',
        isLoading: false,
      },
      settings: {
        themeMode: 'light',
      },
    };
  },
  useCustomDispatch: () => {
    return dispatchMock;
  },
}));

const customRender = (): RenderResult => {
  return render(<AppRouter />);
};

describe('AppRouter', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });
});
