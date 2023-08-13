const makeBigImage = () => {
    const image  = document.createElement('img');
    image.setAttribute("src", "../src/img/restaurant-view.jpg");
    image.setAttribute("alt","Restaurant View");

    return image;
}

const aboutPage = () => {
    const content = document.querySelector('#content');
    const bigImage = makeBigImage();
    content.append(bigImage);
}

export default aboutPage;