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

  return (
    <main className='mt-32 xl:mt-24 space-y-16 xl:space-y-24 mb-8'>
      <Hero />
      <Languages languages={languages} />
      <Pricelist data={pricelist} />
      <HowItWorks />
      <Reviews reviews={reviews} />
      <About lectors={lectors} />
      <Companies companies={companies} />
      <Contact />
    </main>
  )
}
