import React from 'react';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { MiddlewareRoute } from './Routes';

const dispatchMock = jest.fn();
jest.mock('hooks/redux', () => ({
  useCustomSelector: () => {
    return {
      auth: {
        accessToken: '',
      },
    };
  },
  useCustomDispatch: () => {
    return dispatchMock;
  },
}));

jest.mock('react-router-dom', () => ({
  Navigate: () => {
    return <div data-testid="empty-navidate"></div>;
  },
  useLocation: () => {
    return {
      pathname: '',
    };
  },
}));

const customRender = (access: string): RenderResult => {
  return render(
    <MiddlewareRoute
      config={{
        access,
      }}
    >
      <div data-testid="empty-div"></div>
    </MiddlewareRoute>
  );
};

describe('Routes', () => {
  it('renders no-auth routes without crashing', () => {
    const { container } = customRender('no-auth');
    expect(container).toBeInTheDocument();
  });

  it('renders auth routes without crashing', () => {
    const { container } = customRender('auth');
    expect(container).toBeInTheDocument();
  });
});
