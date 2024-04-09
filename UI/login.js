 const loginForm = document.getElementById('loginForm');

 loginForm.addEventListener('submit', function(event) {
     event.preventDefault();

     const email = document.getElementById('loginEmail').value;
     const password = document.getElementById('loginPassword').value;

     if (email === 'lechretien200@gmail.com' && password === '12345') {
         localStorage.setItem('userRole', 'admin');
         window.location.href = 'dashboard.html';
     } else {
        alert('Invalid email or password.');
    }
 });


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const savedEmail = localStorage.getItem('userEmail');
    const savedRole = localStorage.getItem('userRole');

    if (email === savedEmail && password === '12345') {
        if (savedRole === 'admin') {
            window.location.href = 'dashboard.html';
        } else {
            window.location.href = 'soilsensor.html';
        }
    } else {
        alert('Invalid email or password.');
    }
});

