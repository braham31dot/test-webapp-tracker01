// themeToggle.js - Theme toggle logic
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
} else {
    body.classList.add('light-theme'); // Default to light theme
}

function toggleTheme() {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
}

// Add a button to toggle theme
const themeButton = document.createElement('button');
themeButton.textContent = 'Toggle Theme';
themeButton.addEventListener('click', toggleTheme);
document.body.appendChild(themeButton);