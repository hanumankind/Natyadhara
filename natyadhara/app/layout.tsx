import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Mukta } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mukta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Natyadhara Nirthya Peetam | Bharatanatyam Academy',
  description:
    'A Bharatanatyam dance academy under the guidance of Ms. Monicaa. Training in the traditional Pandanallur & Vazhuvoor styles for ages 4 and above in Noombal, Chennai.',
  generator: 'v0.app',
  keywords: [
    'Bharatanatyam',
    'dance academy',
    'Chennai',
    'classical dance',
    'Natyadhara Nirthya Peetam',
    'Pandanallur',
    'Vazhuvoor',
  ],
  openGraph: {
    title: 'Natyadhara Nirthya Peetam | Bharatanatyam Academy',
    description:
      'Step into the divine world of classical dance under the guidance of Ms. Monicaa.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5a1414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mukta.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
