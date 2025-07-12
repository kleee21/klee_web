document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    // Add initial fade-in animation for the navbar on page load
    // We add and then immediately remove an opacity-0 class to trigger a CSS transition
    // Ensure that #navbar has `transition-opacity duration-700 ease-out` in its CSS or Tailwind classes for this to work.
    navbar.classList.add('opacity-0');
    setTimeout(() => {
        navbar.classList.remove('opacity-0');
    }, 100); // Small delay to ensure CSS registers initial state for transition

    // Navbar scroll effect (blurring)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // When scrolled down 50px
            navbar.classList.add("bg-gray-800", "bg-opacity-80", "backdrop-blur-md", "shadow-lg");
        } else {
            navbar.classList.remove("bg-gray-800", "bg-opacity-80", "backdrop-blur-md", "shadow-lg");
        }
    });

    // Mobile menu toggle and hamburger to X animation
    menuButton.addEventListener("click", () => {
        // Toggle the 'is-open' class for mobile menu animation (max-height, opacity)
        mobileMenu.classList.toggle("is-open");
        // Toggle the 'menu-open' class for hamburger icon animation (path transforms)
        menuButton.classList.toggle("menu-open");

        const mobileMenuItems = mobileMenu.querySelectorAll('a');

        if (mobileMenu.classList.contains("is-open")) {
            // If opening, ensure 'hidden' is removed immediately to allow transitions to start
            mobileMenu.classList.remove("hidden");

            // Staggered animation for menu items
            mobileMenuItems.forEach((item, index) => {
                // Remove existing opacity/transform classes to reset for animation
                item.classList.remove('opacity-0', 'translate-y-4');
                // Add base transition classes if not already present
                item.classList.add('transition-all', 'duration-300', 'ease-out');

                // Apply animation with staggered delay
                setTimeout(() => {
                    item.classList.add('opacity-100', 'translate-y-0');
                }, 50 * index); // Stagger by 50ms per item
            });

        } else {
            // If closing, reverse animation immediately for items, then add 'hidden' after menu transition
            mobileMenuItems.forEach((item) => {
                item.classList.remove('opacity-100', 'translate-y-0');
                item.classList.add('opacity-0', 'translate-y-4');
            });

            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 300); // This delay should match the CSS transition duration for max-height/opacity
        }
    });

  // Custom Alert Modal Functions
  function showAlert(title, message) {
      const modal = document.getElementById("customAlertModal");
      document.getElementById("customAlertTitle").textContent = title;
      document.getElementById("customAlertMessage").textContent = message;
      modal.style.display = "flex";
      setTimeout(() => {
          modal.style.opacity = 1;
      }, 10);
  }

  function closeAlert() {
      const modal = document.getElementById("customAlertModal");
      modal.style.opacity = 0;
      setTimeout(() => {
          modal.style.display = "none";
      }, 300);
  }

  document.getElementById("customAlertCloseBtn").addEventListener("click", closeAlert);


  // Animated background: Stars
  const animatedBackground = document.querySelector('.animated-background');
  const numStars = 100; // Number of stars

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 2 + 1; // Size between 1px and 3px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duration between 3s and 8s
      star.style.animationDelay = `${Math.random() * 5}s`; // Delay up to 5s
      animatedBackground.appendChild(star);
  }
});


      // Custom Alert Modal Functions
      function showAlert(title, message, iconHtml = '') {
        const modal = document.getElementById("customAlertModal");
        const customAlertIcon = document.getElementById("customAlertIcon"); // Get the new icon element
        const customAlertTitle = document.getElementById("customAlertTitle");
        const customAlertMessage = document.getElementById("customAlertMessage");

        // Set the icon
        customAlertIcon.innerHTML = iconHtml; // Place icon HTML directly into the icon div

        // Set the title and message
        customAlertTitle.textContent = title;
        customAlertMessage.textContent = message;

        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    }

    function closeAlert() {
        const modal = document.getElementById("customAlertModal");
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    document.getElementById("customAlertCloseBtn").addEventListener("click", closeAlert);

    // --- DevTools Warning Start ---
    // Function to prevent common DevTools opening methods
    function preventDevTools(event) {
        // SVG for the warning icon (yellow triangle with exclamation mark)
        const warningIconSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500 w-16 h-16 mx-auto">
                <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.198 0l7.359 12.75c1.154 2-.29 4.5-2.599 4.5H4.64c-2.309 0-3.753-2.5-2.598-4.5l7.359-12.75zM12 9a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0112 9zm0 6a.75.75 0 100 1.5.75.75 0 000-1.5z" clip-rule="evenodd" />
            </svg>
        `;

        // SVG for the no-entry/stop icon (red circle with diagonal line)
        const noEntryIconSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-red-500 w-16 h-16 mx-auto">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.68 1.69a.75.75 0 101.06 1.06L12 13.06l1.69 1.68a.75.75 0 101.06-1.06L13.06 12l1.68-1.69a.75.75 0 10-1.06-1.06L12 10.94l-1.69-1.68z" clip-rule="evenodd" />
            </svg>
        `;

        // Prevent right-click context menu
        if (event.type === 'contextmenu') {
            event.preventDefault();
            showAlert("Warning!", "Right-click is disabled on this page.", noEntryIconSVG); // Pass SVG to showAlert
        }

        // Prevent F12 (DevTools toggle) and Ctrl/Cmd+Shift+I (inspect element)
        if (event.type === 'keydown') {
            const isF12 = event.keyCode === 123; // F12 key
            const isCtrlShiftI = (event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73; // Ctrl/Cmd + Shift + I
            const isCtrlShiftJ = (event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 74; // Ctrl/Cmd + Shift + J (Console)
            const isCtrlU = (event.ctrlKey || event.metaKey) && event.keyCode === 85; // Ctrl/Cmd + U (View Source)
            const isCtrlS = (event.ctrlKey || event.metaKey) && event.keyCode === 83; // Ctrl/Cmd + S (Save Page)

            if (isF12 || isCtrlShiftI || isCtrlShiftJ || isCtrlU || isCtrlS) {
                event.preventDefault();
                showAlert("Warning!", "Developer tools are disabled. Please enjoy the site!", warningIconSVG); // Pass SVG to showAlert
            }
        }
    }

    // Add event listeners for right-click and keyboard shortcuts
    document.addEventListener('contextmenu', preventDevTools);
    document.addEventListener('keydown', preventDevTools);
    // --- DevTools Warning End ---


    document.addEventListener("DOMContentLoaded", function () {
        const backToTopBtn = document.getElementById("backToTopBtn");
    
        // Show/hide back-to-top button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopBtn.classList.remove("opacity-0", "translate-y-4", "hidden");
                backToTopBtn.classList.add("opacity-100", "translate-y-0");
            } else {
                backToTopBtn.classList.remove("opacity-100", "translate-y-0");
                backToTopBtn.classList.add("opacity-0", "translate-y-4");
                // Add 'hidden' after transition completes to prevent interaction
                setTimeout(() => {
                    if (backToTopBtn.classList.contains("opacity-0")) {
                        backToTopBtn.classList.add("hidden");
                    }
                }, 300); // Matches transition duration
            }
        });
    
        // Scroll to top when button is clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    
        // Get elements
        const percentageText = document.getElementById('percentage-text');
        const loadingSection = document.getElementById('loading-section');
        const mainContent = document.getElementById('main-content');

        // Get references to the shape elements
        const circleShape = document.getElementById('circle-shape');
        const triangleShape = document.getElementById('triangle-shape');
        const squareShape = document.getElementById('square-shape');

        let progress = 0;
        const duration = 3000; // Durasi animasi persentase (3 detik)
        const delayBeforeTransition = 4000; // Jeda 4 detik setelah 100% sebelum fade-out

        // Perimeter values for setting full stroke when animation stops
        const circlePerimeter = 188.5;
        const trianglePerimeter = 176.62;
        const squarePerimeter = 200;

        const animatePercentage = () => {
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const newProgress = Math.min(100, Math.floor((elapsedTime / duration) * 100));

                if (newProgress > progress) {
                    progress = newProgress;
                    percentageText.textContent = `${progress}%`;
                }

                if (progress < 100) {
                    requestAnimationFrame(update);
                } else {
                    // Ketika loading mencapai 100%
                    // Hentikan animasi garis dengan menghapus kelas animasi
                    circleShape.classList.remove('circle-shape-animation');
                    triangleShape.classList.remove('triangle-shape-animation');
                    squareShape.classList.remove('square-shape-animation');

                    // Pastikan garis terlihat penuh dengan transisi halus
                    circleShape.style.strokeDasharray = `${circlePerimeter} 0`;
                    circleShape.style.strokeDashoffset = '0';
                    triangleShape.style.strokeDasharray = `${trianglePerimeter} 0`;
                    triangleShape.style.strokeDashoffset = '0';
                    squareShape.style.strokeDasharray = `${squarePerimeter} 0`;
                    squareShape.style.strokeDashoffset = '0';

                    // Tambahkan efek glow ke bentuk
                    circleShape.classList.add('shape-glow-effect');
                    triangleShape.classList.add('shape-glow-effect');
                    squareShape.classList.add('shape-glow-effect');

                    // Beri jeda 4 detik, lalu mulai fade-out loading section
                    setTimeout(() => {
                        loadingSection.style.opacity = '0'; // Memulai transisi fade-out

                        // Setelah fade-out selesai (durasi 0.5s), sembunyikan sepenuhnya
                        setTimeout(() => {
                            loadingSection.classList.add('hidden'); // Sembunyikan bagian loading
                            mainContent.classList.remove('hidden'); // Tampilkan bagian konten utama
                            console.log('Loading selesai! Konten utama ditampilkan.');
                        }, 500); // Durasi transisi opacity
                    }, delayBeforeTransition); // Jeda sebelum fade-out dimulai
                }
            };

            requestAnimationFrame(update);
        };

        // Mulai animasi persentase dan terapkan kelas animasi garis ketika halaman dimuat
        window.onload = () => {
            circleShape.classList.add('circle-shape-animation');
            triangleShape.classList.add('triangle-shape-animation');
            squareShape.classList.add('square-shape-animation');
            animatePercentage();
        };

 // audio
        const backgroundMusic = document.getElementById('backgroundMusic');
        const playPauseButton = document.getElementById('playPauseButton');
        const playIcon = document.getElementById('playIcon');
        const pauseIcon = document.getElementById('pauseIcon');
        const volumeSliderContainer = document.getElementById('volumeSliderContainer');
        const volumeSlider = document.getElementById('volumeSlider');

        let isPlaying = false; // Melacak status pemutaran saat ini
        const initialVolume = 0.5; // Volume target setelah fade-in
        const fadeInDuration = 3000; // Durasi fade-in dalam milidetik (3 detik)
        const startDelay = 9000; // Penundaan sebelum mulai bermain dalam milidetik (9 detik)

        let hideTimeout; // Untuk mengelola penundaan penyembunyian slider volume

        // Set volume awal dari slider
        backgroundMusic.volume = volumeSlider.value;

        // Fungsi untuk menampilkan slider volume
        function showVolumeSlider() {
            clearTimeout(hideTimeout); // Hapus timeout penyembunyian yang ada
            volumeSliderContainer.classList.remove('hidden');
        }

        // Fungsi untuk menyembunyikan slider volume dengan penundaan
        function hideVolumeSliderWithDelay() {
            hideTimeout = setTimeout(() => {
                volumeSliderContainer.classList.add('hidden');
            }, 300); // Penundaan 300ms sebelum menyembunyikan
        }

        // Fungsi untuk mengalihkan putar/jeda
        function togglePlayPause() {
            if (isPlaying) {
                backgroundMusic.pause();
                playIcon.classList.remove('hidden'); // Tampilkan ikon putar
                pauseIcon.classList.add('hidden');    // Sembunyikan ikon jeda
            } else {
                // Coba putar musik. Ini mungkin gagal jika tidak dimulai oleh gestur pengguna.
                const playPromise = backgroundMusic.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        // Pemutaran dimulai dengan sukses
                        playIcon.classList.add('hidden');     // Sembunyikan ikon putar
                        pauseIcon.classList.remove('hidden'); // Tampilkan ikon jeda

                        // Terapkan fade-in hanya jika volume saat ini 0 (berarti baru mulai atau diatur ulang)
                        if (backgroundMusic.volume === 0) {
                            fadeInMusic();
                        } else {
                            // Jika sudah diputar sebelumnya (misal, dijeda lalu diputar lagi), atur langsung ke volume target
                            backgroundMusic.volume = initialVolume;
                        }
                    })
                    .catch(error => {
                        // Autoplay dicegah. Tampilkan pesan atau tangani dengan anggun.
                        console.error("Autoplay dicegah:", error);
                        // Pastikan ikon play terlihat jika pemutaran gagal
                        playIcon.classList.remove('hidden');
                        pauseIcon.classList.add('hidden');
                        isPlaying = false;
                    });
                }
            }
            isPlaying = !isPlaying; // Perbarui status
        }

        // Fungsi untuk efek fade-in
        function fadeInMusic() {
            backgroundMusic.volume = 0; // Mulai dari volume 0
            const volumeStep = initialVolume / (fadeInDuration / 100); // Hitung langkah volume per 100ms
            let currentVolume = 0;

            const fadeInterval = setInterval(() => {
                if (currentVolume < initialVolume) {
                    currentVolume += volumeStep;
                    if (currentVolume > initialVolume) {
                        currentVolume = initialVolume; // Pastikan tidak melebihi volume target
                    }
                    backgroundMusic.volume = currentVolume;
                } else {
                    clearInterval(fadeInterval); // Hentikan interval setelah mencapai volume target
                }
            }, 100); // Perbarui volume setiap 100ms
        }

        // Event listener untuk tombol putar/jeda
        playPauseButton.addEventListener('click', togglePlayPause);

        // Event listener untuk slider volume
        volumeSlider.addEventListener('input', () => {
            backgroundMusic.volume = volumeSlider.value;
        });

        // Event listener untuk menampilkan/menyembunyikan slider volume
        playPauseButton.addEventListener('mouseover', showVolumeSlider);
        playPauseButton.addEventListener('mouseout', hideVolumeSliderWithDelay);
        volumeSliderContainer.addEventListener('mouseover', showVolumeSlider);
        volumeSliderContainer.addEventListener('mouseout', hideVolumeSliderWithDelay);


        // Dengarkan saat audio benar-benar mulai diputar
        backgroundMusic.addEventListener('play', () => {
            isPlaying = true;
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        });

        // Dengarkan saat audio dijeda
        backgroundMusic.addEventListener('pause', () => {
            isPlaying = false;
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        });

        // Autoplay dengan penundaan saat halaman dimuat
        window.addEventListener('load', () => {
            setTimeout(() => {
                const playPromise = backgroundMusic.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        // Pemutaran dimulai dengan sukses, mulai fade-in
                        fadeInMusic(); // Ini akan menangani fade-in awal
                        isPlaying = true;
                        playIcon.classList.add('hidden');
                        pauseIcon.classList.remove('hidden');
                    })
                    .catch(error => {
                        // Autoplay dicegah. Tetapkan ikon putar sebagai default.
                        console.error("Autoplay dicegah setelah penundaan:", error);
                        isPlaying = false;
                        playIcon.classList.remove('hidden');
                        pauseIcon.classList.add('hidden');
                        // Pastikan volume diatur ulang ke 0 jika autoplay gagal, agar fadeInMusic berfungsi pada klik pengguna
                        backgroundMusic.volume = 0;
                    });
                }
            }, startDelay); // Tunda pemutaran selama 'startDelay' milidetik
        });
