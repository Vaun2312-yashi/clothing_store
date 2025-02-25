document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation rules
    if (username === "") {
        alert("Username is required!");
        return;
    }
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address!");
        return;
    }
    if (password === "" || password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    // If validation passes, submit the form
    fetch('php/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});