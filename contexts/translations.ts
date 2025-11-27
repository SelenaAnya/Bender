type TranslationValue = string | { [key: string]: TranslationValue };

export const translations: Record<'uk' | 'en', Record<string, TranslationValue>> = {
    uk: {
        header: {
            bender2: 'Bender 2.0',
            benderM: 'Bender-M',
            benderL: 'Bender-L',
            getPresentation: 'Отримати презентацію',
            ukrainianLang: 'Українська мова',
            englishLang: 'Англійська мова',
        },
        hero: {
            title: 'Інноваційні рішення для вашого бізнесу',
            subtitle: 'Передові технології роботизації',
            description: 'Ми створюємо майбутнє разом з вами',
        },
        products: {
            bender2: {
                title: 'Bender 2.0',
                description: 'Найсучасніший робот для ваших потреб',
            },
            benderM: {
                title: 'Bender-M',
                description: 'Середній клас роботів',
            },
            benderL: {
                title: 'Bender-L',
                description: 'Великий робот для складних завдань',
            },
        },
        common: {
            learnMore: 'Дізнатися більше',
            contactUs: 'Зв\'яжіться з нами',
            menu: 'Меню',
            close: 'Закрити',
        },
        aboutUs: {
            title: 'About Us',
            heading: 'Ми — українські інженери, які створюють роботизовані рішення, що рятують життя.',
            description1: 'З початку повномасштабного вторгнення ми розробляємо бойові автономні системи, здатні працювати там, де небезпечно людині: на передовій, у зоні РЕБ, під обстрілами.',
            description2: 'Наша мета — зробити ЗСУ технологічно сильнішими.',
        },
    },
    en: {
        header: {
            bender2: 'Bender 2.0',
            benderM: 'Bender-M',
            benderL: 'Bender-L',
            getPresentation: 'Get Presentation',
            ukrainianLang: 'Ukrainian language',
            englishLang: 'English language',
        },
        hero: {
            title: 'Innovative Solutions for Your Business',
            subtitle: 'Advanced Robotics Technologies',
            description: 'We create the future together with you',
        },
        products: {
            bender2: {
                title: 'Bender 2.0',
                description: 'The most advanced robot for your needs',
            },
            benderM: {
                title: 'Bender-M',
                description: 'Medium class robots',
            },
            benderL: {
                title: 'Bender-L',
                description: 'Large robot for complex tasks',
            },
        },
        common: {
            learnMore: 'Learn More',
            contactUs: 'Contact Us',
            menu: 'Menu',
            close: 'Close',
        },
    },
};