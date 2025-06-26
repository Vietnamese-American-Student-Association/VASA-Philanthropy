import Image from 'next/image'
import styles from './BeneficiaryInfo.module.css'

export default function BeneficiaryInfo() {
  return (
    <div className={styles.info}>
      <Image src="/images/vhc-group.png" alt="VHC team" width={500} height={300} />
      <div className={styles.text}>
        <p>Vietnam Health Clinic (VHC) is a nonprofit organization founded in 2009 with the mission of providing accessible healthcare to underserved communities in Vietnam. The organization runs annual student-led mobile clinics offering services such as primary care, dental care, optometry, physical therapy, pharmacy, and public health education.</p>
        <p>In addition to its mobile clinics, VHC supports chronic disease management through programs like free cataract surgeries and a forthcoming hypertension care initiative. The organization emphasizes hands-on learning and cross-cultural experience, and is currently seeking dental professionals to join the team.</p>
      </div>
    </div>
  )
}