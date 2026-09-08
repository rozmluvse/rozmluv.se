import { Metadata } from 'next'
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const languageItem = await cachedClient(LanguageQuery, params)

  if (!languageItem) {
    return {
      title: 'Jazykový kurz nenalezen',
      robots: { index: false, follow: false },
    }
  }

  const titleName = languageItem.titleCz || 'jazyka'
  const title = `Kurzy a výuka: ${titleName}`
  const description =
    languageItem.subtitleCz ||
    languageItem.whyDescriptionCz ||
    `Individuální i skupinové kurzy pro ${titleName} naživo v Klatovech nebo online odkudkoli.`

  return {
    title,
    description,
    alternates: {
      canonical: `/languages/${params.slug}`,
    },
    openGraph: {
      title: `${title} | rozmluv se`,
      description,
      url: `/languages/${params.slug}`,
    },
  }
}


export default async function Page({ params }: { params: { slug: string } }) {
  const languageItem = await cachedClient(LanguageQuery, params)
  const pricelist = await cachedClient(PricelistQuery)

  if (!languageItem) {
    notFound()
  }

  return <LanguagePage languageItem={languageItem} pricelist={pricelist} />
}
