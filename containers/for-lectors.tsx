'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { useLanguage } from '@/store/use-language'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const ForLectors = ({
  page,
  lookingFor,
}: {
  page: any
  lookingFor: any[]
}) => {
  const { language } = useLanguage()

  const title =
    (language === 'cz' && page?.titleCz) ||
    (language === 'en' && page?.titleEn) ||
    (language === 'de' && page?.titleDe) ||
    (language === 'ua' && page?.titleUa)

  const subtitle =
    (language === 'cz' && page?.subtitleCz) ||
    (language === 'en' && page?.subtitleEn) ||
    (language === 'de' && page?.subtitleDe) ||
    (language === 'ua' && page?.subtitleUa)

  const whyDescription =
    (language === 'cz' && page?.whyDescriptionCz) ||
    (language === 'en' && page?.whyDescriptionEn) ||
    (language === 'de' && page?.whyDescriptionDe) ||
    (language === 'ua' && page?.whyDescriptionUa)

  const whyCards = page?.whyCards || []

  const extraSectionTitle =
    (language === 'cz' && page?.extraSectionTitleCz) ||
    (language === 'en' && page?.extraSectionTitleEn) ||
    (language === 'de' && page?.extraSectionTitleDe) ||
    (language === 'ua' && page?.extraSectionTitleUa)

  const extraSectionDescription =
    (language === 'cz' && page?.extraSectionDescriptionCz) ||
    (language === 'en' && page?.extraSectionDescriptionEn) ||
    (language === 'de' && page?.extraSectionDescriptionDe) ||
    (language === 'ua' && page?.extraSectionDescriptionUa)

  const extraCards = page?.extraCards || []

  const renderCard = (card: any, index: number, fallbackColor = 'F6E5A0') => (
    <div
      key={`${card.titleCz || index}-${index}`}
      style={{ backgroundColor: `#${card.color || fallbackColor}` }}
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

  return (
    <>
      <section className='scroll-mt-44'>
        <Container>
          <Cols>
            <Link
              href='/#about'
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

      {whyCards.length > 0 && (
        <section className='scroll-mt-28 mt-16 xl:mt-24'>
          <Container>
            <Cols>
              <SectionTitle
                titleCz='Proč u nás?'
                titleEn='Why with us?'
                titleDe='Warum bei uns?'
                titleUa='Чому у нас?'
              />

              <div>
                {whyDescription && (
                  <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                    {whyDescription}
                  </p>
                )}
              </div>
            </Cols>

            <div className='mt-14 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-3 xl:gap-6'>
              {whyCards.map((card: any, index: number) =>
                renderCard(card, index)
              )}
            </div>
          </Container>
        </section>
      )}

      <section className='scroll-mt-28 mt-16 xl:mt-24'>
        <Container>
          <Cols>
            <SectionTitle
              titleCz='Otevřené pozice'
              titleEn='Open positions'
              titleDe='Offene Positionen'
              titleUa='Відкриті позиції'
            />

            <div>
              <Accordion type='multiple' className='flex flex-col gap-4 xl:gap-6'>
                {lookingFor.map((item: any, index: number) => (
                  <AccordionItem
                    key={item.titleCz + item.textCz + index}
                    value={item.titleCz || item.textCz || `${index}`}
                    style={{ backgroundColor: `#${item.color || 'F6E5A0'}` }}
                    className='rounded-2xl'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.titleCz}
                        {language === 'en' && item.titleEn}
                        {language === 'de' && item.titleDe}
                        {language === 'ua' && item.titleUa}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {language === 'cz' && item.textCz}
                      {language === 'en' && item.textEn}
                      {language === 'de' && item.textDe}
                      {language === 'ua' && item.textUa}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Cols>
        </Container>
      </section>

      {extraCards.length > 0 && (
        <section className='scroll-mt-28 mt-16 xl:mt-24'>
          <Container>
            <Cols>
              <SectionTitle
                titleCz={page?.extraSectionTitleCz || 'Další důvody'}
                titleEn={page?.extraSectionTitleEn || 'More reasons'}
                titleDe={page?.extraSectionTitleDe || 'Weitere Gründe'}
                titleUa={page?.extraSectionTitleUa || 'Ще причини'}
              />

              <div>
                {extraSectionDescription && (
                  <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                    {extraSectionDescription}
                  </p>
                )}
              </div>
            </Cols>

            <div className='mt-14 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-3 xl:gap-6'>
              {extraCards.map((card: any, index: number) =>
                renderCard(card, index, 'C8E6C9')
              )}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
