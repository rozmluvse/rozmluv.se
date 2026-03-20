'use client'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/nav/navbar'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
  posts: any
}

export const LayoutShell = ({ children, posts }: Props) => {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar posts={posts} />
      {children}
      <Footer />
    </>
  )
}
