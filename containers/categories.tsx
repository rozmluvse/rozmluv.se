'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  categories: any
}

export const Categories = ({ categories }: Props) => {
  const { language } = useLanguage()

  return (
    <section className='min-h-[75vh] scroll-mt-28'>
      <Container>
        <Cols>
          <div />
          <h1 className='py-2 text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>
            {language === 'cz' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
            {language === 'en' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
            {language === 'de' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
            {language === 'ua' && (
              <>
                Blog, kde občas <br />
                píšeme fajn věci
              </>
            )}
          </h1>
        </Cols>

        <div className='mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8'>
          {categories.map((item: any) => (
            <Link
              key={item.title}
              href={`/blog/posts?category=${item.title}`}
              style={{ background: `#${item.color}` }}
              className={cn(
                'flex items-center justify-between rounded-2xl px-9 py-6 text-2xl font-black',
                item.disabled && 'pointer-events-none',
                !item.disabled && 'ffs-12-hover',
              )}
            >
              <Image
                src={urlForImage(item.image)}
                alt={item.title}
                className='size-10'
              />
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
