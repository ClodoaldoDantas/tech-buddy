import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech Buddy',
  description: 'Avaliação de tecnologias e ferramentas',
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${spaceGrotesk.variable} font-app bg-gray-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
