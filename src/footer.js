const makeFooter = () => {
    const footer = document.createElement('div');
    footer.innerHTML = "DL-GIT101";
    footer.className = "footer";

    return footer;
}

const footer = () => {
    const body = document.querySelector("body");
    const foot = makeFooter();
    body.appendChild(foot);
}

export default footer;