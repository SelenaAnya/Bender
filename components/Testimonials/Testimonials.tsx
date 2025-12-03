'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const { t } = useLanguage();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const testimonials = [
        {
            id: 1,
            quoteKey: 'testimonials.quote1',
            authorKey: 'testimonials.author1',
            roleKey: 'testimonials.role1',
        },
        {
            id: 2,
            quoteKey: 'testimonials.quote2',
            authorKey: 'testimonials.author2',
            roleKey: 'testimonials.role2',
        },
        {
            id: 3,
            quoteKey: 'testimonials.quote3',
            authorKey: 'testimonials.author3',
            roleKey: 'testimonials.role3',
        },
        {
            id: 4,
            quoteKey: 'testimonials.quote4',
            authorKey: 'testimonials.author4',
            roleKey: 'testimonials.role4',
        },
        {
            id: 5,
            quoteKey: 'testimonials.quote5',
            authorKey: 'testimonials.author5',
            roleKey: 'testimonials.role5',
        },
        {
            id: 6,
            quoteKey: 'testimonials.quote6',
            authorKey: 'testimonials.author6',
            roleKey: 'testimonials.role6',
        },
        {
            id: 7,
            quoteKey: 'testimonials.quote7',
            authorKey: 'testimonials.author7',
            roleKey: 'testimonials.role7',
        },
        {
            id: 8,
            quoteKey: 'testimonials.quote8',
            authorKey: 'testimonials.author8',
            roleKey: 'testimonials.role8',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <svg
                            className={styles.icon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                        </svg>
                        <h2 className={styles.title}>{t('testimonials.sectionTitle')}</h2>
                    </div>
                    <h3 className={styles.heading}>{t('testimonials.heading')}</h3>
                </div>

                {/* Testimonials Grid */}
                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`${styles.card} ${hoveredCard === index ? styles.cardHover : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Quote */}
                            <p className={styles.quote}>
                                «{t(testimonial.quoteKey)}»
                            </p>

                            {/* Author */}
                            <div className={styles.author}>
                                <p className={styles.authorName}>
                                    {t(testimonial.authorKey)}
                                </p>
                                <p className={styles.authorRole}>
                                    {t(testimonial.roleKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;