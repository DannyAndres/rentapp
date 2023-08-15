import React from 'react';

import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { mockStore, mockPersistor } from './../__mocks__/redux-store';
import App from './App';

jest.mock('react-redux');
jest.mock('redux-persist/lib/integration/react');
jest.mock('@nextui-org/react');

jest.mock('./router', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="app-component">{children}</div>
    ),
  };
});

jest.mock('./redux/store', () => ({
  __esModule: true,
  default: mockStore,
  persistor: mockPersistor,
}));

const customRender = (): RenderResult => {
  return render(<App />);
};

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });
});
