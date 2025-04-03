// Enhanced JavaScript for Dream Coach with Tailwind integration
document.addEventListener('DOMContentLoaded', function() {
    // ========== Mobile Menu Toggle ==========
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ease-in-out md:hidden';
    mobileMenu.innerHTML = `
        <div class="flex justify-end">
            <button class="close-btn text-2xl">×</button>
        </div>
        <div class="mt-8 flex flex-col space-y-6">
            <a href="#courses" class="text-gray-700 hover:text-purple-600">Courses</a>
            <a href="#about" class="text-gray-700 hover:text-purple-600">About</a>
            <a href="#welcome" class="text-purple-600 font-medium">Welcome</a>
            <a href="../login/index.html" class="text-gray-700 hover:text-purple-600">Log In</a>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    mobileMenu.querySelector('.close-btn')?.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // ========== Coach Slider ==========
    const coachSlider = document.querySelector('.coaches-slider');
    if (coachSlider) {
        const coachCards = coachSlider.querySelector('.coach-cards');
        const cards = coachSlider.querySelectorAll('.coach-card');
        const prevBtn = coachSlider.querySelector('.prev');
        const nextBtn = coachSlider.querySelector('.next');
        const dots = coachSlider.querySelectorAll('.dot');
        
        let currentIndex = 0;
        const cardWidth = cards[0]?.offsetWidth || 300;
        const gap = 24;
        
        function updateSlider() {
            coachCards.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('bg-purple-600', index === currentIndex);
                dot.classList.toggle('bg-gray-300', index !== currentIndex);
            });
        }
        
        prevBtn?.addEventListener('click', () => {
            if (currentIndex > 0) currentIndex--;
            updateSlider();
        });
        
        nextBtn?.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) currentIndex++;
            updateSlider();
        });
        
        dots?.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Auto-advance slider every 5 seconds
        setInterval(() => {
            if (currentIndex < cards.length - 1) currentIndex++;
            else currentIndex = 0;
            updateSlider();
        }, 5000);
    }

    // ========== Smooth Scrolling ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Intersection Observer ==========
    const animateElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ========== Book Lesson Modal ==========
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Create and show modal
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white rounded-lg p-8 max-w-md w-full animate-fadeIn">
                    <h3 class="text-xl font-bold mb-4">Book a Lesson</h3>
                    <form class="space-y-4">
                        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg">
                        <input type="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded-lg">
                        <input type="date" class="w-full px-4 py-2 border rounded-lg">
                        <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                            Confirm Booking
                        </button>
                    </form>
                    <button class="close-modal mt-4 text-gray-500 hover:text-gray-700">Cancel</button>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close-modal')?.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});