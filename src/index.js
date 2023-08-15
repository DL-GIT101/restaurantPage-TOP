import  navbar from './navbar';
import icon from './img/leaf.svg';
import footer from './footer';
import aboutPage from './about';
import restaurantView from './img/restaurant-view.jpg';
import testimony1 from './img/testimony-1.jpg';
import testimony2 from './img/testimony-2.jpg';
import testimony3 from './img/testimony-3.jpg';
import './style.css';

const createContent =  () => {
    const content = document.createElement('div');
    content.setAttribute("id","content");
    document.body.appendChild(content);
}

const activeTab = (index) => {
    const tabs = document.querySelectorAll('nav > ul > li');
    for (let i = 0; i < tabs.length; i++) {
        if(i === index){
            tabs[i].classList.add("active");
        }else{
            tabs[i].classList.remove("active");
        }
    }
}

const eraseContent = () => {
    const content = document.querySelector('#content');
     let lastChild = content.lastElementChild;
        while(lastChild){
            content.removeChild(lastChild);
            lastChild = content.lastElementChild;
        }
}

const testimonyArray = [
    {
        comment:'"Superb Menu"',
        imgSrc: testimony1
    },
    {
        comment:'"You can taste freshness"',
        imgSrc: testimony2
    },
    {
        comment:'"Be one with nature"',
        imgSrc: testimony3
    }
];

const initialLoad = () => {
    navbar(icon);
    activeTab(0);
    createContent();
    aboutPage(restaurantView,testimonyArray);
    footer();
}

initialLoad();