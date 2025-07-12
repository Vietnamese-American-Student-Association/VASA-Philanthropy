import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata = {
  title: 'VASA Philanthropy',
  description: 'Collective Philanthropy Project — UCF VASA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
     </div>
  )
}