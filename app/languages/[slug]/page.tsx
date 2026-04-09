import { notFound } from 'next/navigation'
import { LanguagePage } from '@/containers/language-page'
import { cachedClient } from '@/sanity/lib/client'
import {
  LanguageQuery,
  LanguagesPathsQuery,
  PricelistQuery,
} from '@/sanity/lib/queries'

export async function generateStaticParams() {
  return cachedClient(LanguagesPathsQuery)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const languageItem = await cachedClient(LanguageQuery, params)
  const pricelist = await cachedClient(PricelistQuery)

  if (!languageItem) {
    notFound()
  }

  return <LanguagePage languageItem={languageItem} pricelist={pricelist} />
}
