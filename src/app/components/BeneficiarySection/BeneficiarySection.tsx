import styles from './BeneficiarySection.module.css'
import BeneficiaryInfo from './BeneficiaryInfo'
import BeneficiaryCTAs from './BeneficiaryCTAs'

export default function BeneficiarySection() {
  return (
    <section className={styles.beneficiary}>
      <h2>2025–2026 BENEFICIARY</h2>
      <BeneficiaryInfo />
      <BeneficiaryCTAs />
    </section>
  )
}