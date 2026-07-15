import { translations } from './translations.js';

function getTranslation(language, key) {
    return key.split('.').reduce((value, part) => {
        return value ? value[part] : undefined;
    }, translations[language]);
}

function updateLanguageButtons(language) {
    const languageButtons = document.querySelectorAll('.language-btn');

    languageButtons.forEach((button) => {
        const isActive = button.dataset.lang === language;

        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function setLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const translatedText = getTranslation(language, key);

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }
    });

    document.documentElement.lang = language;
    document.title = translations[language].pageTitle;

    updateLanguageButtons(language);
    localStorage.setItem('portfolioLanguage', language);
}

function getInitialLanguage() {
    const savedLanguage = localStorage.getItem('portfolioLanguage');

    if (savedLanguage === 'en' || savedLanguage === 'es') {
        return savedLanguage;
    }

    return 'en';
}

export function initializeLanguageSwitcher() {
    const languageButtons = document.querySelectorAll('.language-btn');

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage(getInitialLanguage());
}