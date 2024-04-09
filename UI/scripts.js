document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('header nav a');

    if (!form || !fullName || !email || !phone || !subject || !message || !menuIcon || !navbar || !navLinks) {
        console.error('One or more required elements not found!');
        return; 
    }

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    const sections = document.querySelectorAll('.contact');

    function sendEmail() {

        if (!fullName.value || !email.value || !phone.value || !subject.value || !message.value) {
            console.error('One or more required form fields are empty!');
            return;
        }

        const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "lechretien200@gmail.com",
            Password : "27AF7A3092BE6D4094A136E176A013941D1A",
            To : 'lechretien200@gmail.com',
            From : "lechretien200@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        })
        .then(function(message) {
            if (message === "OK") {
                Swal.fire({
                    title: "Thank you!",
                    text: "Your message has been sent!",
                    icon: "success"
                });
            } else {
                console.error('Failed to send email:', message);
            }
        })
        .catch(function(error) {
            console.error('Error occurred while sending email:', error);
        });
    }

    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value === "") {
                item.classList.add("error");
                if (item.parentElement) {
                    item.parentElement.classList.add("error");
                }
            }
        }
    }

    function checkEmail() {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\. [a-z]{2,3})?$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");

        if (!email || !email.value.match(emailRegex) || !errorTxtEmail) {
            console.error("Email element or error message element not found or email format is invalid!");
            return;
        }

        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            if (email.parentElement) {
                email.parentElement.classList.add("error");
            }

            if (email.value.trim() !== "") {
                errorTxtEmail.innerText = "Email address is not valid";
            } else {
                errorTxtEmail.innerText = "Email address is required";
            }
        } else {
            email.classList.remove("error");
            if (email.parentElement) {
                email.parentElement.classList.remove("error");
            }
        }
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        checkInputs();

        if (!email.classList.contains("error") && !fullName.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
            sendEmail();

            form.reset();
            return false;
        }
    });

    window.addEventListener('scroll', function() {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 100;
            let id = sec.getAttribute('id');

            if (top >= offset) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            }
        });

        let header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
    });
});
