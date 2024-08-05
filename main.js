// Cek status login ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html'; // Jika tidak login, arahkan ke halaman login
    }
});