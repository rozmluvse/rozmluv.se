import { Metadata } from 'next'
import { Story } from '@/containers/story'

export const metadata: Metadata = {
  title: 'Příběh studia',
  description:
    'Jak vzniklo jazykové studio rozmluv se v Klatovech. Poznejte Báru a naši vizi přirozené výuky cizích jazyků bez biflování ze sešitů.',
  alternates: {
    canonical: '/story',
  },
  openGraph: {
    title: 'Příběh studia | rozmluv se',
    description:
      'Jak vzniklo jazykové studio rozmluv se v Klatovech. Poznejte Báru a naši vizi přirozené výuky cizích jazyků bez biflování ze sešitů.',
    url: 'https://rozmluv.se/story',
  },
}

export default function Page() {
  return <Story />
}
