const validUsername = 'dinsos';
const validPassword = '1234567';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    console.log('Username:', username); // Debugging: log username
    console.log('Password:', password); // Debugging: log password
    
    if (username === validUsername && password === validPassword) {
        console.log('Login successful'); // Debugging: log successful login
        window.location.href = 'index.html'; // Ganti dengan URL halaman utama Anda
    } else {
        console.log('Login failed'); // Debugging: log failed login
        errorMessage.textContent = 'Username atau password salah';
    }
});