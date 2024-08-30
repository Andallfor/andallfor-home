import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './Navigation.tsx';
import LandingPage from './LandingPage.tsx';
import Information from './Information.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(
  <>
    <Navigation></Navigation>
    <LandingPage></LandingPage>
    <div id="information-scroll-anchor" className='h-16'></div>
    <Information></Information>
  </>
);