import React from 'react';

type UnknownFunction = (...args: any[]) => any;

interface NextUIProviderProps {
  children: React.ReactNode;
  onChange: UnknownFunction;
  onClick: UnknownFunction;
  thumbIcon: UnknownFunction;
  defaultSelected: UnknownFunction;
  'data-testid': string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  ref?: React.RefObject<HTMLInputElement>;
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

export const Spinner: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const Avatar: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const Card: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const CardHeader: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const CardBody: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const CardFooter: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const Divider: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const Link: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const Image: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const Skeleton: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);
export const Chip: React.FC<NextUIProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const Button: React.FC<NextUIProviderProps> = ({
  children,
  ...props
}) => {
  return React.createElement(
    'button',
    {
      onClick: props.onClick,
      onChange: props.onChange,
      'data-testid': props['data-testid'],
    },
    children
  );
};

export const Input: React.FC<NextUIProviderProps> = ({
  children,
  ...props
}) => {
  return React.createElement(
    'input',
    {
      onClick: props.onClick,
      onChange: props.onChange,
      label: props.label,
      placeholder: props.placeholder,
      'data-testid': props['data-testid'],
      value: props.value,
      type: props.type,
      ref: props.ref,
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
