'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { Pricelist } from '@/containers/pricelist'
import { SectionTitle } from '@/components/section-title'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  languageItem: any
  pricelist: any[]
}

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

  const lectors = (languageItem.lectors || [])
    .map((item: any) => item.lector)
    .filter(Boolean)

  const whyCards = languageItem.whyCards || []

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
                {whyCards.map((card: any, index: number) => (
                  <div
                    key={`${languageItem.titleCz}-${card.titleCz || index}`}
                    style={{ backgroundColor: `#${card.color || languageItem.color || 'F6E5A0'}` }}
                    className='h-full rounded-2xl'
                  >
                    <div className='flex h-full min-h-52 flex-col px-6 py-8'>
                      <div className='font-labil text-sm font-bold uppercase tracking-[0.16em]'>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>

                      <h3 className='mt-5 text-left text-2xl font-black'>
                        {language === 'cz' && card.titleCz}
                        {language === 'en' && card.titleEn}
                        {language === 'de' && card.titleDe}
                        {language === 'ua' && card.titleUa}
                      </h3>

                      <p className='pt-4 font-stabil text-sm'>
                        {language === 'cz' && card.descriptionCz}
                        {language === 'en' && card.descriptionEn}
                        {language === 'de' && card.descriptionDe}
                        {language === 'ua' && card.descriptionUa}
                      </p>
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

      {lectors.length > 0 && (
        <section className='scroll-mt-28'>
          <Container>
            <Cols>
              <SectionTitle
                titleCz='Lektoři'
                titleEn='Lectors'
                titleDe='Lektor*innen'
                titleUa='Викладачі'
              />

              <div>
                <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                  {language === 'cz' && `Kdo tě provede jazykem ${languageItem.titleCz}`}
                  {language === 'en' &&
                    `Who will guide you through ${languageItem.titleEn}`}
                  {language === 'de' &&
                    `Wer dich durch ${languageItem.titleDe} begleitet`}
                  {language === 'ua' &&
                    `Хто допоможе тобі з ${languageItem.titleUa}`}
                </p>

                <div className='mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4'>
                  {lectors.map((lector: any) => (
                    <Link
                      key={lector.slug?.current || lector.name}
                      href={
                        lector.slug?.current
                          ? `/lectors/${lector.slug.current}`
                          : '#'
                      }
                      className='group rounded-2xl'
                    >
                      <div className='relative mb-4 aspect-[9/13.55] overflow-hidden rounded-3xl'>
                        <Image
                          src={urlForImage(lector.image)}
                          alt={lector.name}
                          fill
                          sizes='(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw'
                          className='rounded-3xl object-cover transition-opacity duration-200 group-hover:opacity-70'
                        />
                        <div className='pointer-events-none absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                          <div className='rounded-xl border-2 border-black bg-white px-5 py-2 font-labil text-lg font-bold text-black'>
                            {language === 'cz' && 'Poznej lektora*ku'}
                            {language === 'en' && 'Meet the lecturer'}
                            {language === 'de' &&
                              'Lerne den*die Lektor*in kennen'}
                            {language === 'ua' &&
                              'Познайомся з викладачем*кою'}
                          </div>
                        </div>
                      </div>
                      <h3 className='font-stabil'>{lector.name}</h3>
                      <p className='font-stabil'>
                        {language === 'cz' && lector.roleCz}
                        {language === 'en' && lector.roleEn}
                        {language === 'de' && lector.roleDe}
                        {language === 'ua' && lector.roleUa}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Cols>
          </Container>
        </section>
      )}

      <Pricelist data={pricelist} />
    </main>
  )
}
