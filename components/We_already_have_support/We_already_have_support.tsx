'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import styles from './We_already_have_support.module.css';

interface SupportUnit {
    id: number;
    nameKey: string;
    logo: string;
}

const WeAlreadyHaveSupport = () => {
    const { t } = useLanguage();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const supportUnits: SupportUnit[] = [
        {
            id: 1,
            nameKey: 'support.unit1',
<<<<<<< HEAD
            logo: '/svg/logo/rybij.svg',
=======
            logo: '/logos/unit1.svg',
>>>>>>> c9d3c38f2ab172f468461094ceac4325f48f676d
        },
        {
            id: 2,
            nameKey: 'support.unit2',
            logo: '/logos/unit2.svg',
        },
        {
            id: 3,
            nameKey: 'support.unit3',
            logo: '/logos/unit3.svg',
        },
        {
            id: 4,
            nameKey: 'support.unit4',
            logo: '/logos/unit4.svg',
        },
        {
            id: 5,
            nameKey: 'support.unit5',
            logo: '/logos/unit5.svg',
        },
        {
            id: 6,
            nameKey: 'support.unit6',
            logo: '/logos/unit6.svg',
        },
        {
            id: 7,
            nameKey: 'support.unit7',
            logo: '/logos/unit7.svg',
        },
        {
            id: 8,
            nameKey: 'support.unit8',
            logo: '/logos/unit8.svg',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>{t('support.heading')}</h2>
                    <p className={styles.description}>{t('support.description')}</p>
                </div>

                {/* First row - 5 units */}
                <div className={styles.grid}>
                    {supportUnits.slice(0, 5).map((unit, index) => (
                        <div
                            key={unit.id}
                            className={`${styles.logoCard} ${hoveredCard === index ? styles.logoCardHover : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={styles.logoWrapper}>
                                <img
                                    src={unit.logo}
                                    alt={t(unit.nameKey)}
                                    className={styles.logo}
                                />
                            </div>
                            <span className={styles.unitName}>{t(unit.nameKey)}</span>
                        </div>
                    ))}
                </div>

                {/* Second row - 3 units */}
                <div className={styles.additionalRow}>
                    {supportUnits.slice(5, 8).map((unit, index) => (
                        <div
                            key={unit.id}
                            className={`${styles.logoCard} ${hoveredCard === index + 5 ? styles.logoCardHover : ''}`}
                            onMouseEnter={() => setHoveredCard(index + 5)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={styles.logoWrapper}>
                                <Image
                                    src={unit.logo}
                                    alt={t(unit.nameKey)}
                                    fill
                                    className={styles.logo}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <span className={styles.unitName}>{t(unit.nameKey)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeAlreadyHaveSupport;