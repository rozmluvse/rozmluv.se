'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { ArrowLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export const Lector = ({ lector }: { lector: any }) => {
  const { language } = useLanguage()
  const searchParams = useSearchParams()
  const backHref = searchParams.get('from') || '/#about'

  return (
    <main className='mt-32 lg:mt-0'>
      <Container className='min-h-screen grid place-content-center'>
        <Cols>
          <Link
            href={backHref}
            className='flex gap-1 items-center font-stabil text-lg'
          >
            Zpět <ArrowLeft size={18} />
          </Link>

          <div className='lg:grid grid-cols-[2fr_1fr] hidden gap-10'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-5xl mb-2'>{lector.name}</h3>
              <p className='font-stabil mb-6 text-lg'>
                {language === 'cz' && lector.roleCz}
                {language === 'en' && lector.roleEn}
                {language === 'de' && lector.roleDe}
                {language === 'ua' && lector.roleUa}
              </p>
              <p className='font-stabil text-lg'>
                {language === 'cz' && lector.bioCz}
                {language === 'en' && lector.bioEn}
                {language === 'de' && lector.bioDe}
                {language === 'ua' && lector.bioUa}
              </p>
            </div>

            <img
              src={urlForImage(lector.altImage)}
              className='rounded-3xl mb-2'
            />
          </div>

          <div className='flex flex-col lg:hidden'>
            <h3 className='text-3xl mb-2'>{lector.name}</h3>
            <p className='font-stabil mb-6'>
              {language === 'cz' && lector.roleCz}
              {language === 'en' && lector.roleEn}
              {language === 'de' && lector.roleDe}
              {language === 'ua' && lector.roleUa}
            </p>
            <img
              src={urlForImage(lector.altImage)}
              className='rounded-3xl mb-2'
            />
            <p className='font-stabil text-lg'>
              {language === 'cz' && lector.bioCz}
              {language === 'en' && lector.bioEn}
              {language === 'de' && lector.bioDe}
              {language === 'ua' && lector.bioUa}
            </p>
          </div>
        </Cols>
      </Container>
    </main>
  )
}
