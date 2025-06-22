import styles from './BeneficiaryCTAs.module.css'

export default function BeneficiaryCTAs() {
  return (
    <div className={styles.ctas}>
      {/* Later, wrap <button> in <Link href="..."> or add onClick */}
      <button className={styles.button}>BENEFICIARY WEBSITE</button>
      <button className={styles.button}>DONATE</button>
    </div>
  )
}