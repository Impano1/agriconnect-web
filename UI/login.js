// Get reference to the login form and login button
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');

// Add click event listener to the login button
loginBtn.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to dashboard.html
    window.location.href = 'dashboard.html';
});