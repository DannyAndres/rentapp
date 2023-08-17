import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useCustomSelector } from 'hooks/redux';

import Welcome from 'pages/Welcome';
import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Characters from 'pages/Characters';
import Locations from 'pages/Locations';
import Episodes from 'pages/Episodes';

interface MiddlewareConfig {
  access: string;
}

interface MiddlewareProps {
  children: React.ReactNode;
  config: MiddlewareConfig;
}

interface Route {
  path?: string;
  element: React.ReactElement;
  children?: Route[];
}

export const MiddlewareRoute: React.FC<MiddlewareProps> = ({
  children,
  config,
}) => {
  const {
    auth: { authenticated },
  } = useCustomSelector((state) => state);

  const location = useLocation().pathname;

  switch (config.access) {
    case 'auth':
      return authenticated ? (
        children
      ) : (
        <Navigate to={'/login'} state={{ from: location }} replace />
      );
    case 'non-auth':
      return !authenticated ? (
        children
      ) : (
        <Navigate to={'/home'} state={{ from: location }} replace />
      );
    default:
      return children;
  }
};

const routes = (root: React.ReactElement): Route[] => {
  return [
    {
      element: root,
      children: [
        {
          path: '/',
          element: <Welcome />,
        },
        {
          path: '/login',
          element: (
            <MiddlewareRoute
              config={{
                access: 'non-auth',
              }}
            >
              <LogIn />
            </MiddlewareRoute>
          ),
        },
        {
          path: '/register',
          element: (
            <MiddlewareRoute
              config={{
                access: 'non-auth',
              }}
            >
              <SignUp />
            </MiddlewareRoute>
          ),
        },
        {
          path: '/home',
          element: (
            <MiddlewareRoute
              config={{
                access: 'auth',
              }}
            >
              <Home />
            </MiddlewareRoute>
          ),
        },
        {
          path: '/character',
          element: (
            <MiddlewareRoute
              config={{
                access: 'auth',
              }}
            >
              <Characters />
            </MiddlewareRoute>
          ),
        },
        {
          path: '/locations',
          element: (
            <MiddlewareRoute
              config={{
                access: 'auth',
              }}
            >
              <Locations />
            </MiddlewareRoute>
          ),
        },
        {
          path: '/episodes',
          element: (
            <MiddlewareRoute
              config={{
                access: 'auth',
              }}
            >
              <Episodes />
            </MiddlewareRoute>
          ),
        },
      ],
    },
  ];
};

export default routes;
