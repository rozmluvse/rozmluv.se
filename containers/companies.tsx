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

  const renderCard = (company: any) => (
    <div
      key={company.link}
      style={{ backgroundColor: `#${company.color}` }}
      className='h-full rounded-2xl'
    >
      <div className='flex h-full min-h-[205px] flex-col px-6 py-8'>
        <p className='font-stabil text-lg'>
          {language === 'cz' && company.textCz}
          {language === 'en' && company.textEn}
          {language === 'de' && company.textDe}
          {language === 'ua' && company.textUa}
        </p>

        <div className='mt-auto flex flex-col gap-2 pt-6 sm:flex-row sm:items-end sm:justify-between'>
          <h3 className='text-left text-2xl font-black'>{company.title}</h3>
          <Link
            href={company.link}
            className='font-stabil text-sm underline underline-offset-2'
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
              textCz='Firemní výuku máme v malíčku. Pendlery rozmluvíme německy, cizince česky a kohokoli anglicky nebo čínsky. Sejít se můžeme v klatovské učebně, u vás ve firmě i online odkudkoli na světě.'
              textEn='A corporate education? To us a piece of cake. We help people who commute to work to Germany with their spoken German, we help foreigners to start speaking Czech and we help anyone with their spoken English or Chinese. We can meet you in the Klatovy classroom, at your company or even online from anywhere in the world.'
              textDe='Weiterbildung für Unternehmen ist unsere Kernkompetenz! Pendlerinnen und Pendler machen sich bei uns fit in Deutsch, Ausländerinnen und Ausländer lernen Tschechisch und für jeden haben wir Englisch oder Chinesisch im Angebot. Wir können die Schulungsräume in Klattau nutzen, zu Ihnen in die Firma kommen oder uns irgendwo auf der Welt online zusammenschalten.'
              textUa='Ми вміємо залучати до корпоративної роботи. Міжнародних працівників навчимо німецької, іноземців чеської та будь-кого англійської або китайської. Ми можемо зустрітись у класі Klatovy, у вашій компанії або онлайн з будь-якої точки світу.'
            />

            <div className='mt-14 hidden gap-[23px] md:auto-rows-fr md:grid-cols-2 xl:grid xl:grid-cols-3'>
              {companies.map((company) => renderCard(company))}
            </div>

            <Link
              href='/#contact'
              className='mt-8 hidden h-[43px] items-center justify-center rounded-[11px] border-2 border-black bg-white px-6 font-labil text-[20px] font-bold leading-[26px] text-black transition-colors hover:bg-black hover:text-white xl:inline-flex'
            >
              {language === 'cz' && 'Chci zapojit firmu →'}
              {language === 'en' && 'I want to involve my company →'}
              {language === 'de' && 'Ich will meine Firma einbeziehen →'}
              {language === 'ua' && 'Хочу залучити компанію →'}
            </Link>
          </div>
        </Cols>

        <div className='mt-14 grid gap-[23px] sm:auto-rows-fr sm:grid-cols-2 xl:hidden'>
          {companies.map((company) => renderCard(company))}
        </div>

        <Link
          href='/#contact'
          className='mt-8 inline-flex h-[43px] items-center justify-center rounded-[11px] border-2 border-black bg-white px-6 font-labil text-[20px] font-bold leading-[26px] text-black transition-colors hover:bg-black hover:text-white xl:hidden'
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
