import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Button from '@mui/material/Button';
import routes from '@/routes';

export default
function App() {
  const routing = useRoutes(routes);
  return (
    <BrowserRouter>
      <HelmetProvider>{routing}</HelmetProvider>
    </BrowserRouter>
  );
}
