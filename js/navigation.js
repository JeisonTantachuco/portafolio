export function initializeNavbarScrollEffect() {
    const header = document.querySelector('.header');

    if (!header) {
        return;
    }

    window.addEventListener('scroll', () => {
        const hasScrolled = window.scrollY > 50;

        header.style.backgroundColor = hasScrolled
            ? '#000'
            : '#1a1a1a';

        header.style.boxShadow = hasScrolled
            ? '0 2px 5px rgba(0, 0, 0, 0.2)'
            : 'none';
    });
}

export function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.nav-links');
    const navigationLinks = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navigation) {
        return;
    }

    function closeMenu() {
        navigation.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open navigation menu');
    }

    hamburger.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('open');

        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
    });

    navigationLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}