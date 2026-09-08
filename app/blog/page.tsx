import { Metadata } from 'next'
import { Categories } from '@/containers/categories'
import { cachedClient } from '@/sanity/lib/client'
import { CategoriesQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Blog a tipy na jazyky',
  description:
    'Tipy, triky a inspirace pro efektivní studium cizích jazyků od lektorů jazykového studia rozmluv se v Klatovech.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog a tipy na jazyky | rozmluv se',
    description:
      'Tipy, triky a inspirace pro efektivní studium cizích jazyků od lektorů jazykového studia rozmluv se.',
    url: 'https://rozmluv.se/blog',
  },
}


export default async function Page() {
  const categories = await cachedClient(CategoriesQuery)

  return (
    <main className='mt-32 xl:mt-24 mb-8'>
      <Categories categories={categories} />
    </main>
  )
}
