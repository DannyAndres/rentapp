import React from 'react';

import { render, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import Characters from './index';

interface RickMortyAPIInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface RickMortyAPIResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
}

interface RickMortyAPI {
  info: RickMortyAPIInfo;
  results: RickMortyAPIResult[];
}

jest.mock('@nextui-org/react');

const navigateMock = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    useNavigate: () => {
      return navigateMock;
    },
    useSearchParams: () => {
      return [
        {
          get: () => {
            return '2';
          },
        },
      ];
    },
  };
});

const mockData: RickMortyAPI = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
      ],
    },
  ],
};

global.fetch = jest.fn(
  async () =>
    await Promise.resolve({
      json: async () => await Promise.resolve(mockData),
    })
) as jest.Mock;

const customRender = (): RenderResult => {
  return render(<Characters />);
};

describe('Characters', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      customRender(); // Render the component
    });
  });
});
