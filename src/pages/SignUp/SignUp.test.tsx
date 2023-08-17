import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import type { SubmitHandler } from 'react-hook-form';
import SignUp from './index';
import { EyeSlashFilledIcon, EyeFilledIcon } from './SignUp';

interface IFormInput {
  email: string;
  password: string;
  confirmpassword: string;
}

jest.mock('@nextui-org/react');

const submitMock = jest.fn();
jest.mock('react-hook-form', () => ({
  useForm: () => {
    const handleSubmit = (
      method: SubmitHandler<IFormInput>
    ): SubmitHandler<IFormInput> => {
      submitMock();
      const mockMethod = (): unknown => {
        return method({
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
          confirmpassword: 'cityslicka',
        });
      };
      return mockMethod;
    };
    return {
      register: jest.fn(),
      watch: jest.fn(),
      handleSubmit, // Return the mock function
      formState: {
        errors: {
          email: '',
          password: '',
        },
      },
    };
  },
}));

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

const signupMock = jest.fn();
jest.mock('redux/slices/auth', () => ({
  signup: signupMock,
}));

const customRender = (): RenderResult => {
  return render(<SignUp />);
};

describe('SignUp', () => {
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

  it('is executed register method when pressed submit button', async () => {
    const { getByTestId, getByPlaceholderText } = customRender();

    const emailInput = getByPlaceholderText(
      'Enter your email'
    ) as HTMLInputElement;
    const passwordInput = getByPlaceholderText(
      'Enter your password'
    ) as HTMLInputElement;
    const submitButton = getByTestId('signup-submit');

    fireEvent.change(emailInput, {
      target: { value: 'eve.holt@reqres.in' },
    });
    fireEvent.change(passwordInput, { target: { value: 'cityslicka' } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(emailInput.value).toBe('eve.holt@reqres.in');
      expect(passwordInput.value).toBe('cityslicka');
      expect(submitMock).toHaveBeenCalled();
    });
  });
});
