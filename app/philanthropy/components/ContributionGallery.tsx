import Image from 'next/image'
import styles from './ContributionGallery.module.css'

const slides = [
  { src: '/images/ham-choi.png', alt: 'Ham Choi', label: 'HAM CHOI' },
  { src: '/images/splatter-splash.png', alt: 'Splatter Splash', label: 'SPLATTER SPLASH' },
  { src: '/images/care-to-dare.png', alt: 'Care to Dare', label: 'CARE TO DARE' },
]

export default function ContributionGallery() {
  return (
    <section className={styles.gallery}>
      <h2>HOW DOES VASA CONTRIBUTE?</h2>
      {slides.map(({ src, alt, label }, i) => (
        <div key={i} className={styles.slide}>
          <Image src={src} alt={alt} fill className={styles.image} />
          <div className={styles.overlay}><h2>{label}</h2></div>
        </div>
      ))}
    </section>
  )
}