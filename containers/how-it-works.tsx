'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

const STEPS = [
  {
    color: 'F6E5A0',
    titleCz: 'Registrace',
    titleEn: 'Registration',
    titleDe: 'Registrierung',
    titleUa: 'Реєстрація',
  },
  {
    color: 'C8E6C9',
    titleCz: 'Konzultace',
    titleEn: 'Consultation',
    titleDe: 'Beratung',
    titleUa: 'Консультація',
  },
  {
    color: 'FD828C',
    titleCz: 'První lekce',
    titleEn: 'First lesson',
    titleDe: 'Erste Stunde',
    titleUa: 'Перше заняття',
  },
]

export const HowItWorks = () => {
  const { language } = useLanguage()

  return (
    <section id='how-it-works' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Jak to funguje?'
            titleEn='How does it work?'
            titleDe='Wie funktioniert das?'
            titleUa='Як це працює?'
          />

          <div>
            <p className='font-stabil text-lg !leading-tight xl:text-2xl xl:!leading-8'>
              {language === 'cz' && '3 důležité kroky k první lekci'}
              {language === 'en' && '3 important steps before your first lesson'}
              {language === 'de' && '3 wichtige Schritte bis zu deiner ersten Stunde'}
              {language === 'ua' && '3 важливі кроки до першого заняття'}
            </p>

            <div className='mt-14 grid gap-[23px] md:grid-cols-2 xl:grid-cols-3'>
              {STEPS.map((step, index) => (
                <div
                  key={step.titleCz}
                  style={{ backgroundColor: `#${step.color}` }}
                  className='h-full rounded-2xl'
                >
                  <div className='flex h-full min-h-[205px] flex-col px-6 py-8'>
                    <div className='font-labil text-sm font-bold uppercase tracking-[0.16em]'>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>

                    <h3 className='mt-5 text-left text-2xl font-black'>
                      {language === 'cz' && step.titleCz}
                      {language === 'en' && step.titleEn}
                      {language === 'de' && step.titleDe}
                      {language === 'ua' && step.titleUa}
                    </h3>

                    <p className='pt-4 font-stabil text-sm'>
                      {language === 'cz' &&
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit a první lekce bude hned o kus blíž.'}
                      {language === 'en' &&
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit and your first lesson will feel much closer.'}
                      {language === 'de' &&
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit und deine erste Stunde ist gleich viel näher.'}
                      {language === 'ua' &&
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit і твоє перше заняття стане значно ближчим.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href='/#contact'
              className='mt-8 inline-flex h-[43px] items-center justify-center rounded-[11px] border-2 border-black bg-white px-6 font-labil text-[20px] font-bold leading-[26px] text-black transition-colors hover:bg-black hover:text-white'
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
  )
}
