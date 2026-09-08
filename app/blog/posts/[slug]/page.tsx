import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Post } from '@/containers/post'
import { cachedClient } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PostQuery, PostsPathsQuery } from '@/sanity/lib/queries'

export async function generateStaticParams() {
  const posts = await cachedClient(PostsPathsQuery)

  return posts
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await cachedClient(PostQuery, params)

  if (!post) {
    return {
      title: 'Článek nenalezen',
      robots: { index: false, follow: false },
    }
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage) : undefined

  return {
    title: post.title,
    description: post.title,
    alternates: {
      canonical: `/blog/posts/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.title,
      url: `/blog/posts/${params.slug}`,
      type: 'article',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await cachedClient(PostQuery, params)

  if (!post) {
    notFound()
  }

  return (
    <main className='mt-32 xl:mt-16 mb-8'>
      <Post post={post} />
    </main>
  )
}

