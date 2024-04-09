const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('role').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userRole', role);

    alert('Sign up successful! Please login.');
    window.location.href = 'login.html';
});

