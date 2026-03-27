'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/container'
import { ContactForm } from '@/components/contact-form'
import { useLanguage } from '@/store/use-language'

export const FormularPage = () => {
  const { language } = useLanguage()

  return (
    <Container>
      <div className='mb-8 mt-28 md:mt-32'>
        <Link
          href='/#contact'
          className='inline-flex items-center gap-1 font-stabil text-lg'
        >
          <ArrowLeft size={18} />
          {language === 'cz' && 'Zpět na kontakt'}
          {language === 'en' && 'Back to contact'}
          {language === 'de' && 'Zurueck zum Kontakt'}
          {language === 'ua' && 'Назад до контакту'}
        </Link>

        <div className='mt-10 grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-start xl:gap-16'>
          <div className='pt-2'>
            <h1 className='max-w-xl font-labil text-4xl font-bold leading-none sm:text-5xl xl:text-6xl'>
              {language === 'cz' && 'Napiš nám'}
              {language === 'en' && 'Send us a message'}
              {language === 'de' && 'Schreib uns und wir klaeren alles.'}
              {language === 'ua' && 'Напиши нам і ми все узгодимо.'}
            </h1>

            <p className='mt-6 max-w-xl font-stabil text-lg leading-tight xl:text-2xl xl:leading-8'>
              {language === 'cz' &&
                'Stačí pár řádků. Ozveme se co nejdřív a navrhneme další postup, termín nebo vhodný typ kurzu.'}
              {language === 'en' &&
                'A few lines are enough. We will get back to you as soon as possible and suggest next steps, timing or a suitable course type.'}
              {language === 'de' &&
                'Ein paar Zeilen reichen. Wir melden uns so bald wie moeglich und schlagen die naechsten Schritte, einen Termin oder einen passenden Kurstyp vor.'}
              {language === 'ua' &&
                'Достатньо кількох рядків. Ми відповімо якнайшвидше і запропонуємо подальші кроки, термін або відповідний тип курсу.'}
            </p>

            <div className='mt-10 grid gap-8'>
              <div className='flex items-start gap-3'>
                <Mail className='mt-1 h-5 w-5 shrink-0 text-[#00A8CC]' />
                <div className='font-stabil text-base sm:text-lg'>
                  <div className='text-black/50'>
                    {language === 'cz' && 'E-mail'}
                    {language === 'en' && 'Email'}
                    {language === 'de' && 'E-Mail'}
                    {language === 'ua' && 'E-mail'}
                  </div>
                  <a href='mailto:ciao@rozmluv.se'>ciao@rozmluv.se</a>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <Phone className='mt-1 h-5 w-5 shrink-0 text-[#ED8996]' />
                <div className='font-stabil text-base sm:text-lg'>
                  <div className='text-black/50'>
                    {language === 'cz' && 'Telefon'}
                    {language === 'en' && 'Phone'}
                    {language === 'de' && 'Telefon'}
                    {language === 'ua' && 'Телефон'}
                  </div>
                  <p>+420 733 557 502</p>
                  <p>+420 734 675 810</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <MapPin className='mt-1 h-5 w-5 shrink-0 text-[#79B54A]' />
                <div className='font-stabil text-base sm:text-lg'>
                  <div className='text-black/50'>
                    {language === 'cz' && 'Kde nás najdeš'}
                    {language === 'en' && 'Where to find us'}
                    {language === 'de' && 'Wo du uns findest'}
                    {language === 'ua' && 'Де нас знайти'}
                  </div>
                  <p>Pavlíkova 7, Klatovy</p>
                  <p>Křížová 162, Klatovy</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#F6F0F8] p-5 sm:rounded-[32px] sm:p-8 xl:p-10'>
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  )
}
