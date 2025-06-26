import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata = {
  title: 'VASA Philanthropy',
  description: 'Collective Philanthropy Project — UCF VASA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}