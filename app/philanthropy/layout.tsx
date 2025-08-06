"use client";
import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import useIsMobile from '../hooks/useIsMobile'
import MobileFooter from '../components/MobileFooter'
import MobileHeader from '../components/MobileHeader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const IsMobile = useIsMobile();
  return (
    <div>
        {IsMobile? <MobileHeader/>:<Header/>}
        {children}
        {IsMobile? <MobileFooter/>:<Footer/>}
     </div>
  )
}