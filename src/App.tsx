import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Button from '@mui/material/Button';
import routes from '@/routes';

export
function AppRoutes() {
  const routing = useRoutes(routes);
  return (
    <HelmetProvider>{routing}</HelmetProvider>
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
