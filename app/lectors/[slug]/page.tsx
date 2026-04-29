import { Lector } from '@/containers/lector'
import { cachedClient } from '@/sanity/lib/client'
import { LectorQuery, LectorsPathsQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const lectors = await cachedClient(LectorsPathsQuery)

  return lectors
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
