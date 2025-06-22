import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialBlock}>
        <h3 className={styles.title}>STAY UPDATED ON OUR SOCIALS!</h3>
        <div className={styles.socials}>
          <button className={styles.socialButton}>
            <Image src="/images/instagram-logo.png" alt="Instagram" width={30} height={30} />
            <span>@VASAUCF</span>
          </button>
          <button className={styles.socialButton}>
            <Image src="/images/facebook-logo.png" alt="Facebook" width={30} height={30} />
            <span>Va Sa</span>
          </button>
          <button className={styles.socialButton}>
            <Image src="/images/discord-logo.png" alt="Discord" width={30} height={30} />
            <span>VASA UCF</span>
          </button>
        </div>
      </div>

      <div className={styles.contactBlock}>
        <h3 className={styles.title}>CONTACT US</h3>
        <a href="mailto:vasaproject407@gmail.com" className={styles.email}>
          vasaproject407@gmail.com
        </a>
        <div className={styles.logoContainer}>
          <Image src="/images/vasa-logo.png" alt="VASA Logo" width={80} height={80} />
        </div>
      </div>
    </footer>
  )
}