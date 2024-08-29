import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './Navigation.tsx';
import LandingPage from './LandingPage.tsx';
import Information from './Information.tsx';

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

const root = createRoot(document.getElementById('root')!);
root.render(
  <>
    <Navigation></Navigation>
    <LandingPage></LandingPage>
    <Information></Information>
  </>
);