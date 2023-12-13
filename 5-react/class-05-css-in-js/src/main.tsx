import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './pages/App.tsx';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './styles/theme.ts';
import { GlobalStyle } from './styles/Reset.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
);
