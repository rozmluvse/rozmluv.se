'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { SectionTitle } from '@/components/section-title'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

interface Props {
  languages: any[]
}

export const Languages = ({ languages }: Props) => {
  const { language } = useLanguage()

  return (
    <section id='languages' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Vyber jazyk'
            titleEn='Select language'
            titleDe='Sprache wählen'
            titleUa='вибір мови'
          />
          <div>
            <div>
              <InfoText
                textCz='Užij si svoje hodiny individuálně, ve dvojici nebo v malé skupince
                  s max. 4 dalšími studenty. Nemusíš se nám upisovat na celé
                  pololetí, rezervuj si klidně jenom 10 lekcí. Na osobní schůzce,
                  online callu nebo telefonátu před zahájením kurzu spolu doladíme
                  detaily.'
                textEn="Enjoy your classes either individually, in pairs or in small
                  groups of no more than 5 students. You don't have to sign up for
                  the whole semester immediately, but to start off you may book just
                  10 lessons. We work out the details at a face-to-face meeting or
                  during an online call or a phone call before the course begins."
                textDe='Gestalte dir deine Stunden entweder individuell, zu zweit oder
                  auch in der Kleingruppe mit nicht mehr als vier Lernenden. Du
                  musst dich bei uns nicht gleich für ein ganzes Semester
                  einschreiben, buche ruhig erst einmal nur zehn Lektionen. Die
                  Details können wir persönlich vor Kursbeginn besprechen, gerne
                  auch per Videoanruf oder telefonisch.'
                textUa='Насолоджуйся своїми уроками індивідуально, в парах або в невеликій
                  групі, котра складається з максимально з 4 учасників. Тобі не
                  потрібно записуватись до нас на весь семестр, просто забронюй 10
                  уроків. Ми разом узгодимо деталі під час особистої зустрічі,
                  онлайн-дзвінка або телефонного дзвінка перед початком курсу.'
              />
            </div>

            <div className='mt-8'>
              <Link
                href='https://linktr.ee/rozmluv.se'
                target='_blank'
                className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
              >
                {language === 'cz' && 'Skupinové kurzy'}
                {language === 'en' && 'Group courses'}
                {language === 'de' && 'Gruppenkurse'}
                {language === 'ua' && 'Групові курси'}
              </Link>
            </div>
          </div>
        </Cols>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 mt-14'>
          {languages.map(item => (
            <Link
              key={item.titleCz}
              href={item.disabled || !item.slug?.current ? '' : `/languages/${item.slug.current}`}
              style={{ background: `#${item.color}` }}
              className={cn(
                'text-center text-3xl rounded-2xl py-8 font-black',
                item.disabled && 'pointer-events-none',
                !item.disabled && 'ffs-12-hover'
              )}
            >
              {language === 'cz' && item.titleCz}
              {language === 'en' && item.titleEn}
              {language === 'de' && item.titleDe}
              {language === 'ua' && item.titleUa}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
