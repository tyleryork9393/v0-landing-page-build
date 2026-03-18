import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shield Peak Roofing | Storm Damage Experts & Insurance Claim Specialists',
  description:
    'Professional roofing services with 100% insurance claim success rate. Free inspections, storm damage repair, and full roof replacements. Serving homeowners with premium quality.',
  keywords: [
    'roofing',
    'storm damage',
    'insurance claims',
    'roof replacement',
    'roof repair',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
