// script.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace with your EmailJS user ID and template ID
    const userId = 'your_emailjs_user_id';
    const templateId = 'your_emailjs_template_id';

    emailjs.sendForm(userId, templateId, {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then((response) => {
        console.log('Success!', response.status, response.text);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    });
});