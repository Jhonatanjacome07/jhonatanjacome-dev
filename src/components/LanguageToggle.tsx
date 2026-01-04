import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium uppercase transition-all duration-300 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white backdrop-blur-sm border border-white/10 hover:border-white/20"
            aria-label="Toggle language"
        >
            <Icon icon="material-symbols:language" className="w-5 h-5" />
            <span className="font-bold">{currentLang.toUpperCase()}</span>
            <span className="text-white/50">→</span>
            <span className="text-white/50">{currentLang === 'es' ? 'EN' : 'ES'}</span>
        </button>
    );
};

export default LanguageToggle;
