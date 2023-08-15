import './style.css';
import  navbar from './navbar';
import icon from './img/leaf.svg';
import footer from './footer';
import aboutPage from './about';
import restaurantView from './img/restaurant-view.jpg';
import testimony1 from './img/testimony-1.jpg';
import testimony2 from './img/testimony-2.jpg';
import testimony3 from './img/testimony-3.jpg';
import menuPage from './menu';
import dish1 from './img/menu/bountiful_fire.jpg';
import dish2 from './img/menu/elves_ear.jpg';
import dish3 from './img/menu/red_string.jpg';
import dish4 from './img/menu/sunrise_chicken.jpg';
import contactPage from './contact';


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

const dishes = [
    {
        src: dish1,
        name: "Bountiful Fire"
    },
    {
        src: dish2,
        name: "Elves Ear"
    },
    {
        src: dish3,
        name: "Red String of Fate"
    },
    {
        src: dish4,
        name: "Sunrise Chicken"
    }
];

const initialLoad = () => {
    navbar(icon);
    activeTab(0);
    createContent();
    aboutPage(restaurantView,testimonyArray);
    footer();

    const tabs = document.querySelectorAll('nav > ul > li');
    tabs[0].addEventListener('click', () =>{
        eraseContent();
        activeTab(0);
        aboutPage(restaurantView,testimonyArray);
    })
    tabs[1].addEventListener('click', () =>{
        eraseContent();
        activeTab(1);
        menuPage(dishes);
    })
   tabs[2].addEventListener('click', () =>{
        eraseContent();
        activeTab(3);
        contactPage();
    })
}

initialLoad();