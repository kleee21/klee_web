document.addEventListener("DOMContentLoaded", function () {
  // Firebase Config (replace with your actual config from Firebase Console)
  const firebaseConfig = {
      apiKey: "AIzaSyCma1ih9TAjDcIk0rmnnB7djCtoxyox2J0", // Replace with your actual Firebase API Key
      authDomain: "loginweb2122113.firebaseapp.com",
      projectId: "loginweb2122113",
      storageBucket: "loginweb2122113.appspot.com",
      messagingSenderId: "742053318572",
      appId: "1:742053318572:web:7c87faa7d96479e36f3409"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Function to show custom alert modal
  function showAlert(title, message) {
      const modal = document.getElementById("customAlertModal");
      document.getElementById("customAlertTitle").textContent = title;
      document.getElementById("customAlertMessage").textContent = message;
      modal.style.display = "flex";
      setTimeout(() => {
          modal.style.opacity = 1;
      }, 10);
  }

  // Function to close custom alert modal
  function closeAlert() {
      const modal = document.getElementById("customAlertModal");
      modal.style.opacity = 0;
      setTimeout(() => {
          modal.style.display = "none";
      }, 300);
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
              showAlert("Success!", "Login successful!");
              // Redirect after a short delay to allow user to see the success message
              setTimeout(() => {
                  window.location.href = "main.html";
              }, 1500);
          })
          .catch((error) => {
              showAlert("Login Failed", "Error: " + error.message);
          });
  }

  // Signup
  function handleSignup(event) {
      event.preventDefault();

      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      auth.createUserWithEmailAndPassword(email, password)
          .then(() => {
              showAlert("Success!", "Sign up successful! Please log in.");
              document.getElementById("signupEmail").value = "";
              document.getElementById("signupPassword").value = "";
              // Automatically switch back to login form after signup
              setTimeout(showLoginForm, 1500);
          })
          .catch((error) => {
              showAlert("Sign Up Failed", "Error: " + error.message);
          });
  }

  // Reset Password
  function handleResetPassword(event) {
      event.preventDefault();

      const email = document.getElementById("resetEmail").value;

      auth.sendPasswordResetEmail(email)
          .then(() => {
              showAlert("Password Reset", "Reset link sent! Check your email.");
              document.getElementById("resetEmail").value = "";
              document.getElementById("resetNewPassword").value = ""; // Clear new password field as it's not used here
              setTimeout(closeResetPasswordPopup, 1500);
          })
          .catch((error) => {
              showAlert("Reset Failed", "Error: " + error.message);
          });
  }

  // Show & Hide Forms with animations
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const resetPasswordPopup = document.getElementById("resetPasswordPopup");

  function showSignUpForm() {
      loginForm.classList.remove('scale-100', 'opacity-100', 'flex');
      loginForm.classList.add('scale-90', 'opacity-0', 'hidden');
      setTimeout(() => {
          signupForm.classList.remove('scale-90', 'opacity-0', 'hidden');
          signupForm.classList.add('scale-100', 'opacity-100', 'flex');
      }, 300); // Delay to allow login form transition out
  }

  function showLoginForm() {
      signupForm.classList.remove('scale-100', 'opacity-100', 'flex');
      signupForm.classList.add('scale-90', 'opacity-0', 'hidden');
      setTimeout(() => {
          loginForm.classList.remove('scale-90', 'opacity-0', 'hidden');
          loginForm.classList.add('scale-100', 'opacity-100', 'flex');
      }, 300); // Delay to allow signup form transition out
  }

  function showResetPasswordPopup() {
      resetPasswordPopup.style.display = "flex";
      setTimeout(() => {
          resetPasswordPopup.style.opacity = 1;
      }, 10);
  }

  function closeResetPasswordPopup() {
      resetPasswordPopup.style.opacity = 0;
      setTimeout(() => {
          resetPasswordPopup.style.display = "none";
      }, 300);
  }

  // Particle generation for background animation
  const animatedBackground = document.querySelector('.animated-background');
  const numParticles = 50;

  for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 10 + 5; // Size between 5px and 15px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`; // Duration between 10s and 30s
      particle.style.animationDelay = `${Math.random() * 10}s`; // Delay up to 10s
      animatedBackground.appendChild(particle);
  }

  // Keyframes for particle movement (added dynamically for random directions)
  const styleSheet = document.styleSheets[0];
  const moveParticlesKeyframes = `
      @keyframes moveParticles {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          25% { opacity: 0.5; }
          50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(${Math.random() * 0.5 + 0.8}); }
          75% { opacity: 0.5; }
          100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
      }
  `;
  styleSheet.insertRule(moveParticlesKeyframes, styleSheet.cssRules.length);


  // Attach Events
  document.getElementById("toggleLoginPassword").addEventListener("click", togglePasswordVisibility);
  document.getElementById("toggleSignupPassword").addEventListener("click", togglePasswordVisibility);
  document.getElementById("toggleResetPassword").addEventListener("click", togglePasswordVisibility);

  document.getElementById("loginFormAction").addEventListener("submit", handleLogin);
  document.getElementById("signupFormAction").addEventListener("submit", handleSignup);
  document.getElementById("resetPasswordFormAction").addEventListener("submit", handleResetPassword);

  document.getElementById("signUpLink").addEventListener("click", (e) => {
      e.preventDefault();
      showSignUpForm();
  });
  document.getElementById("loginLink").addEventListener("click", (e) => {
      e.preventDefault();
      showLoginForm();
  });
  document.getElementById("forgotPasswordLink").addEventListener("click", (e) => {
      e.preventDefault();
      showResetPasswordPopup();
  });
  document.getElementById("customAlertCloseBtn").addEventListener("click", closeAlert);
  document.getElementById("closeResetPasswordPopupBtn").addEventListener("click", closeResetPasswordPopup);
});
