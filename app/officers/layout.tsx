import '../global.css';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'VASA Officers',
  description: 'UCF Vietnamese American Student Association Officers',
}

export default function OfficersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>{children}</div>
    </div>
  )
}
