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

const getLocalizedValue = (
  language: string,
  values: Record<string, string | undefined>,
  fallback = '',
) => values[language] || values.cz || fallback

export const ForLectors = ({
  page,
  lookingFor,
}: {
  page: any
  lookingFor: any[]
}) => {
  const { language } = useLanguage()

  const title = getLocalizedValue(language, {
    cz: page?.titleCz,
    en: page?.titleEn,
    de: page?.titleDe,
    ua: page?.titleUa,
  })

  const subtitle = getLocalizedValue(language, {
    cz: page?.subtitleCz,
    en: page?.subtitleEn,
    de: page?.subtitleDe,
    ua: page?.subtitleUa,
  })

  const whyDescription = getLocalizedValue(language, {
    cz: page?.whyDescriptionCz,
    en: page?.whyDescriptionEn,
    de: page?.whyDescriptionDe,
    ua: page?.whyDescriptionUa,
  })

  const whyCards = page?.whyCards || []

  const positionsDescription = getLocalizedValue(
    language,
    {
      cz: page?.positionsDescriptionCz,
      en: page?.positionsDescriptionEn,
      de: page?.positionsDescriptionDe,
      ua: page?.positionsDescriptionUa,
    },
    getLocalizedValue(language, {
      cz: 'Seznam volných pozic v naší jazykové škole.',
      en: 'A list of open positions in our language school.',
      de: 'Eine Liste offener Stellen in unserer Sprachschule.',
      ua: 'Список відкритих позицій у нашій мовній школі.',
    }),
  )

  const extraSectionDescription = getLocalizedValue(language, {
    cz: page?.extraSectionDescriptionCz,
    en: page?.extraSectionDescriptionEn,
    de: page?.extraSectionDescriptionDe,
    ua: page?.extraSectionDescriptionUa,
  })

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
          {getLocalizedValue(language, {
            cz: card.titleCz,
            en: card.titleEn,
            de: card.titleDe,
            ua: card.titleUa,
          })}
        </h3>

        <p className='pt-4 font-stabil text-sm'>
          {getLocalizedValue(language, {
            cz: card.descriptionCz,
            en: card.descriptionEn,
            de: card.descriptionDe,
            ua: card.descriptionUa,
          })}
        </p>
      </div>
    </div>
  )

  const renderCards = (cards: any[], fallbackColor: string) =>
    cards.map((card: any, index: number) =>
      renderCard(card, index, fallbackColor),
    )

  const renderAccordionEntry = (
    item: any,
    index: number,
    keySuffix = '',
    valueSuffix = '',
  ) => {
    const baseKey = item._id || item.titleCz || item.textCz || `${index}`

    return (
      <AccordionItem
        key={`${baseKey}${keySuffix}`}
        value={`${baseKey}${valueSuffix}`}
        style={{ backgroundColor: `#${item.color || 'F6E5A0'}` }}
        className='overflow-hidden rounded-2xl'
      >
        <AccordionTrigger className='px-5 py-6 text-xl sm:px-6 sm:text-2xl'>
          <span className='pr-4 text-left leading-tight'>
            {getLocalizedValue(language, {
              cz: item.titleCz,
              en: item.titleEn,
              de: item.titleDe,
              ua: item.titleUa,
            })}
          </span>
        </AccordionTrigger>
        <AccordionContent className='px-5 pb-6 text-base leading-7 sm:px-6 sm:text-lg'>
          {getLocalizedValue(language, {
            cz: item.textCz,
            en: item.textEn,
            de: item.textDe,
            ua: item.textUa,
          })}
        </AccordionContent>
      </AccordionItem>
    )
  }

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
              <Link
                href='#open-positions'
                className='mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#FFC900] px-6 py-3 text-center font-labil text-lg font-bold leading-tight text-black transition-colors hover:bg-black hover:text-white sm:py-2 sm:text-xl sm:leading-6'
              >
                {getLocalizedValue(language, {
                  cz: 'zobrazit pozice',
                  en: 'show positions',
                  de: 'Positionen anzeigen',
                  ua: 'показати позиції',
                })}
              </Link>
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
                <div className='mt-14 hidden xl:grid xl:auto-rows-fr xl:grid-cols-3 xl:gap-6'>
                  {renderCards(whyCards, 'F6E5A0')}
                </div>
              </div>
            </Cols>

            <div className='mt-14 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:hidden'>
              {renderCards(whyCards, 'F6E5A0')}
            </div>
          </Container>
        </section>
      )}

      <section id='open-positions' className='scroll-mt-28 mt-16 xl:mt-24'>
        <Container>
          <Cols>
            <SectionTitle
              titleCz='Otevřené pozice'
              titleEn='Open positions'
              titleDe='Offene Positionen'
              titleUa='Відкриті позиції'
            />

            <div>
              <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                {positionsDescription}
              </p>

              <div className='mt-14 hidden xl:block'>
                <Accordion type='multiple' className='flex flex-col gap-4 xl:gap-6'>
                  {lookingFor.map((item: any, index: number) =>
                    renderAccordionEntry(item, index),
                  )}
                </Accordion>
              </div>
            </div>
          </Cols>

          <div className='mt-14 xl:hidden'>
            <Accordion type='multiple' className='flex flex-col gap-4'>
              {lookingFor.map((item: any, index: number) =>
                renderAccordionEntry(item, index, '-mobile', '-mobile'),
              )}
            </Accordion>
          </div>
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
                <div className='mt-14 hidden xl:grid xl:auto-rows-fr xl:grid-cols-3 xl:gap-6'>
                  {renderCards(extraCards, 'C8E6C9')}
                </div>
              </div>
            </Cols>

            <div className='mt-14 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:hidden'>
              {renderCards(extraCards, 'C8E6C9')}
            </div>
          </Container>
        </section>
      )}

      <section className='scroll-mt-28 mt-16 xl:mt-24'>
        <Container>
          <div className='rounded-lg bg-[#FFC900] px-6 py-8 sm:px-10 lg:px-14'>
            <div className='flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left'>
              <div>
                <h2 className='font-labil text-3xl font-bold leading-tight text-black md:text-4xl xl:text-[40px] xl:leading-[1.3]'>
                  {getLocalizedValue(language, {
                    cz: 'Chceš s námi rozmlouvat?',
                    en: 'Do you want to talk with us?',
                    de: 'Möchtest du mit uns ins Gespräch kommen?',
                    ua: 'Хочеш з нами поговорити?',
                  })}
                </h2>
                <p className='mt-3 font-stabil text-lg !leading-tight text-black xl:text-2xl xl:!leading-8'>
                  {getLocalizedValue(language, {
                    cz: 'Napiš nám na ciao@rozmluv.se a rádi si o spolupráci popovídáme.',
                    en: 'Write to us at ciao@rozmluv.se and we will gladly talk about working together.',
                    de: 'Schreib uns an ciao@rozmluv.se und wir sprechen gern mit dir über eine Zusammenarbeit.',
                    ua: 'Напиши нам на ciao@rozmluv.se, і ми радо поговоримо про співпрацю.',
                  })}
                </p>
              </div>

              <Link
                href='mailto:ciao@rozmluv.se'
                className='inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 text-center font-labil text-lg font-bold leading-tight text-black transition-colors hover:bg-black hover:text-white sm:w-auto sm:py-2 sm:text-xl sm:leading-6'
              >
                {getLocalizedValue(language, {
                  cz: 'napsat nám',
                  en: 'write to us',
                  de: 'schreib uns',
                  ua: 'напиши нам',
                })}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
