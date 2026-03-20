'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { Pricelist } from '@/containers/pricelist'
import { SectionTitle } from '@/components/section-title'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

interface Props {
  languageItem: any
  pricelist: any[]
}

const WHY_CARDS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
]

export const LanguagePage = ({ languageItem, pricelist }: Props) => {
  const { language } = useLanguage()
  const ctaClassName =
    'mt-8 inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'

  const title =
    (language === 'cz' && languageItem.titleCz) ||
    (language === 'en' && languageItem.titleEn) ||
    (language === 'de' && languageItem.titleDe) ||
    (language === 'ua' && languageItem.titleUa) ||
    languageItem.titleCz

  const subtitle =
    (language === 'cz' && languageItem.subtitleCz) ||
    (language === 'en' && languageItem.subtitleEn) ||
    (language === 'de' && languageItem.subtitleDe) ||
    (language === 'ua' && languageItem.subtitleUa) ||
    languageItem.subtitleCz

  const whyTitle =
    language === 'cz'
      ? `Proč ${languageItem.titleCz}`
      : language === 'en'
        ? `Why ${languageItem.titleEn}`
        : language === 'de'
          ? `Warum ${languageItem.titleDe}`
          : `Чому ${languageItem.titleUa}`

  return (
    <main className='mb-8 mt-32 space-y-16 xl:mt-24 xl:space-y-24'>
      <section className='scroll-mt-44'>
        <Container>
          <Cols>
            <div />
            <div>
              <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl'>
                {title}
              </h1>
              {subtitle && (
                <p className='mt-6 max-w-3xl font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                  {subtitle}
                </p>
              )}
            </div>
          </Cols>
        </Container>
      </section>

      <section className='scroll-mt-28'>
        <Container>
          <Cols>
            <SectionTitle
              titleCz='Proč tento jazyk?'
              titleEn='Why this language?'
              titleDe='Warum diese Sprache?'
              titleUa='Чому ця мова?'
            />

            <div>
              <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                {whyTitle}
              </p>

              <div className='mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
                {WHY_CARDS.map((cardText, index) => (
                  <div
                    key={`${languageItem.titleCz}-${index}`}
                    style={{ backgroundColor: `#${languageItem.color || 'F6E5A0'}` }}
                    className='h-full rounded-2xl'
                  >
                    <div className='flex h-full min-h-52 flex-col px-6 py-8'>
                      <div className='font-labil text-sm font-bold uppercase tracking-[0.16em]'>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>

                      <h3 className='mt-5 text-left text-2xl font-black'>
                        {whyTitle}
                      </h3>

                      <p className='pt-4 font-stabil text-sm'>{cardText}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href='/#contact'
                className={ctaClassName}
              >
                {language === 'cz' && 'Chci se rozmluvit →'}
                {language === 'en' && 'I want to start speaking →'}
                {language === 'de' && 'Ich will sprechen lernen →'}
                {language === 'ua' && 'Хочу почати говорити →'}
              </Link>
            </div>
          </Cols>
        </Container>
      </section>

      <Pricelist data={pricelist} />
    </main>
  )
}
