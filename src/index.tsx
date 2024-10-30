import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

async function main() {
  createRoot(document.getElementById('root')!)
    .render(
      <StrictMode>
        <span>1234</span>
      </StrictMode>,
    );
}

main();
