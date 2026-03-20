import './globals.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Newsletter } from '@/components/newsletter'
import { RemoveOneLetterWords } from '@/providers/remove-one-letter-words'
import { Cookies } from '@/components/cookies'
import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'
import { GoogleAnalyticsProvider } from '@/providers/google-analytics-provider'
import { Metadata } from 'next'
import { FacebookProvider } from '@/providers/facebook-provider'
import { LayoutShell } from '@/components/layout-shell'

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
  title: 'Jazykové studio | rozmluv se',
  description:
    'Jazykovka, kde se rozmluvíš nejen anglicky a německy, ale třeba i španělsky. Online odkudkoli nebo naživo v Klatovech. Individuálně, ve dvojicích nebo v malé skupince.',
  authors: [{ name: 'Daniel Anthony Baudyš', url: 'https://baudys.dev' }],
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = await cachedClient(PostsQuery)

  return (
    <html lang='en' suppressHydrationWarning>
      <GoogleAnalyticsProvider />
      <FacebookProvider />

      <body className={cn('font-labil', stabil.variable, labil.variable)}>
        <LayoutShell posts={posts}>{children}</LayoutShell>

        <Newsletter />
        <Cookies />

        <RemoveOneLetterWords />
      </body>
    </html>
  )
}
