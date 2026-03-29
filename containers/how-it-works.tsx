'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'

interface Props {
  data: any
}

export const HowItWorks = ({ data }: Props) => {
  const { language } = useLanguage()
  const ctaClassName =
    'mt-8 inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
  const steps = [data?.card1, data?.card2, data?.card3].filter(Boolean)
  const renderCard = (step: any, index: number) => (
    <div
      key={step.titleCz + index}
      style={{ backgroundColor: `#${step.color}` }}
      className='h-full rounded-2xl'
    >
      <div className='flex h-full min-h-52 flex-col px-6 py-8'>
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
          {language === 'cz' && step.descriptionCz}
          {language === 'en' && step.descriptionEn}
          {language === 'de' && step.descriptionDe}
          {language === 'ua' && step.descriptionUa}
        </p>
      </div>
    </div>
  )

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
              {language === 'cz' && data?.descriptionCz}
              {language === 'en' && data?.descriptionEn}
              {language === 'de' && data?.descriptionDe}
              {language === 'ua' && data?.descriptionUa}
            </p>

            <Link
              href='/#contact'
              className={ctaClassName}
            >
              {language === 'cz' && 'Chci se rozmluvit →'}
              {language === 'en' && 'I want to start speaking →'}
              {language === 'de' && 'Ich will sprechen lernen →'}
              {language === 'ua' && 'Хочу почати говорити →'}
            </Link>

            <div className='mt-14 hidden auto-rows-fr gap-6 lg:grid lg:grid-cols-3'>
              {steps.map((step, index) => renderCard(step, index))}
            </div>
          </div>
        </Cols>

        <div className='mt-14 grid gap-6 sm:auto-rows-fr sm:grid-cols-2 lg:hidden'>
          {steps.map((step, index) => renderCard(step, index))}
        </div>
      </Container>
    </section>
  )
}
