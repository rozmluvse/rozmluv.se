import { Metadata } from 'next'
import { Lector } from '@/containers/lector'
import { cachedClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { LectorQuery, LectorsPathsQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const lectors = await cachedClient(LectorsPathsQuery)

  return lectors
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const lector = await cachedClient(LectorQuery, params)

  if (!lector) {
    return {
      title: 'Lektor nenalezen',
      robots: { index: false, follow: false },
    }
  }

  const title = `${lector.name} - Lektor*ka`
  const description =
    lector.bioCz ||
    lector.roleCz ||
    `Lektor*ka ${lector.name} v jazykovém studiu rozmluv se.`
  const imageUrl = lector.image ? urlForImage(lector.image) : undefined

  return {
    title,
    description,
    alternates: {
      canonical: `/lectors/${params.slug}`,
    },
    openGraph: {
      title: `${title} | rozmluv se`,
      description,
      url: `/lectors/${params.slug}`,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  }
}


export default async function Page({ params }: { params: any }) {
  const lector = await cachedClient(LectorQuery, params)

  if (!lector) {
    notFound()
  }

  return (
    <Suspense>
      <Lector lector={lector} />
    </Suspense>
  )
}
