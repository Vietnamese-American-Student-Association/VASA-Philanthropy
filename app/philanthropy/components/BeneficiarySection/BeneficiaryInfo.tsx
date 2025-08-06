import Image from 'next/image'
import styles from './BeneficiaryInfo.module.css'

export default function BeneficiaryInfo() {
  return (
    <div className={styles.info}>
      <Image src="/images/VNAH.jpg" alt="VNAH team" width={500} height={300} />
      <div className={styles.text}>
        <p>Vietnam Assistance for the Handicapped (VNAH) is a U.S.–based nonprofit founded in 1991 to help people with disabilities and other disadvantaged groups in Vietnam achieve fuller participation in society. Working closely with Vietnamese ministries, local hospitals, and international donors, VNAH delivers rehabilitation services, provides assistive devices, offers vocational training and job placement, and advises on national disability laws and accessibility standards.</p>
        <br />
        <p>The impact is nationwide: more than 80,000 individuals have received direct assistance; 140 schools, 29 rehabilitation units, and 5 vocational training centers have been built or equipped; and 22,000 + doctors, therapists, and social workers have been trained. Millions more benefit from policy reforms VNAH helped shape. The organization continues to welcome rehabilitation professionals, disability-rights advocates, and volunteers eager to support its next phase of inclusive healthcare and empowerment initiatives in Vietnam.</p>
      </div>
    </div>
  )
}