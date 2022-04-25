import React from 'react';
import App from './App';
import {render} from 'react-dom';
import {theme} from './theme/theme';
import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from "@mui/material";

render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <CssBaseline />
          <App/>
      </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);