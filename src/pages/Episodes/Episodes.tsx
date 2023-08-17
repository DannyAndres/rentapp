import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Card,
  Chip,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Spinner,
} from '@nextui-org/react';

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

const Episodes: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<RickMortyAPI | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  useEffect(() => {
    const fetchCharacters = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode?page=${
            page != null ? page : '1'
          }`
        );
        const data = await response.json();
        setResult(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return (
    <div className="w-full pt-12 flex flex-col justify-start items-cente">
      <h1
        className="
              text-xl
              sm:text-2xl
              md:text-3xl
              text-green-900
              dark:text-gray-50
              block
              xl:inline
              w-full
              mb-12
            "
      >
        Rick and Morty API
      </h1>
      {loading || result == null ? (
        <Spinner label="Loading..." color="primary" />
      ) : (
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h1
            className="
              text-md
              sm:text-md
              md:text-xl
              text-green-900
              dark:text-gray-50
              block
              xl:inline
              w-full
              mb-2
            "
          >
            Episodes: {result.info.count}
          </h1>
          <h1
            className="
              text-md
              sm:text-md
              md:text-xl
              text-green-900
              dark:text-gray-50
              block
              xl:inline
              w-full
              mb-4
            "
          >
            Pages: {result.info.pages}
          </h1>
          <div className="mb-12 w-full flex justify-start items-start">
            {parseInt(page != null ? page : '1') > 1 && (
              <Button
                className="mr-4"
                onClick={() => {
                  navigate(
                    `/episodes?page=${parseInt(page != null ? page : '1') - 1}`
                  );
                }}
                color="primary"
              >
                Previous page
              </Button>
            )}
            {parseInt(page != null ? page : '1') < result.info.pages && (
              <Button
                onClick={() => {
                  navigate(
                    `/episodes?page=${parseInt(page != null ? page : '1') + 1}`
                  );
                }}
                color="primary"
              >
                Next page
              </Button>
            )}
          </div>
          <div className="w-full grid mb-12 grid-cols-1 md:grid-cols-3 gap-6">
            {result.results.map((data, index) => (
              <Card key={index} className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-md">{data.name}</p>
                    <p className="text-small text-default-500">
                      {data.episode}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody className="block">
                  <Chip className="mr-2 mb-2">{data.air_date}</Chip>
                  <Chip color="primary" className="mr-2 mb-2">
                    Number of characters: {data.characters.length}
                  </Chip>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Episodes;
