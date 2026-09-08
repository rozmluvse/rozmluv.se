import { Metadata } from 'next'
import { PersonalInfo } from '@/containers/personal-info'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů (GDPR)',
  description:
    'Zásady zpracování a ochrany osobních údajů v souladu s GDPR v jazykovém studiu Rozmluv se, s. r. o., Klatovy.',
  alternates: {
    canonical: '/personal-info',
  },
  openGraph: {
    title: 'Ochrana osobních údajů (GDPR) | rozmluv se',
    description:
      'Zásady zpracování a ochrany osobních údajů v souladu s GDPR v jazykovém studiu Rozmluv se, s. r. o., Klatovy.',
    url: 'https://rozmluv.se/personal-info',
  },
}

export default function Page() {
  return <PersonalInfo />
}
