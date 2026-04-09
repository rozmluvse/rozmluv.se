import { PublicLayout } from '@/components/public-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | rozmluv se',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>
}
