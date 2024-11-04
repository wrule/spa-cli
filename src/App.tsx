import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import routes from '@/routes';
import { Button } from '@mui/material';
import { useMemo, useState } from 'react';
import ColorModeContext from './context/colorMode';

export
function AppRoutes() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({
    palette: { mode },
  }), [mode]);

  const routing = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>{routing}</HelmetProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}

export default
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
