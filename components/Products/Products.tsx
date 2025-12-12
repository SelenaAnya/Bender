'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Products.module.css';

const Products = () => {
    const { t } = useLanguage();

    const products = [
        {
            id: 1,
            nameKey: 'products.bender2.name',
            descriptionKey: 'products.bender2.description',
            features: [
                'products.bender2.feature1',
                'products.bender2.feature2',
                'products.bender2.feature3',
                'products.bender2.feature4',
            ],
            isFeatured: true,
        },
        {
            id: 2,
            nameKey: 'products.bender2.name',
            descriptionKey: 'products.bender2.description',
            features: [
                'products.bender2.feature1',
                'products.bender2.feature2',
                'products.bender2.feature3',
                'products.bender2.feature4',
            ],
            isFeatured: false,
        },
        {
            id: 3,
            nameKey: 'products.bender2.name',
            descriptionKey: 'products.bender2.description',
            features: [
                'products.bender2.feature1',
                'products.bender2.feature2',
                'products.bender2.feature3',
                'products.bender2.feature4',
            ],
            isFeatured: false,
        },
        {
            id: 4,
            nameKey: 'products.bender2.name',
            descriptionKey: 'products.bender2.description',
            features: [
                'products.bender2.feature1',
                'products.bender2.feature2',
                'products.bender2.feature3',
                'products.bender2.feature4',
            ],
            isFeatured: false,
        },
        {
            id: 5,
            nameKey: 'products.bender2.name',
            descriptionKey: 'products.bender2.description',
            features: [
                'products.bender2.feature1',
                'products.bender2.feature2',
                'products.bender2.feature3',
                'products.bender2.feature4',
            ],
            isFeatured: false,
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    {/* <div className={styles.titleWrapper}>
                        {/* <svg
                            className={styles.icon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg> 
                        <h2 className={styles.title}>{t('products.sectionTitle')}</h2>
                    </div> */}
                    <h3 className={styles.heading}>{t('products.heading')}</h3>
                </div>

                {/* Products Grid */}
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`${styles.card} ${product.isFeatured ? styles.cardFeatured : ''}`}
                        >
                            {/* Product Image */}
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}></div>
                            </div>

                            {/* Product Content */}
                            <div className={styles.content}>
                                <h4 className={styles.productName}>
                                    {t(product.nameKey)}
                                </h4>
                                <p className={styles.description}>
                                    {t(product.descriptionKey)}
                                </p>

                                {/* Features List */}
                                <ul className={styles.featuresList}>
                                    {product.features.map((featureKey, index) => (
                                        <li key={index} className={styles.featureItem}>
                                            <span className={styles.checkmark}>✓</span>
                                            <span>{t(featureKey)}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button className={styles.button}>
                                    {t('products.button')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;