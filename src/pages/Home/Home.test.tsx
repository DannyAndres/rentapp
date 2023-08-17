import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import Home from './index';

jest.mock('@nextui-org/react');

const navigateMock = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    useNavigate: () => {
      return navigateMock;
    },
  };
});

const customRender = (): RenderResult => {
  return render(<Home />);
};

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });

  it('does navigate when pressing characters', async () => {
    const { getByTestId } = customRender();
    const button = getByTestId('home-characters');
    fireEvent.click(button);
    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalled();
    });
  });

  it('does navigate when pressing locations', async () => {
    const { getByTestId } = customRender();
    const button = getByTestId('home-locations');
    fireEvent.click(button);
    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalled();
    });
  });

  it('does navigate when pressing episodes', async () => {
    const { getByTestId } = customRender();
    const button = getByTestId('home-episodes');
    fireEvent.click(button);
    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalled();
    });
  });
});
