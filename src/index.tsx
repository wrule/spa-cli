import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

async function main() {
  createRoot(document.getElementById('root')!)
    .render(<App />);
    // .render(
    //   <StrictMode>
    //     <App />
    //   </StrictMode>,
    // );
}

main();
