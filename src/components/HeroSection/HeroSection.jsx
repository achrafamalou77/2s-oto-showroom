'use client';


import SearchBar from '../SearchBar/SearchBar';
import CategoryIcons from '../CategoryIcons/CategoryIcons';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero-section">
      <video
        className={styles.video}
        src="/videos/hero-video.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.searchContainer}>
          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>

      {/* Bottom Pinned Elements */}
      <div className={styles.bottomPinned}>
        {/* Category Icons */}
        <CategoryIcons />

        {/* Scroll Down Arrow */}
        <div className={styles.scrollArrowWrap}>
          <a href="#featured-section" className={styles.scrollArrow} aria-label="Voir plus">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
