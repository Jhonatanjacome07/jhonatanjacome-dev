import React from 'react';
import { useTranslation } from 'react-i18next';

const FloatingLanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed z-40 flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase transition-all duration-300 rounded-full top-6 left-6 bg-black/80 hover:bg-black text-white/90 hover:text-white backdrop-blur-md border border-white/20 hover:border-white/40 hover:scale-105"
            aria-label="Toggle language"
            title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            <span className="text-base">{currentLang.toUpperCase()}</span>
            <span className="text-white/50">|</span>
            <span className="text-white/50 text-xs">{currentLang === 'es' ? 'EN' : 'ES'}</span>
        </button>
    );
};

export default FloatingLanguageToggle;
