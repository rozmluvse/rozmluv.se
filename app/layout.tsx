import './globals.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Newsletter } from '@/components/newsletter'
import { Cookies } from '@/components/cookies'
import { FacebookProvider } from '@/providers/facebook-provider'
import { GoogleAnalyticsProvider } from '@/providers/google-analytics-provider'
import { RemoveOneLetterWords } from '@/providers/remove-one-letter-words'

export const revalidate = 60

const stabil = localFont({
  src: '../fonts/StabilGrotesk-Regular.otf',
  variable: '--font-stabil',
})

const labil = localFont({
  src: '../fonts/LabilGrotesk-Bold.otf',
  variable: '--font-labil',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rozmluv.se'),
  title: {
    default: 'Jazykové studio | rozmluv se',
    template: '%s | rozmluv se',
  },
  description:
    'Jazykovka, kde se rozmluvíš nejen anglicky a německy, ale třeba i španělsky. Online odkudkoli nebo naživo v Klatovech. Individuálně, ve dvojicích nebo v malé skupince.',
  authors: [{ name: 'Daniel Anthony Baudyš', url: 'https://baudys.dev' }],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Jazykové studio | rozmluv se',
    description:
      'Jazykovka, kde se rozmluvíš nejen anglicky a německy, ale třeba i španělsky. Online odkudkoli nebo naživo v Klatovech.',
    url: 'https://rozmluv.se',
    siteName: 'rozmluv se',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='cs' suppressHydrationWarning>
      <GoogleAnalyticsProvider />
      <FacebookProvider />

      <body className={cn('font-labil', stabil.variable, labil.variable)}>
        {children}

        <Newsletter />
        <Cookies />

        <RemoveOneLetterWords />
      </body>
    </html>
  )
}
