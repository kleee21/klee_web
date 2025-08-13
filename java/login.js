document.addEventListener("DOMContentLoaded", function () {
    // Check if Firebase is loaded
    if (typeof firebase === 'undefined') {
        console.error('Firebase SDK not loaded');
        alert('Error: Firebase SDK not loaded. Please check your internet connection.');
        return;
    }

    // Firebase Config
    const firebaseConfig = {
        apiKey: "AIzaSyCma1ih9TAjDcIk0rmnnB7djCtoxyox2J0",
        authDomain: "loginweb2122113.firebaseapp.com",
        projectId: "loginweb2122113",
        storageBucket: "loginweb2122113.appspot.com",
        messagingSenderId: "742053318572",
        appId: "1:742053318572:web:7c87faa7d96479e36f3409"
    };

    // Initialize Firebase
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (error) {
        console.log('Firebase already initialized or error:', error);
    }
    
    const auth = firebase.auth();

    // Function to show custom alert modal
    function showAlert(title, message) {
        const modal = document.getElementById("customAlertModal");
        if (!modal) {
            alert(`${title}: ${message}`);
            return;
        }
        
        const titleEl = document.getElementById("customAlertTitle");
        const messageEl = document.getElementById("customAlertMessage");
        
        if (titleEl) titleEl.textContent = title;
        if (messageEl) messageEl.textContent = message;
        
        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    }

    // Function to close custom alert modal
    function closeAlert() {
        const modal = document.getElementById("customAlertModal");
        if (modal) {
            modal.style.opacity = 0;
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    }

    // Show/Hide Password
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

        if (passwordInput) {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                button.textContent = "🙈";
            } else {
                passwordInput.type = "password";
                button.textContent = "👁️";
            }
        }
    }

    // Login
    function handleLogin(event) {
        event.preventDefault();

        const emailInput = document.getElementById("loginEmail");
        const passwordInput = document.getElementById("loginPassword");
        
        if (!emailInput || !passwordInput) {
            showAlert("Error", "Form elements not found");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            showAlert("Error", "Please enter both email and password");
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                showAlert("Success!", "Login successful!");
                setTimeout(() => {
                    window.location.href = "main.html";
                }, 1500);
            })
            .catch((error) => {
                let errorMessage = error.message;
                if (error.code === 'auth/user-not-found') {
                    errorMessage = "No user found with this email";
                } else if (error.code === 'auth/wrong-password') {
                    errorMessage = "Incorrect password";
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = "Invalid email format";
                }
                showAlert("Login Failed", errorMessage);
            });
    }

    // Signup
    function handleSignup(event) {
        event.preventDefault();

        const emailInput = document.getElementById("signupEmail");
        const passwordInput = document.getElementById("signupPassword");
        
        if (!emailInput || !passwordInput) {
            showAlert("Error", "Form elements not found");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            showAlert("Error", "Please enter both email and password");
            return;
        }

        if (password.length < 6) {
            showAlert("Error", "Password must be at least 6 characters");
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                showAlert("Success!", "Sign up successful! Please log in.");
                emailInput.value = "";
                passwordInput.value = "";
                setTimeout(showLoginForm, 1500);
            })
            .catch((error) => {
                let errorMessage = error.message;
                if (error.code === 'auth/email-already-in-use') {
                    errorMessage = "This email is already registered";
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = "Invalid email format";
                } else if (error.code === 'auth/weak-password') {
                    errorMessage = "Password is too weak";
                }
                showAlert("Sign Up Failed", errorMessage);
            });
    }

    // Reset Password
    function handleResetPassword(event) {
        event.preventDefault();

        const emailInput = document.getElementById("resetEmail");
        if (!emailInput) {
            showAlert("Error", "Email field not found");
            return;
        }

        const email = emailInput.value.trim();
        
        if (!email) {
            showAlert("Error", "Please enter your email");
            return;
        }

        auth.sendPasswordResetEmail(email)
            .then(() => {
                showAlert("Password Reset", "Reset link sent! Check your email.");
                emailInput.value = "";
                setTimeout(closeResetPasswordPopup, 1500);
            })
            .catch((error) => {
                let errorMessage = error.message;
                if (error.code === 'auth/user-not-found') {
                    errorMessage = "No user found with this email";
                } else if (error.code === 'auth/invalid-email') {
                    errorMessage = "Invalid email format";
                }
                showAlert("Reset Failed", errorMessage);
            });
    }

    // Show & Hide Forms with animations
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const resetPasswordPopup = document.getElementById("resetPasswordPopup");

    function showSignUpForm() {
        if (!loginForm || !signupForm) return;
        
        loginForm.classList.remove('scale-100', 'opacity-100', 'flex');
        loginForm.classList.add('scale-90', 'opacity-0', 'hidden');
        
        setTimeout(() => {
            signupForm.classList.remove('scale-90', 'opacity-0', 'hidden');
            signupForm.classList.add('scale-100', 'opacity-100', 'flex');
        }, 300);
    }

    function showLoginForm() {
        if (!loginForm || !signupForm) return;
        
        signupForm.classList.remove('scale-100', 'opacity-100', 'flex');
        signupForm.classList.add('scale-90', 'opacity-0', 'hidden');
        
        setTimeout(() => {
            loginForm.classList.remove('scale-90', 'opacity-0', 'hidden');
            loginForm.classList.add('scale-100', 'opacity-100', 'flex');
        }, 300);
    }

    function showResetPasswordPopup() {
        if (!resetPasswordPopup) return;
        resetPasswordPopup.style.display = "flex";
        setTimeout(() => {
            resetPasswordPopup.style.opacity = 1;
        }, 10);
    }

    function closeResetPasswordPopup() {
        if (!resetPasswordPopup) return;
        resetPasswordPopup.style.opacity = 0;
        setTimeout(() => {
            resetPasswordPopup.style.display = "none";
        }, 300);
    }

    // Particle generation for background animation
    const animatedBackground = document.querySelector('.animated-background');
    if (animatedBackground) {
        const numParticles = 50;
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            animatedBackground.appendChild(particle);
        }

        // Add particle styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            .particle {
                position: absolute;
                background: rgba(59, 130, 246, 0.5);
                border-radius: 50%;
                animation: moveParticles 20s infinite linear;
                pointer-events: none;
            }
            
            @keyframes moveParticles {
                0% { transform: translate(0, 0) scale(1); opacity: 0; }
                25% { opacity: 0.5; }
                50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(${Math.random() * 0.5 + 0.8}); }
                75% { opacity: 0.5; }
                100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Attach Events
    function attachEvents() {
        const toggleLoginBtn = document.getElementById("toggleLoginPassword");
        const toggleSignupBtn = document.getElementById("toggleSignupPassword");
        const toggleResetBtn = document.getElementById("toggleResetPassword");
        
        if (toggleLoginBtn) toggleLoginBtn.addEventListener("click", togglePasswordVisibility);
        if (toggleSignupBtn) toggleSignupBtn.addEventListener("click", togglePasswordVisibility);
        if (toggleResetBtn) toggleResetBtn.addEventListener("click", togglePasswordVisibility);

        const loginFormAction = document.getElementById("loginFormAction");
        const signupFormAction = document.getElementById("signupFormAction");
        const resetPasswordFormAction = document.getElementById("resetPasswordFormAction");
        
        if (loginFormAction) loginFormAction.addEventListener("submit", handleLogin);
        if (signupFormAction) signupFormAction.addEventListener("submit", handleSignup);
        if (resetPasswordFormAction) resetPasswordFormAction.addEventListener("submit", handleResetPassword);

        const signUpLink = document.getElementById("signUpLink");
        const loginLink = document.getElementById("loginLink");
        const forgotPasswordLink = document.getElementById("forgotPasswordLink");
        
        if (signUpLink) signUpLink.addEventListener("click", (e) => {
            e.preventDefault();
            showSignUpForm();
        });
        
        if (loginLink) loginLink.addEventListener("click", (e) => {
            e.preventDefault();
            showLoginForm();
        });
        
        if (forgotPasswordLink) forgotPasswordLink.addEventListener("click", (e) => {
            e.preventDefault();
            showResetPasswordPopup();
        });

        const customAlertCloseBtn = document.getElementById("customAlertCloseBtn");
        if (customAlertCloseBtn) customAlertCloseBtn.addEventListener("click", closeAlert);

        const closeResetPasswordPopupBtn = document.getElementById("closeResetPasswordPopupBtn");
        if (closeResetPasswordPopupBtn) closeResetPasswordPopupBtn.addEventListener("click", closeResetPasswordPopup);
    }

    // Initialize everything
    attachEvents();
});
