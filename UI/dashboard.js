document.addEventListener('DOMContentLoaded', function() {
    const userEmail = localStorage.getItem('userEmail');
    const userRole = localStorage.getItem('userRole');

    if (userEmail && userRole === 'admin') {
        
        console.log('Authorized user:', userEmail);
    } else {
        
        alert('You are not authorized to access the dashboard.');
        window.location.href = 'login.html';
    }
});


const logoutBtn = document.getElementById('logoutBtn');


logoutBtn.addEventListener('click', function() {
    
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    window.location.href = 'login.html';
});
