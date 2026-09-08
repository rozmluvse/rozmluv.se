import Link from 'next/link'
import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stránka nenalezena (404)',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className='min-h-[60vh] flex items-center justify-center py-32'>
      <Container className='text-center space-y-6'>
        <span className='text-6xl sm:text-8xl font-black font-labil text-[#FFC600]'>
          404
        </span>
        <h1 className='text-2xl sm:text-4xl font-black font-labil'>
          Stránka nenalezena
        </h1>
        <p className='font-stabil text-lg text-neutral-600 max-w-md mx-auto'>
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <div>
          <Button asChild className='rounded-full px-8 py-6 text-lg'>
            <Link href='/'>Zpět na úvodní stránku</Link>
          </Button>
        </div>
      </Container>
    </main>
  )
}
