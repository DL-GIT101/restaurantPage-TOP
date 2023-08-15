const makeMenu = (items) => {
    const menu = document.createElement('div');
    menu.className = "menu";
    const para = document.createElement('p');
    para.innerHTML = "Menu";
    menu.append(para);
    items.forEach(item => {
        const card = document.createElement('div');

        const pic = document.createElement('img');
        pic.setAttribute("src", item.src);
        pic.setAttribute("alt", item.name);

        const dishName = document.createElement('p');
        dishName.innerHTML = item.name;

        card.append(pic,dishName);
        menu.appendChild(card);
    });

 
    return menu;
}


const menuPage = (arr) => {
    const content = document.querySelector('#content');
    const menu = makeMenu(arr);

    content.append(menu);
}

export default menuPage;