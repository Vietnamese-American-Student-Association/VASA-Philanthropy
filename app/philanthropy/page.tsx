import HeroBanner from './components/HeroBanner'
import IntroSection from './components/IntroSection'
import HistorySection from './components/HistorySection'
import BeneficiarySection from './components/BeneficiarySection/BeneficiarySection'
import ContributionGallery from './components/ContributionGallery'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <IntroSection />
      <HistorySection />
      <BeneficiarySection />
      <ContributionGallery />
    </div>
  )
}