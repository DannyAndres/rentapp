import React from 'react';

import { render, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import Locations from './index';

interface RickMortyAPIInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface RickMortyAPIResult {
  id: number;
  name: string;
  dimension: string;
  type: string;
  url: string;
  residents: string[];
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
    count: 126,
    pages: 7,
    next: 'https://rickandmortyapi.com/api/location?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Earth (C-137)',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: [
        'https://rickandmortyapi.com/api/character/38',
        'https://rickandmortyapi.com/api/character/45',
        'https://rickandmortyapi.com/api/character/71',
        'https://rickandmortyapi.com/api/character/82',
        'https://rickandmortyapi.com/api/character/83',
        'https://rickandmortyapi.com/api/character/92',
        'https://rickandmortyapi.com/api/character/112',
        'https://rickandmortyapi.com/api/character/114',
        'https://rickandmortyapi.com/api/character/116',
        'https://rickandmortyapi.com/api/character/117',
        'https://rickandmortyapi.com/api/character/120',
        'https://rickandmortyapi.com/api/character/127',
        'https://rickandmortyapi.com/api/character/155',
        'https://rickandmortyapi.com/api/character/169',
        'https://rickandmortyapi.com/api/character/175',
        'https://rickandmortyapi.com/api/character/179',
        'https://rickandmortyapi.com/api/character/186',
        'https://rickandmortyapi.com/api/character/201',
        'https://rickandmortyapi.com/api/character/216',
        'https://rickandmortyapi.com/api/character/239',
        'https://rickandmortyapi.com/api/character/271',
        'https://rickandmortyapi.com/api/character/302',
        'https://rickandmortyapi.com/api/character/303',
        'https://rickandmortyapi.com/api/character/338',
        'https://rickandmortyapi.com/api/character/343',
        'https://rickandmortyapi.com/api/character/356',
        'https://rickandmortyapi.com/api/character/394',
      ],
      url: 'https://rickandmortyapi.com/api/location/1',
      created: '2017-11-10T12:42:04.162Z',
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
  return render(<Locations />);
};

describe('Locations', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      customRender(); // Render the component
    });
  });
});
