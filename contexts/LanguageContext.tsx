'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'uk' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Переклади для всього додатку
const translations = {
    uk: {
        // Header
        'header.bender2': 'Bender 2.0',
        'header.benderM': 'Bender-M',
        'header.benderL': 'Bender-L',
        'header.getPresentation': 'Отримати презентацію',
        'header.ukrainianLang': 'Українська',
        'header.englishLang': 'Англійська',

        // Hero Section
        'hero.title': 'Bender Robots',
        'hero.subtitle': 'Інноваційні рішення в робототехніці для вашого бізнесу',
        'hero.description': 'Ми створюємо роботів, які змінюють майбутнє промисловості',

        // Products
        'products.bender2.title': 'Bender 2.0',
        'products.bender2.description': 'Новітня модель з покращеними характеристиками для автоматизації виробництва',
        'products.benderM.title': 'Bender-M',
        'products.benderM.description': 'Середня модель для універсального використання в різних галузях',
        'products.benderL.title': 'Bender-L',
        'products.benderL.description': 'Велика модель для промислового використання з високою продуктивністю',

        // Footer
        'footer.aboutUs': 'Про нас',
        'footer.contacts': 'Контакти',
        'footer.privacy': 'Політика конфіденційності',
        'footer.terms': 'Умови використання',

        // Common
        'common.learnMore': 'Дізнатися більше',
        'common.contactUs': 'Зв\'яжіться з нами',
        'common.close': 'Закрити',
        'common.menu': 'Меню',
    },
    en: {
        // Header
        'header.bender2': 'Bender 2.0',
        'header.benderM': 'Bender-M',
        'header.benderL': 'Bender-L',
        'header.getPresentation': 'Get Presentation',
        'header.ukrainianLang': 'Ukrainian',
        'header.englishLang': 'English',

        // Hero Section
        'hero.title': 'Bender Robots',
        'hero.subtitle': 'Innovative robotics solutions for your business',
        'hero.description': 'We create robots that change the future of industry',

        // Products
        'products.bender2.title': 'Bender 2.0',
        'products.bender2.description': 'Latest model with improved characteristics for production automation',
        'products.benderM.title': 'Bender-M',
        'products.benderM.description': 'Medium model for universal use in various industries',
        'products.benderL.title': 'Bender-L',
        'products.benderL.description': 'Large model for industrial use with high performance',

        // Footer
        'footer.aboutUs': 'About Us',
        'footer.contacts': 'Contacts',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',

        // Common
        'common.learnMore': 'Learn More',
        'common.contactUs': 'Contact Us',
        'common.close': 'Close',
        'common.menu': 'Menu',
    },
};

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    // Ініціалізуємо з дефолтного значення
    const [language, setLanguageState] = useState<Language>('uk');
    const [mounted, setMounted] = useState(false);

    // Перший useEffect - тільки для монтування
    useEffect(() => {
        setMounted(true);
    }, []);

    // Другий useEffect - для завантаження мови з localStorage після монтування
    useEffect(() => {
        if (mounted) {
            const savedLanguage = localStorage.getItem('language') as Language;
            if (savedLanguage && (savedLanguage === 'uk' || savedLanguage === 'en')) {
                setLanguageState(savedLanguage);
                document.documentElement.lang = savedLanguage === 'uk' ? 'uk' : 'en';
            }
        }
    }, [mounted]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (mounted) {
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
        }
    };

    // Функція для отримання перекладу
    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['uk']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook для використання контексту мови
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}