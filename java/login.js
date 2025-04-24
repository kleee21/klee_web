document.addEventListener("DOMContentLoaded", function () {
    // Firebase Config (replace with your actual config from Firebase Console)
    const firebaseConfig = {
      apiKey: "AIzaSyCma1ih9TAjDcIk0rmnnB7djCtoxyox2J0",
      authDomain: "loginweb2122113.firebaseapp.com",
      projectId: "loginweb2122113",
      storageBucket: "loginweb2122113.appspot.com",
      messagingSenderId: "742053318572",
      appId: "1:742053318572:web:7c87faa7d96479e36f3409"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
  
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
  
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "🙈";
      } else {
        passwordInput.type = "password";
        button.textContent = "👁️";
      }
    }
  
    // Login
    function handleLogin(event) {
      event.preventDefault();
  
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
  
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login successful!");
          window.location.href = "main.html";
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    }
  
    // Signup
    function handleSignup(event) {
      event.preventDefault();
  
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
  
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Sign up successful!");
          document.getElementById("signupEmail").value = "";
          document.getElementById("signupPassword").value = "";
          showLoginForm();
        })
        .catch((error) => {
          alert("Sign up failed: " + error.message);
        });
    }
  
    // Reset Password
    function handleResetPassword(event) {
      event.preventDefault();
  
      const email = document.getElementById("resetEmail").value;
  
      auth.sendPasswordResetEmail(email)
        .then(() => {
          alert("Reset link sent! Check your email.");
          document.getElementById("resetEmail").value = "";
          closeResetPasswordPopup();
        })
        .catch((error) => {
          alert("Reset failed: " + error.message);
        });
    }
  
    // Show & Hide Forms
    function showSignUpForm() {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("signupForm").style.display = "flex";
    }
  
    function showLoginForm() {
      document.getElementById("signupForm").style.display = "none";
      document.getElementById("loginForm").style.display = "flex";
    }
  
    function showResetPasswordPopup() {
      const popup = document.getElementById("resetPasswordPopup");
      if (popup) {
        popup.style.display = "flex";
        setTimeout(() => {
          popup.style.opacity = 1;
          popup.style.visibility = "visible";
        }, 10);
      }
    }
  
    function closeResetPasswordPopup() {
      const popup = document.getElementById("resetPasswordPopup");
      if (popup) {
        popup.style.opacity = 0;
        popup.style.visibility = "hidden";
        setTimeout(() => {
          popup.style.display = "none";
        }, 300);
      }
    }
  
    // Attach Events
    document.getElementById("toggleLoginPassword").addEventListener("click", togglePasswordVisibility);
    document.getElementById("toggleSignupPassword").addEventListener("click", togglePasswordVisibility);
    document.getElementById("toggleResetPassword").addEventListener("click", togglePasswordVisibility);
  
    document.getElementById("loginFormAction").addEventListener("submit", handleLogin);
    document.getElementById("signupFormAction").addEventListener("submit", handleSignup);
    document.getElementById("resetPasswordFormAction").addEventListener("submit", handleResetPassword);
  
    document.getElementById("signUpLink").addEventListener("click", showSignUpForm);
    document.getElementById("loginLink").addEventListener("click", showLoginForm);
    document.getElementById("forgotPasswordLink").addEventListener("click", showResetPasswordPopup);
    document.getElementById("closeResetPasswordPopupBtn").addEventListener("click", closeResetPasswordPopup);
  });
