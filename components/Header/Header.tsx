'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState<'Укр' | 'En'>('Укр');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const switchLanguage = (lang: 'Укр' | 'En') => {
        setActiveLanguage(lang);
        // Тут можна додати логіку зміни мови додатку
    };

    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.headerContent}>
                    {/* Logo */}
                    <div className={css.logo}>
                        <Link href="/" aria-label="Bender Robots Home">
                            <Image
                                src="/logo.svg" // Замініть на ваш логотип
                                alt="Bender Robots Logo"
                                width={150}
                                height={50}
                                className={css.logoImage}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main Navigation">
                        <ul className={css.navigation}>
                            <li>
                                <Link href="#bender-2">Bender 2.0</Link>
                            </li>
                            <li>
                                <Link href="#bender-m">Bender-M</Link>
                            </li>
                            <li>
                                <Link href="#bender-l">Bender-L</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Desktop Right Section */}
                    <div className={css.rightSection}>
                        <button
                            onClick={() => switchLanguage('Укр')}
                            className={css.langButton}
                            aria-label="Українська мова"
                            aria-pressed={activeLanguage === 'Укр'}
                        >
                            Укр
                        </button>
                        <button
                            onClick={() => switchLanguage('En')}
                            className={css.langButton}
                            aria-label="English language"
                            aria-pressed={activeLanguage === 'En'}
                        >
                            En
                        </button>
                        <button className={css.ctaButton} aria-label="Get presentation">
                            Отримати презентацію
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={css.menuButton}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className={css.menuIcon}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${css.mobileMenu} ${isMenuOpen ? css.open : ''}`}>
                    <div className={css.mobileMenuContent}>
                        <nav aria-label="Mobile Navigation">
                            <ul className={css.mobileNavigation}>
                                <li>
                                    <Link href="#bender-2" onClick={() => setIsMenuOpen(false)}>
                                        Bender 2.0
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#bender-m" onClick={() => setIsMenuOpen(false)}>
                                        Bender-M
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#bender-l" onClick={() => setIsMenuOpen(false)}>
                                        Bender-L
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={css.mobileLangButtons}>
                            <button
                                onClick={() => switchLanguage('Укр')}
                                className={css.langButton}
                                aria-label="Українська мова"
                            >
                                Укр
                            </button>
                            <button
                                onClick={() => switchLanguage('En')}
                                className={css.langButton}
                                aria-label="English language"
                            >
                                En
                            </button>
                        </div>

                        <button className={css.mobileCtaButton}>
                            Отримати презентацію
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;