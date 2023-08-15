import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) =>
  React.createElement('div', {}, children);

export const useSelector = jest.fn();
export const useDispatch = jest.fn();
export const useCustomSelector = jest.fn();
export const useCustomDispatch = jest.fn();
