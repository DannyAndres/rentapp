import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from 'components/Header';

import { useCustomSelector } from 'hooks/redux';

import routes from './Routes';

const Root: React.FC = () => {
  const {
    settings: { themeMode },
  } = useCustomSelector((state) => state);
  return (
    <main
      className={`${
        themeMode === 'dark' ? 'dark' : 'light'
      } text-foreground bg-background w-full min-h-[100vh]`}
    >
      <Header />
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-[90vw] md:max-w-[1024px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const AppRouter: React.FC = () => {
  const router = createBrowserRouter(routes(<Root />));

  return <RouterProvider router={router} />;
};

export default AppRouter;
