import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setThemeMode } from 'redux/slices/settings';
import configureStore from 'redux-mock-store';
import Header from './index';

jest.mock('@nextui-org/react');

let navigateMock = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    useNavigate: () => {
      return navigateMock;
    },
  };
});

const dispatchMock = jest.fn();
jest.mock('hooks/redux', () => ({
  useCustomSelector: () => {
    return {
      settings: {
        themeMode: 'light',
      },
      auth: {
        authenticated: false,
      },
    };
  },
  useCustomDispatch: () => {
    return dispatchMock;
  },
}));

jest.mock('redux/slices/settings', () => ({
  setThemeMode: jest.fn(),
}));

const mockStore = configureStore([]);
const store = mockStore({});

const customRender = (): RenderResult => {
  return render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe('Header', () => {
  beforeEach(() => {
    // Create a new mock function for each test
    navigateMock = jest.fn();
    // Mock useNavigate to return the mock function
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => navigateMock,
    }));
  });

  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });

  it('should navigate to home page when logo button is clicked', () => {
    const { getByTestId } = customRender();

    const logoButton = getByTestId('header-logo-button');
    fireEvent.click(logoButton);

    expect(navigateMock).toHaveBeenCalledWith('/', { replace: true });
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  it('should navigate to login page when login button is clicked', () => {
    const { getByTestId } = customRender();

    const loginButton = getByTestId('header-login-button');
    fireEvent.click(loginButton);

    expect(navigateMock).toHaveBeenCalledWith('/login');
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  it('should navigate to signup page when signup button is clicked', () => {
    const { getByTestId } = customRender();

    const signUpButton = getByTestId('header-signup-button');
    fireEvent.click(signUpButton);

    expect(navigateMock).toHaveBeenCalledWith('/register');
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  it('does render darkmode button', async () => {
    const { getByTestId } = customRender();

    const darkmodeButton = getByTestId('header-darkmode-button');
    expect(darkmodeButton).toBeInTheDocument();

    fireEvent.click(darkmodeButton);

    await waitFor(() => {
      expect(setThemeMode).toHaveBeenCalled();
    });
  });
});
