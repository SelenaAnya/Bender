/* page.tsx */
'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero'
import About_Us from '@/components/About_Us/About_us';
import OurSteps from '@/components/Our_steps/Our_steps';
import ForWhom from '@/components/For_whom/For_whom';
import Products from '@/components/Products/Products';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer'; 
import styles from './page.module.css';
import VideoBackground from '@/components/VideoBackground/VideoBackground';

export default function Home() {
  return (
    <VideoBackground videoSrc="/img/bgs.mp4" opacity={0.6}>
      <>
        <Header />
        <Hero />
        <main className={styles.main}>
          <About_Us />
          <OurSteps />
          <Products />
          <ForWhom />
          <Testimonials />
        </main>
        <Footer />
      </>
    </VideoBackground>
  );
}