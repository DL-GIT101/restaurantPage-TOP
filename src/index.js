import  navbar from './navbar';
import icon from './img/leaf.svg';
import footer from './footer';
import aboutPage from './about';
import './style.css';

const createContent =  () => {
    const content = document.createElement('div');
    content.setAttribute("id","content");
    document.body.appendChild(content);
}

const initialLoad = () => {
    navbar(icon);
    createContent();
    aboutPage();
    footer();
}

initialLoad();