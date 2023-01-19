import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import { theme } from './theme';
import { store, persistor } from './store';

import GlobalStyled from './assets/styles/globalStyled';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <Routes />
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
