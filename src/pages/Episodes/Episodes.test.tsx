import React from 'react';

import { render, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import Episodes from './index';

interface RickMortyAPIInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface RickMortyAPIResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
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
    count: 51,
    pages: 3,
    next: 'https://rickandmortyapi.com/api/episode?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Pilot',
      air_date: 'December 2, 2013',
      episode: 'S01E01',
      characters: [
        'https://rickandmortyapi.com/api/character/1',
        'https://rickandmortyapi.com/api/character/2',
        'https://rickandmortyapi.com/api/character/35',
        'https://rickandmortyapi.com/api/character/38',
        'https://rickandmortyapi.com/api/character/62',
        'https://rickandmortyapi.com/api/character/92',
        'https://rickandmortyapi.com/api/character/127',
        'https://rickandmortyapi.com/api/character/144',
        'https://rickandmortyapi.com/api/character/158',
        'https://rickandmortyapi.com/api/character/175',
        'https://rickandmortyapi.com/api/character/179',
        'https://rickandmortyapi.com/api/character/181',
        'https://rickandmortyapi.com/api/character/239',
        'https://rickandmortyapi.com/api/character/249',
        'https://rickandmortyapi.com/api/character/271',
        'https://rickandmortyapi.com/api/character/338',
        'https://rickandmortyapi.com/api/character/394',
        'https://rickandmortyapi.com/api/character/395',
        'https://rickandmortyapi.com/api/character/435',
      ],
      url: 'https://rickandmortyapi.com/api/episode/1',
      created: '2017-11-10T12:56:33.798Z',
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
  return render(<Episodes />);
};

describe('Episodes', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      customRender(); // Render the component
    });
  });
});
