import HeroBanner from './components/HeroBanner'
import IntroSection from './components/IntroSection'
import HistorySection from './components/HistorySection'
import BeneficiarySection from './components/BeneficiarySection/BeneficiarySection'
import ContributionGallery from './components/ContributionGallery'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <IntroSection />
      <HistorySection />
      <BeneficiarySection />
      <ContributionGallery />
    </>
  )
}