import  navbar from './navbar';
import footer from './footer';
import aboutPage from './about';
import './style.css';

const createContent =  () => {
    const content = document.createElement('div');
    content.setAttribute("id","content");
    document.body.appendChild(content);
}

const initialLoad = () => {
    navbar();
    createContent();
    aboutPage();
    footer();
}

initialLoad();