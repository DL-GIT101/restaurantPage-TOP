const makeBigImage = () => {
    const image  = document.createElement('img');
    image.setAttribute("src", "../src/img/restaurant-view.jpg");
    image.setAttribute("alt","Restaurant View");
    image.className = "view";

    return image;
}

const testimonyArray = [
    {
        comment:'"Superb Menu"',
        imgSrc:"../src/img/testimony-1.jpg"
    },
    {
        comment:'"You can taste freshness"',
        imgSrc:"../src/img/testimony-2.jpg"
    },
    {
        comment:'"Be one with nature"',
        imgSrc:"../src/img/testimony-3.jpg"
    }
];

const makeTestimonyCard = (comment,source) => {
    const card = document.createElement('div');
    card.className = "card";

    const commentP = document.createElement('p');
    commentP.innerHTML = comment;

    const person = document.createElement('img');
    person.setAttribute("src", source);
    person.setAttribute("alt", "Person");

    card.append(commentP,person);

    return card;
}

const aboutPage = () => {
    const content = document.querySelector('#content');
    const bigImage = makeBigImage();

    const testimonies = document.createElement('div');
    testimonies.className = "testimonies";

    testimonyArray.forEach(testimony => {
        const card = makeTestimonyCard(testimony.comment, testimony.imgSrc);
        testimonies.appendChild(card);
    });

    content.append(bigImage,testimonies);
}

export default aboutPage;