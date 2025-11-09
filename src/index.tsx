import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './Navigation.tsx';
import LandingPage from './LandingPage.tsx';
import Information from './Information.tsx';
import Footer from './Footer.tsx';
import Projects from './Projects.tsx';
import Contact from './Contact.tsx';

/*

npx tailwindcss -i ./src/index.css -o index.css --watch  
npm run dev

npm run deploy
after deploying go to github and add custom domain www.leozwang.org

*/

const root = createRoot(document.getElementById('root')!);
root.render(
    <>
        <Navigation></Navigation>
        <LandingPage></LandingPage>
        <div className='h-16'></div>
        <div id="about" className='h-16'></div>
        <Information></Information>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </>
);