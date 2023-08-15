const makeContact = () => {
    const container = document.createElement('div');
    container.className = "contact";

    const title = document.createElement('h2');
    title.innerHTML = "Relax with Us";
    
    const info = document.createElement('div');

    const address = document.createElement('p');
    address.innerHTML = "123 Somewhere, Down, Elsewhere";

    const number = document.createElement('p');
    number.innerHTML = "098-7654-321";

    const email = document.createElement('p');
    email.innerHTML = "sendmail@hotmail.com";

    info.append(address,number,email);
    container.append(title,info);

    return container;
}

const contactPage = () => {
    const content = document.querySelector('#content');
    const page = makeContact();

    content.append(page);
}

export default contactPage;