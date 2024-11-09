// Function to toggle password visibility for Login, Signup, and Reset forms
function togglePasswordVisibility(event) {
    const button = event.target;
    let passwordInput;

    if (button.id === "toggleLoginPassword") {
        passwordInput = document.getElementById("loginPassword");
    } else if (button.id === "toggleSignupPassword") {
        passwordInput = document.getElementById("signupPassword");
    } else if (button.id === "toggleResetPassword") {
        passwordInput = document.getElementById("resetNewPassword");
    }

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "🙈";  // Change to an eye-slash emoji or use any text
    } else {
        passwordInput.type = "password";
        button.textContent = "👁️";  // Change back to eye icon
    }
}

// Function to handle the Login process
function handleLogin(event) {
    event.preventDefault();

    const emailInput = document.getElementById("loginEmail").value;
    const passwordInput = document.getElementById("loginPassword").value;

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (emailInput === storedEmail && passwordInput === storedPassword) {
        alert("Login successful!");
        window.location.href = "main.html"; // Adjust the path if necessary
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Function to handle the Sign-up process
function handleSignup(event) {
    event.preventDefault();

    const emailInput = document.getElementById("signupEmail").value;
    const passwordInput = document.getElementById("signupPassword").value;

    if (emailInput && passwordInput) {
        // Save new email and password to localStorage
        localStorage.setItem("email", emailInput);
        localStorage.setItem("password", passwordInput);

        alert("Sign up successful! You can now log in with your new credentials.");
        document.getElementById("signupEmail").value = "";
        document.getElementById("signupPassword").value = "";
    } else {
        alert("Please fill in both email and password fields.");
    }
}

// Function to handle the Reset Password process
function handleResetPassword(event) {
    event.preventDefault();

    const emailInput = document.getElementById("resetEmail").value;
    const newPasswordInput = document.getElementById("resetNewPassword").value;

    // Example validation (you may want to add more robust checks here)
    if (emailInput && newPasswordInput) {
        // Update password in localStorage
        localStorage.setItem("email", emailInput);
        localStorage.setItem("password", newPasswordInput);

        alert("Password reset successful!");
        document.getElementById("resetEmail").value = "";
        document.getElementById("resetNewPassword").value = "";

        // Optionally, close the popup after successful reset
        closeResetPasswordPopup();
    } else {
        alert("Please enter both email and new password.");
    }
}

// Function to show the Reset Password popup
function showResetPasswordPopup() {
    const popup = document.getElementById("resetPasswordPopup");
    if (popup) {
        popup.style.display = "flex"; // Show the popup
    }
}

// Function to close the Reset Password popup
function closeResetPasswordPopup() {
    const popup = document.getElementById("resetPasswordPopup");
    if (popup) {
        popup.style.display = "none"; // Hide the popup
    }
}

// Function to show the Sign-up form
function showSignUpForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "flex";
}

// Function to show the Login form from the Sign-up form
function showLoginForm() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";
}

// Add event listeners for password visibility toggle buttons
document.getElementById("toggleLoginPassword").addEventListener("click", togglePasswordVisibility);
document.getElementById("toggleSignupPassword").addEventListener("click", togglePasswordVisibility);
document.getElementById("toggleResetPassword").addEventListener("click", togglePasswordVisibility);

// Add event listeners for form submission
document.getElementById("loginFormAction").addEventListener("submit", handleLogin);
document.getElementById("signupFormAction").addEventListener("submit", handleSignup);
document.getElementById("resetPasswordFormAction").addEventListener("submit", handleResetPassword);

// Add event listeners for switching forms
document.getElementById("signUpLink").addEventListener("click", showSignUpForm);
document.getElementById("loginLink").addEventListener("click", showLoginForm);
document.getElementById("forgotPasswordLink").addEventListener("click", showResetPasswordPopup);
document.getElementById("loginLinkFromReset").addEventListener("click", showLoginForm);

// Add event listener to close Reset Password popup
document.getElementById("closeResetPasswordPopupBtn").addEventListener("click", closeResetPasswordPopup);
