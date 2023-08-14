import React from 'react';

// import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
// import { login } from 'redux/slices/auth';
// import { setThemeMode } from 'redux/slices/settings';

const Home: React.FC = () => {
  // const {
  //   auth: { accessToken, isLoading },
  //   // settings: { themeMode },
  // } = useCustomSelector((state) => state);
  // const dispatch = useCustomDispatch();

  // console.log(accessToken);

  // const handleLogin = (): void => {
  //   dispatch(
  //     login({
  //       email: 'eve.holt@reqres.in',
  //       password: 'cityslicka',
  //     })
  //   );
  // };

  // const handleChangeTheme = (): void => {
  //   dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  // };

  return <div className="border border-gray-900">test</div>;
};

export default Home;
