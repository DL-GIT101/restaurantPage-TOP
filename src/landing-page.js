const navMake = () => {
    const nav = document.createElement('nav');
    //logo name
    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = "The Green Lifestyle";
    //tabs
    const tabs = document.createElement('ol');
    const tabsArray = ["Menu", "About", "Contact"];
    tabsArray.forEach(tab => {
        const li = document.createElement('li');
        li.innerHTML = tab;
        li.setAttribute("id", tab.toLocaleLowerCase());
        tabs.appendChild(li);
    });

    nav.append(restaurantName,tabs);
    return nav;
}

const landingPage = () => {
    const content = document.getElementById("content");
    const nav = navMake();
    content.appendChild(nav);
}

export default landingPage;