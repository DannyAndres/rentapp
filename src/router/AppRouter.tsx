import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';

import { useCustomSelector } from 'hooks/redux';

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
      <Outlet />
    </main>
  );
};

const AppRouter: React.FC = () => {
  // second route
  // <Route element={<Login/>}/>

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
