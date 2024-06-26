document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match';
    } else {
        // Perform registration process here (e.g., send data to server)
        message.textContent = 'Registration successful for ' + username;
        // You may redirect the user to another page after successful registration
        // window.location.href = 'success.html';
    }
});