'use client';

import styles from './OurTeam.module.css';

const team = [
  {
    name: 'Zizou 2s oto',
    role: 'Deal Closer',
    phone: '0550 59 94 37',
    email: 'contact@2soto.dz',
    initial: 'Z',
  },
  {
    name: 'Taki 2s oto',
    role: 'Conseiller Automobile',
    phone: '0550 59 94 37',
    email: 'contact@2soto.dz',
    initial: 'T',
  },
  {
    name: 'Achraf 2s oto',
    role: 'IT Manager',
    phone: '0550 59 94 37',
    email: 'contact@2soto.dz',
    initial: 'A',
  },
];

// Duplicate to 6 for a full hexagonal 3D cylinder
const carouselCards = [...team, ...team];
const QUANTITY = carouselCards.length;

export default function OurTeam() {
  return (
    <section className={styles.section} id="our-team">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>L&apos;Équipe</span>
          <h2 className={styles.title}>
            Les Visages Derrière <span className={styles.accent}>2s oto</span>
          </h2>
          <p className={styles.subtitle}>
            Une équipe passionnée, à votre service pour chaque étape de votre projet automobile.
          </p>
        </div>

        {/* Features strip */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Conseillers experts certifiés</span>
          </div>
          <div className={styles.featureItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Accompagnement personnalisé</span>
          </div>
          <div className={styles.featureItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Disponible 6j/7</span>
          </div>
        </div>

        {/* 3D Carousel */}
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carousel}
            style={{ '--quantity': QUANTITY }}
          >
            {carouselCards.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className={styles.card}
                style={{ '--index': index }}
              >
                <div className={styles.cardInner}>
                  {/* Glow border */}
                  <div className={styles.cardGlow} />

                  {/* Avatar */}
                  <div className={styles.avatar}>
                    <span>{member.initial}</span>
                  </div>

                  {/* Info */}
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>

                  {/* Contact actions */}
                  <div className={styles.actions}>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className={styles.actionBtn}
                      title="Appeler"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className={styles.actionBtn}
                      title="Email"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
