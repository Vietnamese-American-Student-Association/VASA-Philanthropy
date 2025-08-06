'use client';

import Image from 'next/image';
import styles from './ContributionGallery.module.css';

const slides = [
  {
    src: '/images/ham-choi.png',
    alt: 'Ham Choi',
    label: 'HAM CHOI',
    desc:
      'Kick off the year with unique field-day games and team challenges. Every laugh and cheer helps raise funds for our annual charity.',
  },
  {
    src: '/images/splatter-splash.png',
    alt: 'Splatter Splash',
    label: 'SPLATTER SPLASH',
    desc:
      'Want pie your favorite officers in the face? Join us for a fun-filled event where you can do just that, all while supporting a great cause!',
  },
  {
    src: '/images/care-to-dare.png',
    alt: 'Care to Dare',
    label: 'CARE TO DARE',
    desc:
      'Care to Dare is our philanthropy event where you get to see some of your favorite officers complete dares! All proceeds will go to the beneficiary fund!',
  },
];

export default function ContributionGallery() {
  return (
    <section className={styles.gallery}>
      <h2>HOW DOES VASA CONTRIBUTE?</h2>

      {slides.map(({ src, alt, label, desc }, i) => (
        <div key={i} className={styles.slide}>
          <Image src={src} alt={alt} fill className={styles.image} priority />

          <div className={styles.overlay}>
            <h2>{label}</h2>
            <span className={styles.slideDesc}>{desc}</span>
          </div>
        </div>
      ))}
    </section>
  );
}