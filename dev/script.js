const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
});
