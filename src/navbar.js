const navMake = () => {
    const nav = document.createElement('nav');
//logo
    const logo = document.createElement('div');
    logo.className = "logo";
    //name
    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = "The Green Lifestyle";
    //icon
    const icon = document.createElement('object');
    icon.setAttribute("type", "image/svg+xml");
    icon.setAttribute("data", "../src/img/leaf.svg");
    icon.className = "icon";
    logo.append(restaurantName,icon);
//tabs
    const tabs = document.createElement('ul');
    const tabsArray = ["About", "Menu", "Contact"];
    tabsArray.forEach(tab => {
        const li = document.createElement('li');
        li.innerHTML = tab;
        li.setAttribute("id", tab.toLocaleLowerCase());
        tabs.appendChild(li);
    });

    nav.append(logo,tabs);
    return nav;
}

const navbar = () => {
    const body = document.querySelector("body");
    const nav = navMake();
    body.appendChild(nav);
}

export default navbar;