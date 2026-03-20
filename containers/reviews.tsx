'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionTitle } from '@/components/section-title'
import { urlForImage } from '@/sanity/lib/image'

interface Props {
  reviews: any[]
}

export const Reviews = ({ reviews }: Props) => {
  const { language } = useLanguage()

  const totalItems = reviews.length
  const itemsPerColumn = Math.ceil(totalItems / 2)

  return (
    <section id='references' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Reference'
            titleEn='References'
            titleDe='Referenzen'
            titleUa='довідка'
          />

          <div>
            <InfoText
              textCz='Těšíme se z každého spokojeného studenta. Těšíme se z každého snu, který sis mohl díky jazyku splnit. Těšíme se z každé reference, kterou nám můžeš poslat i ty, a to přímo'
              textEn='We rejoice in every satisfied student. We rejoice in every dream you could make come true by getting you language skills improved. We rejoice in every reference you can send us right'
              textDe='Wir freuen uns über jede zufriedene Schülerin und jeden zufriedenen Schüler. Wir freuen uns über jeden Traum, den du dir durch die Sprache erfüllen konntest. Wir freuen uns über jede Referenz, die auch du uns schicken kannst, und zwar gleich'
              textUa='Ми з нетерпінням чекаємо на кожного задоволеного студента. Ми радіємо кожній мрії, яка збувається завдяки оволодінню мовою. Ми чекаємо на кожний відгук чи пораду, яке ти можеш надіслати нам прямо'
              href='/feedback'
              linkCz='sem ←'
              linkEn='here ←'
              linkDe='hier ←'
              linkUa='сюди ←'
            />

            <div className='mt-14 hidden grid-cols-2 gap-8 lg:grid'>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {reviews.slice(0, itemsPerColumn).map((review) => (
                  <AccordionItem
                    key={review.textCz + review.nameCz}
                    value={review.textCz}
                    style={{ backgroundColor: `#${review.color}` }}
                    className='rounded-2xl'
                  >
                    <AccordionTrigger>
                      <div className='flex items-center gap-2 truncate'>
                        <Image
                          src={urlForImage(review.image)}
                          alt={review.nameCz}
                          width={40}
                          height={40}
                          className='h-10 w-10 rounded-full object-cover'
                        />
                        <span className='line-clamp-1 text-left'>
                          {language === 'cz' && review.nameCz}
                          {language === 'en' && review.nameEn}
                          {language === 'de' && review.nameDe}
                          {language === 'ua' && review.nameUa}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {language === 'cz' && review.textCz}
                      {language === 'en' && review.textEn}
                      {language === 'de' && review.textDe}
                      {language === 'ua' && review.textUa}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion type='multiple' className='flex flex-col gap-8'>
                {reviews.slice(itemsPerColumn).map((review) => (
                  <AccordionItem
                    key={review.textCz + review.nameCz}
                    value={review.textCz}
                    style={{ backgroundColor: `#${review.color}` }}
                    className='h-min rounded-2xl'
                  >
                    <AccordionTrigger>
                      <div className='flex items-center gap-2'>
                        <Image
                          src={urlForImage(review.image)}
                          alt={review.nameCz}
                          width={40}
                          height={40}
                          className='h-10 w-10 rounded-full object-cover'
                        />
                        <span className='line-clamp-1 text-left'>
                          {language === 'cz' && review.nameCz}
                          {language === 'en' && review.nameEn}
                          {language === 'de' && review.nameDe}
                          {language === 'ua' && review.nameUa}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {language === 'cz' && review.textCz}
                      {language === 'en' && review.textEn}
                      {language === 'de' && review.textDe}
                      {language === 'ua' && review.textUa}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Cols>

        <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:hidden'>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {reviews.slice(0, itemsPerColumn).map((review) => (
              <AccordionItem
                key={review.textCz + review.nameCz}
                value={review.textCz}
                style={{ backgroundColor: `#${review.color}` }}
                className='h-min rounded-2xl'
              >
                <AccordionTrigger>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={urlForImage(review.image)}
                      alt={review.nameCz}
                      width={40}
                      height={40}
                      className='h-10 w-10 rounded-full object-cover'
                    />
                    <span className='line-clamp-1 text-left'>
                      {language === 'cz' && review.nameCz}
                      {language === 'en' && review.nameEn}
                      {language === 'de' && review.nameDe}
                      {language === 'ua' && review.nameUa}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'cz' && review.textCz}
                  {language === 'en' && review.textEn}
                  {language === 'de' && review.textDe}
                  {language === 'ua' && review.textUa}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='multiple' className='flex flex-col gap-4'>
            {reviews.slice(itemsPerColumn).map((review) => (
              <AccordionItem
                key={review.textCz + review.nameCz}
                value={review.textCz}
                style={{ backgroundColor: `#${review.color}` }}
                className='h-min rounded-2xl'
              >
                <AccordionTrigger>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={urlForImage(review.image)}
                      alt={review.nameCz}
                      width={40}
                      height={40}
                      className='h-10 w-10 rounded-full object-cover'
                    />
                    <span className='line-clamp-1 text-left'>
                      {language === 'cz' && review.nameCz}
                      {language === 'en' && review.nameEn}
                      {language === 'de' && review.nameDe}
                      {language === 'ua' && review.nameUa}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {language === 'cz' && review.textCz}
                  {language === 'en' && review.textEn}
                  {language === 'de' && review.textDe}
                  {language === 'ua' && review.textUa}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
