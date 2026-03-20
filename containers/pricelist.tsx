'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import { SectionTitle } from '@/components/section-title'
import Link from 'next/link'

interface Props {
  data: any
}

export const Pricelist = ({ data }: Props) => {
  const { language } = useLanguage()
  const ctaClassName =
    'mt-6 inline-flex h-11 w-48 items-center justify-center rounded-xl border-2 border-black bg-white font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'

  const renderCard = (item: any, compact = false) => (
    <div
      key={item.labelCz + item.row1Cz}
      style={{ backgroundColor: `#${item.color}` }}
      className='h-full rounded-2xl'
    >
      <div
        className={
          compact
            ? 'flex h-full flex-col px-6 pb-6 pt-8'
            : 'flex h-full flex-col px-6 py-8'
        }
      >
        <div className='text-left text-2xl font-black'>
          {language === 'cz' && item.labelCz}
          {language === 'en' && item.labelEn}
          {language === 'de' && item.labelDe}
          {language === 'ua' && item.labelUa}
        </div>

        <div className='pt-4 font-stabil text-sm'>
          {item.row1Cz && (
            <>
              {language === 'cz' && item.row1Cz}
              {language === 'en' && item.row1En}
              {language === 'de' && item.row1De}
              {language === 'ua' && item.row1Ua}
            </>
          )}
          {item.row2Cz && (
            <>
              <br />
              {language === 'cz' && item.row2Cz}
              {language === 'en' && item.row2En}
              {language === 'de' && item.row2De}
              {language === 'ua' && item.row2Ua}
            </>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <section id='pricelist' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Ceník'
            titleEn='Pricelist'
            titleDe='Preisliste'
            titleUa='прайслист'
          />

          <div>
            <div>
              <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
                {language === 'cz' &&
                  'Online i offline lekce stojí stejně. Uvedené ceny jsou včetně DPH. Jak se přihlásíš, zaplatíš a vystornuješ, najdeš zde:'}
                {language === 'en' &&
                  'Both online and offline lessons cost the same. The prices include VAT. To log in, to pay or to cancel your lesson, please click here:'}
                {language === 'de' &&
                  'Online- und Offline-Unterricht kosten das Gleiche. Die Preise enthalten die Mehrwertsteuer. Um herauszufinden, wie du dich anmeldest, bezahlst und stornierst, klicke hier:'}
                {language === 'ua' &&
                  'Вартість онлайн та офлайн занять однакова. Ціни вказані з ПДВ. Як зареєструватися, оплатити та забронювати заняття, можна дізнатися за посиланням'}
              </p>

              <Link
                href='/payment'
                className={ctaClassName}
              >
                {language === 'cz' && 'Jak to funguje?'}
                {language === 'en' && 'How does it work?'}
                {language === 'de' && 'Wie funktioniert das?'}
                {language === 'ua' && 'Як це працює?'}
              </Link>
            </div>

            <div className='mt-14 hidden auto-rows-fr grid-cols-2 gap-8 lg:grid'>
              {/*
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {data.slice(0, 2).map((item: any) => (
                  <AccordionItem
                    key={item.labelCz + item.row1Cz}
                    value={item.labelCz}
                    style={{ backgroundColor: `#${item.color}` }}
                    className='h-min rounded-2xl'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.labelCz}
                        {language === 'en' && item.labelEn}
                        {language === 'de' && item.labelDe}
                        {language === 'ua' && item.labelUa}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.row1Cz && (
                        <>
                          {language === 'cz' && item.row1Cz}
                          {language === 'en' && item.row1En}
                          {language === 'de' && item.row1De}
                          {language === 'ua' && item.row1Ua}
                        </>
                      )}
                      <br />
                      {item.row2Cz && (
                        <>
                          {language === 'cz' && item.row2Cz}
                          {language === 'en' && item.row2En}
                          {language === 'de' && item.row2De}
                          {language === 'ua' && item.row2Ua}
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {data.slice(2, 4).map((item: any) => (
                  <AccordionItem
                    key={item.labelCz + item.row1Cz}
                    value={item.labelCz}
                    style={{ backgroundColor: `#${item.color}` }}
                    className='h-min rounded-2xl'
                  >
                    <AccordionTrigger>
                      <span className='line-clamp-1 text-left'>
                        {language === 'cz' && item.labelCz}
                        {language === 'en' && item.labelEn}
                        {language === 'de' && item.labelDe}
                        {language === 'ua' && item.labelUa}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.row1Cz && (
                        <>
                          {language === 'cz' && item.row1Cz}
                          {language === 'en' && item.row1En}
                          {language === 'de' && item.row1De}
                          {language === 'ua' && item.row1Ua}
                        </>
                      )}
                      <br />
                      {item.row2Cz && (
                        <>
                          {language === 'cz' && item.row2Cz}
                          {language === 'en' && item.row2En}
                          {language === 'de' && item.row2De}
                          {language === 'ua' && item.row2Ua}
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              */}
              <div className='grid auto-rows-fr gap-8'>
                {data.slice(0, 2).map((item: any) => renderCard(item))}
              </div>
              <div className='grid auto-rows-fr gap-8'>
                {data.slice(2, 4).map((item: any) => renderCard(item))}
              </div>
            </div>
          </div>
        </Cols>

        <div className='mt-14 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 lg:hidden'>
          {/*
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {data.slice(0, 2).map((item: any) => (
              <AccordionItem
                key={item.labelCz + item.row1Cz}
                value={item.labelCz}
                style={{ backgroundColor: `#${item.color}` }}
                className='h-min rounded-2xl'
              >
                <AccordionTrigger className='text-2xl font-black'>
                  <span className='line-clamp-1 text-left'>
                    {language === 'cz' && item.labelCz}
                    {language === 'en' && item.labelEn}
                    {language === 'de' && item.labelDe}
                    {language === 'ua' && item.labelUa}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {item.row1Cz && (
                    <>
                      {language === 'cz' && item.row1Cz}
                      {language === 'en' && item.row1En}
                      {language === 'de' && item.row1De}
                      {language === 'ua' && item.row1Ua}
                    </>
                  )}
                  <br />
                  {item.row2Cz && (
                    <>
                      {language === 'cz' && item.row2Cz}
                      {language === 'en' && item.row2En}
                      {language === 'de' && item.row2De}
                      {language === 'ua' && item.row2Ua}
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {data.slice(2, 4).map((item: any) => (
              <AccordionItem
                key={item.labelCz + item.row1Cz}
                value={item.labelCz}
                style={{ backgroundColor: `#${item.color}` }}
                className='h-min rounded-2xl'
              >
                <AccordionTrigger className='text-2xl font-black'>
                  <span className='line-clamp-1 text-left'>
                    {language === 'cz' && item.labelCz}
                    {language === 'en' && item.labelEn}
                    {language === 'de' && item.labelDe}
                    {language === 'ua' && item.labelUa}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {item.row1Cz && (
                    <>
                      {language === 'cz' && item.row1Cz}
                      {language === 'en' && item.row1En}
                      {language === 'de' && item.row1De}
                      {language === 'ua' && item.row1Ua}
                    </>
                  )}
                  <br />
                  {item.row2Cz && (
                    <>
                      {language === 'cz' && item.row2Cz}
                      {language === 'en' && item.row2En}
                      {language === 'de' && item.row2De}
                      {language === 'ua' && item.row2Ua}
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          */}
          <div className='grid auto-rows-fr gap-4'>
            {data.slice(0, 2).map((item: any) => renderCard(item, true))}
          </div>
          <div className='grid auto-rows-fr gap-4'>
            {data.slice(2, 4).map((item: any) => renderCard(item, true))}
          </div>
        </div>
      </Container>
    </section>
  )
}
