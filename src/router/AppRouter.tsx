import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import Header from 'components/Header';

import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';

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
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-[1024px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const AppRouter: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
