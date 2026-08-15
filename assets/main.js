// ===== Quantum — shared behavior =====

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Navbar blur on scroll ---------- */
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
        }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    /* ---------- Mobile menu toggle ---------- */
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        mobileMenu.style.maxHeight = '0px';
        mobileMenu.style.overflow = 'hidden';
        mobileMenu.style.opacity = '0';
        let open = false;
        menuBtn.addEventListener('click', () => {
            open = !open;
            mobileMenu.style.maxHeight = open ? mobileMenu.scrollHeight + 'px' : '0px';
            mobileMenu.style.opacity = open ? '1' : '0';
        });
    }

    /* ---------- Floating parallax elements ---------- */
    const floats = document.querySelectorAll('[data-float]');
    if (floats.length) {
        window.addEventListener('scroll', () => {
            floats.forEach((el) => {
                const speed = parseFloat(el.dataset.float) || 0.2;
                el.style.transform = `translateY(${window.scrollY * speed}px)`;
            });
        });
    }

    /* ---------- Reveal on scroll (fade-up, staggered) ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- Chart bar draw-in ---------- */
    const chartBars = document.querySelectorAll('.chart-bar');
    if ('IntersectionObserver' in window && chartBars.length) {
        const chartIo = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    chartIo.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        chartBars.forEach((el) => chartIo.observe(el));
    } else {
        chartBars.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- Counter animation ---------- */
    const counters = document.querySelectorAll('[data-counter]');
    const animateCounter = (el) => {
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased * 10) / 10;
            el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window && counters.length) {
        const counterIo = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterIo.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });
        counters.forEach((el) => counterIo.observe(el));
    }

    /* ---------- Portfolio filtering ---------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (filterBtns.length && portfolioItems.length) {
        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                filterBtns.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                portfolioItems.forEach((item) => {
                    const match = filter === 'all' || item.dataset.category === filter;
                    item.classList.toggle('hidden-item', !match);
                });
            });
        });
    }

    /* ---------- Testimonial carousel ---------- */
    const track = document.getElementById('testimonial-track');
    const dotsWrap = document.getElementById('testimonial-dots');
    if (track && dotsWrap) {
        const slides = track.children.length;
        let idx = 0;
        const dots = [];
        for (let i = 0; i < slides; i++) {
            const dot = document.createElement('button');
            dot.className = 'w-2.5 h-2.5 rounded-full border border-[#00B8FF]/40 transition';
            dot.style.backgroundColor = i === 0 ? '#00B8FF' : 'transparent';
            dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
            dots.push(dot);
        }
        function goTo(i) {
            idx = (i + slides) % slides;
            track.style.transform = `translateX(-${idx * 100}%)`;
            dots.forEach((d, di) => { d.style.backgroundColor = di === idx ? '#00B8FF' : 'transparent'; });
        }
        let auto = setInterval(() => goTo(idx + 1), 5500);
        track.parentElement.addEventListener('mouseenter', () => clearInterval(auto));
        track.parentElement.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(idx + 1), 5500); });
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        if (prevBtn) prevBtn.addEventListener('click', () => goTo(idx - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goTo(idx + 1));
    }

    /* ---------- Contact form (front-end only) ---------- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('contact-submit');
            const note = document.getElementById('contact-note');
            if (btn) {
                btn.textContent = 'Message Sent';
                btn.disabled = true;
            }
            if (note) {
                note.textContent = "Thanks — we'll get back to you within one business day.";
                note.classList.remove('hidden');
            }
        });
    }

    /* ---------- Set active nav link ---------- */
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
