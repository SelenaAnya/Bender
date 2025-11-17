'use client';

import Header from '@/components/Header/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {t('hero.title')}
            </h1>
            <p className={styles.heroSubtitle}>
              {t('hero.subtitle')}
            </p>
            <p className={styles.heroDescription}>
              {t('hero.description')}
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                {t('header.getPresentation')}
              </button>
              <button className={styles.secondaryButton}>
                {t('common.learnMore')} <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Products Section - Bender 2.0 */}
        <section id="bender-2" className={styles.productSection}>
          <div className={styles.productContent}>
            <h2 className={styles.productTitle}>
              {t('products.bender2.title')}
            </h2>
            <p className={styles.productDescription}>
              {t('products.bender2.description')}
            </p>
            <button className={styles.productButton}>
              {t('common.learnMore')}
              <svg className={styles.productButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Products Section - Bender-M */}
        <section id="bender-m" className={styles.productSection}>
          <div className={styles.productContent}>
            <h2 className={styles.productTitle}>
              {t('products.benderM.title')}
            </h2>
            <p className={styles.productDescription}>
              {t('products.benderM.description')}
            </p>
            <button className={styles.productButton}>
              {t('common.learnMore')}
              <svg className={styles.productButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Products Section - Bender-L */}
        <section id="bender-l" className={styles.productSection}>
          <div className={styles.productContent}>
            <h2 className={styles.productTitle}>
              {t('products.benderL.title')}
            </h2>
            <p className={styles.productDescription}>
              {t('products.benderL.description')}
            </p>
            <button className={styles.productButton}>
              {t('common.learnMore')}
              <svg className={styles.productButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>
              {t('common.contactUs')}
            </h2>
            <button className={styles.contactButton}>
              {t('header.getPresentation')}
            </button>
          </div>
        </section>
      </main>
    </>
  );
}