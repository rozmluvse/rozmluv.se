'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'

interface Props {
  reviews: any[]
}

export const Reviews = ({ reviews }: Props) => {
  const { language } = useLanguage()

  const renderCard = (review: any) => (
    <div
      key={review.textCz + review.nameCz}
      style={{ backgroundColor: `#${review.color}` }}
      className='group h-full rounded-2xl'
    >
      <div className='flex h-full min-h-52 flex-col px-6 py-8'>
        <p className='font-stabil text-lg'>
          {language === 'cz' && review.textCz}
          {language === 'en' && review.textEn}
          {language === 'de' && review.textDe}
          {language === 'ua' && review.textUa}
        </p>

        <div className='mt-auto flex items-center gap-2 pt-6'>
          <Image
            src={urlForImage(review.image)}
            alt={review.nameCz}
            width={40}
            height={40}
            className='h-10 w-10 rounded-full object-cover'
          />
          <span className="line-clamp-1 text-left text-2xl font-black [font-feature-settings:'normal'] group-hover:[font-feature-settings:'ss01','ss02']">
            {language === 'cz' && review.nameCz}
            {language === 'en' && review.nameEn}
            {language === 'de' && review.nameDe}
            {language === 'ua' && review.nameUa}
          </span>
        </div>
      </div>
    </div>
  )

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
            <div>
              <InfoText
                textCz='Těšíme se z každého spokojeného studenta. Těšíme se z každého snu, který sis mohl díky jazyku splnit. Těšíme se z každé reference, kterou nám můžeš poslat i ty.'
                textEn='We rejoice in every satisfied student. We rejoice in every dream you could make come true by getting your language skills improved. We rejoice in every reference you can send us as well.'
                textDe='Wir freuen uns über jede zufriedene Schülerin und jeden zufriedenen Schüler. Wir freuen uns über jeden Traum, den du dir durch die Sprache erfüllen konntest. Wir freuen uns über jede Referenz, die auch du uns schicken kannst.'
                textUa='Ми з нетерпінням чекаємо на кожного задоволеного студента. Ми радіємо кожній мрії, яка збувається завдяки оволодінню мовою. Ми чекаємо на кожний відгук чи пораду, які ти також можеш нам надіслати.'
              />
            </div>

            <Link
              href='/feedback'
              className='mt-8 inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
            >
              {language === 'cz' && 'Poslat referenci'}
              {language === 'en' && 'Send a reference'}
              {language === 'de' && 'Referenz senden'}
              {language === 'ua' && 'Надіслати відгук'}
            </Link>

            <div className='mt-14 hidden grid-cols-2 gap-8 lg:grid'>
              {reviews.map((review) => renderCard(review))}
            </div>
          </div>
        </Cols>

        <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:hidden'>
          {reviews.map((review) => renderCard(review))}
        </div>
      </Container>
    </section>
  )
}
