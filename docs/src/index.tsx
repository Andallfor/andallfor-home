import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './Navigation.tsx';
import LandingPage from './LandingPage.tsx';
import Information from './Information.tsx';
import Footer from './Footer.tsx';
import Projects from './Projects.tsx';
import Contact from './Contact.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(
    <>
        <Navigation></Navigation>
        <LandingPage></LandingPage>
        <div className='h-16'></div>
        <div id="information-scroll-anchor" className='h-16'></div>
        <Information></Information>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </>
);