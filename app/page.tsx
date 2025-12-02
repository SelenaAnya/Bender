'use client';

import Header from '@/components/Header/Header';
import About_Us from '@/components/About_Us/About_us';
import OurSteps from '@/components/Our_steps/Our_steps';
import ForWhom from '@/components/For_whom/For_whom';
import Products from '@/components/Products/Products'; // ДОДАТИ ЦЕЙ ІМПОРТ

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

        {/* Our Steps Section */}
        <OurSteps />

        {/* About Us Section */}
        <About_Us />

        {/* Products Section - ДОДАТИ ЦЮ СЕКЦІЮ */}
        <Products />

        {/* For Whom Section */}
        <ForWhom />
      </main>
    </>
  );
}