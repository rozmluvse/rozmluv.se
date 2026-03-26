'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { Pricelist } from '@/containers/pricelist'
import { SectionTitle } from '@/components/section-title'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  languageItem: any
  pricelist: any[]
}

export const LanguagePage = ({ languageItem, pricelist }: Props) => {
  const { language } = useLanguage()
  const [lectorsPerPage, setLectorsPerPage] = useState(4)
  const [lectorsPage, setLectorsPage] = useState(0)
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
  const lectorsPagesCount = Math.ceil(lectors.length / lectorsPerPage)
  const visibleLectors = lectors.slice(
    lectorsPage * lectorsPerPage,
    (lectorsPage + 1) * lectorsPerPage
  )

  useEffect(() => {
    const updateLectorsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setLectorsPerPage(4)
        return
      }

      if (window.innerWidth >= 640) {
        setLectorsPerPage(3)
        return
      }

      setLectorsPerPage(2)
    }

    updateLectorsPerPage()
    window.addEventListener('resize', updateLectorsPerPage)

    return () => window.removeEventListener('resize', updateLectorsPerPage)
  }, [])

  useEffect(() => {
    setLectorsPage(0)
  }, [lectorsPerPage, languageItem.slug?.current])

  useEffect(() => {
    if (lectorsPagesCount === 0) return

    setLectorsPage((page) => Math.min(page, lectorsPagesCount - 1))
  }, [lectorsPagesCount])

  const renderWhyCard = (card: any, index: number, keySuffix = '') => (
    <div
      key={`${languageItem.titleCz}-${card.titleCz || index}${keySuffix}`}
      style={{
        backgroundColor: `#${card.color || languageItem.color || 'F6E5A0'}`,
      }}
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
  )

  const renderLectorCard = (lector: any, keySuffix = '') => (
    <Link
      key={`${lector.slug?.current || lector.name}${keySuffix}`}
      href={lector.slug?.current ? `/lectors/${lector.slug.current}` : '#'}
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
            {language === 'de' && 'Lerne den*die Lektor*in kennen'}
            {language === 'ua' && 'Познайомся з викладачем*кою'}
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
  )

  return (
    <main className='mb-8 mt-32 space-y-16 xl:mt-24 xl:space-y-24'>
      <section className='scroll-mt-44'>
        <Container>
          <Cols>
            <Link
              href='/#languages'
              className='flex items-center gap-1 self-start font-stabil text-lg'
            >
              <ArrowLeft size={18} />
              {language === 'cz' && 'Zpět'}
              {language === 'en' && 'Back'}
              {language === 'de' && 'Zurück'}
              {language === 'ua' && 'Назад'}
            </Link>
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
            </div>
          </Cols>

          <Cols>
            <div />
            <div>
              <div className='mt-14 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-4'>
                {whyCards.map((card: any, index: number) =>
                  renderWhyCard(card, index)
                )}
              </div>

              <Link href='/#contact' className={ctaClassName}>
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
                  {language === 'cz' &&
                    `Kdo tě provede jazykem ${languageItem.titleCz}`}
                  {language === 'en' &&
                    `Who will guide you through ${languageItem.titleEn}`}
                  {language === 'de' &&
                    `Wer dich durch ${languageItem.titleDe} begleitet`}
                  {language === 'ua' &&
                    `Хто допоможе тобі з ${languageItem.titleUa}`}
                </p>
              </div>
            </Cols>

            <Cols>
              <div />
              <div className='mt-14'>
                <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4'>
                  {visibleLectors.map((lector: any) =>
                    renderLectorCard(lector, '-carousel')
                  )}
                </div>

                {lectorsPagesCount > 1 && (
                  <div className='mt-6 flex items-center gap-2'>
                    <button
                      type='button'
                      onClick={() =>
                        setLectorsPage((page) => Math.max(page - 1, 0))
                      }
                      className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white'
                      aria-label={
                        language === 'cz'
                          ? 'Předchozí lektoři'
                          : language === 'en'
                            ? 'Previous lectors'
                            : language === 'de'
                              ? 'Vorherige Lektor*innen'
                              : 'Попередні викладачі'
                      }
                      disabled={lectorsPage === 0}
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      type='button'
                      onClick={() =>
                        setLectorsPage((page) =>
                          Math.min(page + 1, lectorsPagesCount - 1)
                        )
                      }
                      className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white'
                      aria-label={
                        language === 'cz'
                          ? 'Další lektoři'
                          : language === 'en'
                            ? 'Next lectors'
                            : language === 'de'
                              ? 'Nächste Lektor*innen'
                              : 'Наступні викладачі'
                      }
                      disabled={lectorsPage === lectorsPagesCount - 1}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            </Cols>
          </Container>
        </section>
      )}

      <Pricelist data={pricelist} />

      <section className='scroll-mt-28'>
        <Container>
          <div className='rounded-lg bg-[#FFC900] px-6 py-8 sm:px-10 lg:px-14'>
            <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
              <h2 className='font-labil text-3xl font-bold leading-tight text-black md:text-4xl xl:text-[40px] xl:leading-[1.3]'>
                {language === 'cz' && 'Zajímají tě i jiné jazyky?'}
                {language === 'en' &&
                  'Are you interested in other languages too?'}
                {language === 'de' &&
                  'Interessierst du dich auch für andere Sprachen?'}
                {language === 'ua' && 'Тебе цікавлять також інші мови?'}
              </h2>

              <Link
                href='/#languages'
                className='inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
              >
                {language === 'cz' && 'Výběr jazyka'}
                {language === 'en' && 'Select language'}
                {language === 'de' && 'Sprache wählen'}
                {language === 'ua' && 'Вибір мови'}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
