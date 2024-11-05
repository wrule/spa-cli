import './wdyr';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { Button } from '@mui/material';

async function main() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

main();
