// Select the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeToggle.checked = true;
}

// Add event listener to the theme toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
});
