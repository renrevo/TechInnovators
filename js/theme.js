let theme__dark = localStorage.getItem('theme__dark');

const theme__darkToggle = document.querySelector('#dark-mode-toggle');

const enabletheme__dark = () => {
    document.body.classList.add('theme__dark');
    document.body.classList.remove('theme__light');
    localStorage.setItem('theme__dark', 'enabled');
}

const disabletheme__dark = () => {
    document.body.classList.remove('theme__dark');
    document.body.classList.add('theme__light');
    localStorage.setItem('theme__dark', null);
};

// If the user already visited and enabled theme__dark then we start with dark-mode on
if (theme__dark === 'enabled') {
    enabletheme__dark();
}

theme__darkToggle.addEventListener("click", () => {

    theme__dark = localStorage.getItem('theme__dark');

    if (theme__dark !== 'enabled') {
        enabletheme__dark();
    } else {
        disabletheme__dark();
    }

});