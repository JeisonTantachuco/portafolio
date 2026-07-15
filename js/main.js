import { initializeLanguageSwitcher } from './i18n.js';
import {
    initializeMobileMenu,
    initializeNavbarScrollEffect
} from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageSwitcher();
    initializeNavbarScrollEffect();
    initializeMobileMenu();
});