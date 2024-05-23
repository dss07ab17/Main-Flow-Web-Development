document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
            formMessage.style.display = 'block';
            return;
        }

        // You can add your form submission logic here.
        // For example, send the form data to a server using AJAX.

        formMessage.textContent = 'Thank you for your message, ' + name + '!';
        formMessage.style.color = 'green';
        formMessage.style.display = 'block';

        // Optionally reset the form
        form.reset();
    });
});
