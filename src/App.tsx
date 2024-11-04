import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import routes from '@/routes';
import { Button } from '@mui/material';
import { useMemo, useState } from 'react';

export
function AppRoutes() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const routing = useRoutes(routes);

  const theme = useMemo(() => createTheme({
    palette: { mode },
  }), [mode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <HelmetProvider>{routing}</HelmetProvider>
      </ThemeProvider>
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
