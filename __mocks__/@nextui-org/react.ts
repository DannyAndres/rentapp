import React from 'react';

type UnknownFunction = (...args: any[]) => any;

interface NextUIProviderProps {
  children: React.ReactNode;
  onChange: UnknownFunction;
  onClick: UnknownFunction;
  thumbIcon: UnknownFunction;
  defaultSelected: UnknownFunction;
  'data-testid': string;
}

export const NextUIProvider: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const Navbar: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const NavbarBrand: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const NavbarContent: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const NavbarItem: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const Button: React.FC<NextUIProviderProps> = ({
  children,
  ...props
}) => {
  return React.createElement(
    'div',
    {
      onClick: props.onClick,
      onChange: props.onChange,
      'data-testid': props['data-testid'],
    },
    children
  );
};

export const Switch: React.FC<NextUIProviderProps> = ({
  children,
  ...props
}) => {
  return React.createElement(
    'button',
    {
      onClick: props.onChange,
      'data-testid': props['data-testid'],
    },
    children
  );
};
