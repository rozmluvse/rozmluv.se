import { Metadata } from 'next'
import { ForLectors } from '@/containers/for-lectors'
import { cachedClient } from '@/sanity/lib/client'
import { ForLectorsPageQuery, LookingForQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Hledáme lektory',
  description:
    'Přidej se do týmu lektorů v rozmluv se. Uč jazyky moderně, online odkudkoli nebo naživo v Klatovech.',
  alternates: {
    canonical: '/for-lectors',
  },
  openGraph: {
    title: 'Hledáme lektory | rozmluv se',
    description:
      'Přidej se do týmu lektorů v rozmluv se. Uč jazyky moderně, online odkudkoli nebo naživo v Klatovech.',
    url: 'https://rozmluv.se/for-lectors',
  },
}


export default async function Page() {
  const page = await cachedClient(ForLectorsPageQuery)
  const lookingFor = await cachedClient(LookingForQuery)

  if (!page) {
    notFound()
  }

  return (
    <main className='mt-28 md:mt-32 min-h-screen mb-8'>
      <ForLectors page={page} lookingFor={lookingFor} />
    </main>
  )
}
