import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import GlobalStyled from './assets/styles/globalStyled';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
