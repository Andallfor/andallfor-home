import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './Navigation.tsx';

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

const navRoot = createRoot(document.getElementById('navigation-hook')!);
navRoot.render(
  <Navigation></Navigation>
);