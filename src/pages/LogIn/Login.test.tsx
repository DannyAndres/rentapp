import React from 'react';

import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import LogIn, { EyeSlashFilledIcon, EyeFilledIcon } from './index';

jest.mock('@nextui-org/react');

const dispatchMock = jest.fn();
jest.mock('hooks/redux', () => ({
  useCustomSelector: () => {
    return {
      auth: {
        accessToken: '',
        isLoading: false,
      },
    };
  },
  useCustomDispatch: () => {
    return dispatchMock;
  },
}));

const loginMock = jest.fn();
jest.mock('redux/slices/auth', () => ({
  login: loginMock,
}));

const customRender = (): RenderResult => {
  return render(<LogIn />);
};

describe('LogIn', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });

  it('renders icon eye slash without crashing', () => {
    const { container } = render(<EyeSlashFilledIcon className="w-full" />);
    expect(container).toBeInTheDocument();
  });

  it('renders icon eye filled without crashing', () => {
    const { container } = render(<EyeFilledIcon className="w-full" />);
    expect(container).toBeInTheDocument();
  });
});
