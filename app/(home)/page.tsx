import { About } from '@/containers/about'
import { Companies } from '@/containers/companies'
import { Contact } from '@/containers/contact'
import { Hero } from '@/containers/hero'
import { HowItWorks } from '@/containers/how-it-works'
import { Languages } from '@/containers/languages'
import { Pricelist } from '@/containers/pricelist'
import { Reviews } from '@/containers/reviews'
import { cachedClient } from '@/sanity/lib/client'
import {
  CompaniesQuery,
  HowItWorksQuery,
  LanguagesQuery,
  LectorsQuery,
  PricelistQuery,
  ReviewsQuery,
} from '@/sanity/lib/queries'

export default async function Page() {
  const lectors = await cachedClient(LectorsQuery)
  const languages = await cachedClient(LanguagesQuery)
  const companies = await cachedClient(CompaniesQuery)
  const reviews = await cachedClient(ReviewsQuery)
  const pricelist = await cachedClient(PricelistQuery)
  const howItWorks = await cachedClient(HowItWorksQuery)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'rozmluv se',
    alternateName: 'Jazykové studio rozmluv se',
    legalName: 'Rozmluv se, s. r. o.',
    url: 'https://rozmluv.se',
    logo: 'https://rozmluv.se/apple-icon.png',
    description:
      'Jazykovka v Klatovech i online. Individuální a skupinové kurzy angličtiny, němčiny, španělštiny a dalších jazyků.',
    email: 'ciao@rozmluv.se',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pavlíkova 7',
      addressLocality: 'Klatovy',
      postalCode: '339 01',
      addressCountry: 'CZ',
    },
    sameAs: [
      'https://www.facebook.com/rozmluv.se',
      'https://www.instagram.com/rozmluv.se/',
      'https://www.linkedin.com/company/rozmluv-se/',
      'https://www.tiktok.com/@rozmluv.se',
    ],
  }

  return (
    <main className='mt-32 xl:mt-24 space-y-16 xl:space-y-24 mb-8'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Languages languages={languages} />
      <Pricelist data={pricelist} />
      {howItWorks && <HowItWorks data={howItWorks} />}
      <Reviews reviews={reviews} />
      <About lectors={lectors} />
      <Companies companies={companies} />
      <Contact />
    </main>
  )
}

