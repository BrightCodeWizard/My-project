// Initialize Google Map
function initMap() {
    // Paris coordinates
    const paris = { lat: 48.8566, lng: 2.3522 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: paris,
    });

    // Add marker for Paris
    const marker = new google.maps.Marker({
        position: paris,
        map: map,
        title: 'Paris'
    });
}

// Initialize map when the page loads
window.onload = initMap;

// Toggle password visibility
function togglePasswordVisibility(icon) {
    const input = icon.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Form toggle functionality with animation
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm.style.display === 'none') {
        signupForm.style.opacity = '0';
        setTimeout(() => {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            setTimeout(() => {
                loginForm.style.opacity = '1';
            }, 50);
        }, 200);
    } else {
        loginForm.style.opacity = '0';
        setTimeout(() => {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            setTimeout(() => {
                signupForm.style.opacity = '1';
            }, 50);
        }, 200);
    }
}

// Form validation helpers
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    const errorDiv = element.parentElement.parentElement.querySelector('.form-error') || document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
    if (!element.parentElement.parentElement.querySelector('.form-error')) {
        element.parentElement.parentElement.appendChild(errorDiv);
    }
}

function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    const successDiv = element.parentElement.parentElement.querySelector('.form-success') || document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i>${message}`;
    if (!element.parentElement.parentElement.querySelector('.form-success')) {
        element.parentElement.parentElement.appendChild(successDiv);
    }
}

function clearError(elementId) {
    const element = document.getElementById(elementId);
    const errorDiv = element.parentElement.parentElement.querySelector('.form-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function clearSuccess(elementId) {
    const element = document.getElementById(elementId);
    const successDiv = element.parentElement.parentElement.querySelector('.form-success');
    if (successDiv) {
        successDiv.remove();
    }
}

// Handle login submission
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    let isValid = true;

    // Clear previous errors
    clearError('username');
    clearError('password');

    // Validate username
    if (!username) {
        showError('username', 'Username is required');
        isValid = false;
    }

    // Validate password
    if (!password) {
        showError('password', 'Password is required');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically make an API call to your backend
        console.log('Login attempt:', { username, remember });
        
        // Simulate API call
        setTimeout(() => {
            showSuccess('password', 'Login successful!');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }, 500);
    }

    return false;
}

// Handle signup submission
function handleSignup(event) {
    event.preventDefault();
    
    const username = document.getElementById('newUsername').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;

    // Clear previous errors
    clearError('newUsername');
    clearError('email');
    clearError('newPassword');
    clearError('confirmPassword');

    // Validate username
    if (!username) {
        showError('newUsername', 'Username is required');
        isValid = false;
    } else if (username.length < 3) {
        showError('newUsername', 'Username must be at least 3 characters long');
        isValid = false;
    }

    // Validate email
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (!password) {
        showError('newPassword', 'Password is required');
        isValid = false;
    } else if (password.length < 8) {
        showError('newPassword', 'Password must be at least 8 characters long');
        isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        showError('newPassword', 'Password must contain uppercase, lowercase, and numbers');
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
        showError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically make an API call to your backend
        console.log('Signup attempt:', { username, email });
        
        // Simulate API call
        setTimeout(() => {
            showSuccess('confirmPassword', 'Account created successfully!');
            setTimeout(() => {
                toggleForms();
            }, 1500);
        }, 500);
    }

    return false;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add transition styles
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.style.transition = 'opacity 0.2s ease-in-out';
    signupForm.style.transition = 'opacity 0.2s ease-in-out';
    loginForm.style.opacity = '1';
    signupForm.style.opacity = '0';
});
