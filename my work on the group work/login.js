function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically make an API call to your backend
    console.log('Login attempt:', { email });
    
    // For demo purposes, simulate successful login
    alert('Login successful!');
    window.location.href = 'index.html';
    return false;
}

function handleGoogleLogin() {
    // This would be replaced with actual Google OAuth implementation
    alert('Google login functionality would be implemented here');
}
