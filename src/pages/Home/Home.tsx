import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from '@nextui-org/react';

const Home: React.FC = () => {
  const navigate = useNavigate();

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
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Characters</p>
              <p className="text-small text-default-500">
                https://rickandmortyapi.com/api/character
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Explore the colorful universe of Rick and Morty`s characters with
              a click of a button!.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              data-testid="home-characters"
              onClick={() => {
                navigate('/character');
              }}
              color="primary"
            >
              Go to Characters
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Locations</p>
              <p className="text-small text-default-500">
                https://rickandmortyapi.com/api/location
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Discover intriguing locations from the wacky world of Rick and
              Morty`s show with a single click!.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              data-testid="home-locations"
              onClick={() => {
                navigate('/locations');
              }}
              color="primary"
            >
              Go to Locations
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Episodes</p>
              <p className="text-small text-default-500">
                https://rickandmortyapi.com/api/episodes
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Embark on episodic adventures through the wild dimensions of Rick
              and Morty`s show with just one click!.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              data-testid="home-episodes"
              onClick={() => {
                navigate('/episodes');
              }}
              color="primary"
            >
              Go to Episodes
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Home;
