'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import Link from 'next/link'
import { Cols } from '@/components/cols'
import { SectionTitle } from '@/components/section-title'

interface Props {
  companies: any[]
}

export const Companies = ({ companies }: Props) => {
  const { language } = useLanguage()
  const ctaClassName =
    'mt-8 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 py-3 text-center font-labil text-lg font-bold leading-tight text-black transition-colors hover:bg-black hover:text-white sm:py-2 sm:text-xl sm:leading-6'

  const renderCard = (company: any) => (
    <div
      key={company.link}
      style={{ backgroundColor: `#${company.color}` }}
      className='group h-full rounded-2xl'
    >
      <div className='flex h-full min-h-52 flex-col px-6 py-8'>
        <p className='font-stabil text-lg'>
          {language === 'cz' && company.textCz}
          {language === 'en' && company.textEn}
          {language === 'de' && company.textDe}
          {language === 'ua' && company.textUa}
        </p>

        <div className='mt-auto flex flex-col gap-2 pt-6 sm:flex-row sm:items-end sm:justify-between'>
          <h3 className="text-left text-2xl font-black [font-feature-settings:'normal'] group-hover:[font-feature-settings:'ss01','ss02']">
            {company.title}
          </h3>
          <Link
            href={company.link}
            className="font-stabil text-sm underline underline-offset-2 [font-feature-settings:'normal'] group-hover:[font-feature-settings:'ss01','ss02']"
          >
            {company.linkPreview}
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <section id='companies' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Zapoj firmu'
            titleEn='Involve your company'
            titleDe='Firma einbeziehen'
            titleUa='приєднати фірму'
          />

          <div>
            <InfoText
              textCz='Učíme naživo ve firmách nebo i online. Pendlery rozmluvíme německy, cizince česky a kohokoli anglicky. Sejít se můžeme u vás ve firmě i online odkudkoli na světě.'
              textEn='We teach in companies face-to-face or online. We help people who commute to work to Germany with their spoken German, we help foreigners to start speaking Czech and we help anyone with their spoken English. We can meet at your company or even online from anywhere in the world.'
              textDe='Wir unterrichten in Unternehmen – vor Ort oder online. Wir bringen Berufspendlerinnen und Berufspendler auf den Punkt, wo sie die Kommunikation in der Arbeitssprache Deutsch noch verbessert brauchen, bauen die Sprachkenntnisse von Ausländerinnen und Ausländern, die auf Deutsch arbeiten, auf und schulen alle, die ihr Englisch verbessern wollen. Wir können zu Ihnen ins Unternehmen kommen oder uns online aus der ganzen Welt mit Ihnen verbinden.'
              textUa='Ми вміємо залучати до корпоративної роботи. Міжнародних працівників навчимо німецької, іноземців чеської та будь-кого англійської. Ми можемо зустрітись у вашій компанії або онлайн з будь-якої точки світу.'
            />

            <div className='mt-14 hidden auto-rows-fr gap-6 xl:grid xl:grid-cols-3'>
              {companies.map((company) => renderCard(company))}
            </div>

            <Link
              href='/#contact'
              className={`${ctaClassName} hidden xl:inline-flex`}
            >
              {language === 'cz' && 'Chci zapojit firmu →'}
              {language === 'en' && 'I want to involve my company →'}
              {language === 'de' && 'Ich will meine Firma einbeziehen →'}
              {language === 'ua' && 'Хочу залучити компанію →'}
            </Link>
          </div>
        </Cols>

        <div className='mt-14 grid gap-6 sm:auto-rows-fr sm:grid-cols-2 xl:hidden'>
          {companies.map((company) => renderCard(company))}
        </div>

        <Link
          href='/#contact'
          className={`${ctaClassName} xl:hidden`}
        >
          {language === 'cz' && 'Chci zapojit firmu →'}
          {language === 'en' && 'I want to involve my company →'}
          {language === 'de' && 'Ich will meine Firma einbeziehen →'}
          {language === 'ua' && 'Хочу залучити компанію →'}
        </Link>
      </Container>
    </section>
  )
}
