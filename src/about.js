const makeBigImage = (img) => {
    const image  = document.createElement('img');
    image.setAttribute("src", img);
    image.setAttribute("alt","Restaurant View");
    image.className = "view";

    return image;
}

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

const makeAbout = () => {
    const about = document.createElement('div');
    about.className = "about";

    const para = document.createElement('p');
    para.innerHTML = '"Serving you the gifts from Mother Nature combined with skills from our talented cooks bringing you the freshness into your taste buds"';

    about.appendChild(para);

    return about;
}

const aboutPage = (view,testimonyArray) => {
    const content = document.querySelector('#content');
    const bigImage = makeBigImage(view);

    const about = makeAbout();

    const testimonies = document.createElement('div');
    testimonies.className = "testimonies";

    testimonyArray.forEach(testimony => {
        const card = makeTestimonyCard(testimony.comment, testimony.imgSrc);
        testimonies.appendChild(card);
    });


    content.append(bigImage,about,testimonies);
}

export default aboutPage;