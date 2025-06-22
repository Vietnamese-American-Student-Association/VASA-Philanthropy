import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>UCF VIETNAMESE AMERICAN STUDENT ASSOCIATION</div>
      <ul className={styles.links}>
        <li><Link href="/about">ABOUT US</Link></li>
        <li><Link href="/officers">OFFICERS</Link></li>
        <li><Link href="/philanthropy">PHILANTHROPY</Link></li>
        <li><Link href="/donate">DONATE</Link></li>
      </ul>
    </nav>
  )
}