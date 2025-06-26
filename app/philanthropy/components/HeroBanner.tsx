import Image from 'next/image'
import styles from './HeroBanner.module.css'

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/CppHeader.png"
        alt="Collective Philanthropy Project"
        fill
        className={styles.background}
      />
      <div className={styles.textOverlay}>
        <h1>COLLECTIVE PHILANTHROPY PROJECT</h1>
      </div>
    </section>
  )
}