let slides = document.querySelectorAll('.slide');
        let index = 0;

        function showNextSlide() {
            slides[index].classList.remove('active'); // Hide current slide
            index = (index + 1) % slides.length; // Move to next slide
            slides[index].classList.add('active'); // Show new slide
        }

        setInterval(showNextSlide, 3000); // Change slide every 3 seconds