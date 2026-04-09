import { Footer } from '@/components/footer'
import { Navbar } from '@/components/nav/navbar'
import { cachedClient } from '@/sanity/lib/client'
import { PostsQuery } from '@/sanity/lib/queries'

interface Props {
  children: React.ReactNode
}

export async function PublicLayout({ children }: Props) {
  const posts = await cachedClient(PostsQuery)

  return (
    <>
      <Navbar posts={posts} />
      {children}
      <Footer />
    </>
  )
}
