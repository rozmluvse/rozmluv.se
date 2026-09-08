import { Metadata } from 'next'
import { Posts } from '@/containers/posts'
import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Všechny příspěvky na blogu',
  description:
    'Kompletní archiv článků a průvodců studiem cizích jazyků od týmu rozmluv se.',
  alternates: {
    canonical: '/blog/posts',
  },
  openGraph: {
    title: 'Všechny příspěvky na blogu | rozmluv se',
    description:
      'Kompletní archiv článků a průvodců studiem cizích jazyků od týmu rozmluv se.',
    url: 'https://rozmluv.se/blog/posts',
  },
}


export default async function Page() {
  const posts = await cachedClient(PostsQuery)

  return (
    <main className='mt-32 xl:mt-16 mb-8'>
      <Suspense fallback={<Loader2 className='animate-spin' />}>
        <Posts posts={posts} />
      </Suspense>
    </main>
  )
}
