import { redirect, notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { RedirectsQuery } from '@/sanity/lib/queries'

type Redirect = {
  source: string
  destination: string
  permanent: boolean
}

async function getRedirects(): Promise<Redirect[]> {
  return client.fetch(RedirectsQuery, {}, { next: { revalidate: 60 } })
}

export default async function CatchAllPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const path = '/' + params.slug.join('/')
  const redirects = await getRedirects()

  const match = redirects.find(
    (r) => r.source.toLowerCase() === path.toLowerCase()
  )

  if (match) {
    redirect(match.destination)
  }

  notFound()
}
