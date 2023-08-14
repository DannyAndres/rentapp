import React from 'react';

import { NextUIProvider } from '@nextui-org/react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import AppRouter from 'router';

import store, { persistor } from 'redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NextUIProvider>
          <AppRouter />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
