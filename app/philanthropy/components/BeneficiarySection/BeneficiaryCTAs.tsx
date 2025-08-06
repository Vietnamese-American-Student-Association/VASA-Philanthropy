import styles from './BeneficiaryCTAs.module.css'

export default function BeneficiaryCTAs() {
  return (
    <div className={styles.ctas}>
      {/* Later, wrap <button> in <Link href="..."> or add onClick */}
      <a href="https://www.vnah-hev.org/" className={styles.button}>BENEFICIARY WEBSITE</a>
      <a href="/donation" className={styles.button}>DONATE</a>
    </div>
  )
}