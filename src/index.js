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

/* 
       <div class="about">
            <h2>Meals provided by nature</h2>
            <img src="../src/restaurant-view.jpg" alt="Restaurant View">
       </div>
        <div class="testimonies">
            <div class="card">
                <p>"Superb menu"</p>
                <img src="../src/testimony-1.jpg" alt="Person">
            </div>
            <div class="card">
                <p>"You can tase freshness"</p>
                <img src="../src/testimony-2.jpg" alt="Person">
            </div>
            <div class="card">
                <p>"Be one with nature"</p>
                <img src="../src/testimony-3.jpg" alt="Person">
            </div>
*/