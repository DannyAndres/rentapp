import React from 'react';

interface PersistGateProps {
  children: React.ReactNode;
}

export const PersistGate: React.FC<PersistGateProps> = ({ children }) =>
  React.createElement('div', {}, children);
