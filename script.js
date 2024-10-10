// Example: Simple form validation (optional)
document.querySelector('form').addEventListener('submit', function(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill out both fields');
        event.preventDefault(); // Prevent form submission
    }
});
