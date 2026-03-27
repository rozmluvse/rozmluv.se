'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { useNewsletter } from '@/store/use-newsletter'
import { useLanguage } from '@/store/use-language'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

export const Contact = () => {
  const { language } = useLanguage()
  const { openNewsletter } = useNewsletter()

  return (
    <section id='contact' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='Kontakt'
            titleEn='Contact'
            titleDe='Kontakt'
            titleUa='контакт'
          />

          <div className='hidden xl:block'>
            <div className='grid gap-12 xl:grid-cols-[1.05fr_1fr] xl:gap-20'>
              <div className='space-y-8 font-stabil text-lg xl:text-2xl'>
                <div className='flex items-start gap-4'>
                  {/*<MapPin className='mt-1 h-6 w-6 shrink-0 text-[#FFC900] xl:h-7 xl:w-7' />*/}
                  <div>
                    <p>Pavlíkova 7, Klatovy</p>
                    <p>Křížová 162, Klatovy</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  {/*<Mail className='mt-1 h-6 w-6 shrink-0 text-[#00A8CC] xl:h-7 xl:w-7' />*/}
                  <a href='mailto:ciao@rozmluv.se'>ciao@rozmluv.se</a>
                </div>

                <div className='flex items-start gap-4'>
                  {/*<Phone className='mt-1 h-6 w-6 shrink-0 text-[#ED8996] xl:h-7 xl:w-7' />*/}
                  <div className='space-y-3'>
                    <div>
                      <p>Adriana Černá</p>
                      <a href='tel:+420733557502'>+420 733 557 502</a>
                    </div>
                    <div>
                      <p>Kateřina Hulecová</p>
                      <a href='tel:+420734675810'>+420 734 675 810</a>
                    </div>
                  </div>
                </div>

                {/*
                <button
                  className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                  onClick={() => openNewsletter()}
                >
                  {language === 'cz' && 'Odběr newsletteru →'}
                  {language === 'en' && 'Newsletter subscription →'}
                  {language === 'de' && 'Newsletter abonnieren →'}
                  {language === 'ua' && 'Слідкувати za novinami →'}
                </button>
                */}
                <button
                  className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
                  onClick={() => openNewsletter()}
                >
                  {language === 'cz' && 'Odběr newsletteru →'}
                  {language === 'en' && 'Newsletter subscription →'}
                  {language === 'de' && 'Newsletter abonnieren →'}
                  {language === 'ua' && 'Слідкувати за новинами →'}
                </button>
              </div>

              <div className='font-stabil text-lg xl:text-2xl'>
                <h3 className='mb-4 font-labil text-3xl font-bold leading-tight xl:text-4xl'>
                  {language === 'cz' && 'Jak se k nám dostanete?'}
                  {language === 'en' && 'How to find us?'}
                  {language === 'de' && 'Wie findest du uns?'}
                  {language === 'ua' && 'Як до нас дістатися?'}
                </h3>

                <p>
                  {language === 'cz' &&
                    'Do učebny v 1. patře se dostaneš buď z Pavlíkovy ulice, nebo zadním vchodem z Hostašových sadů. Auto můžeš při troše štěstí nechat v ulicích Jiráskova a Dobrovského, v nouzi přímo na náměstí Míru.'}
                  {language === 'en' &&
                    'You can get to the classroom on the 1st floor either from Pavlíkova Street or by the rear entrance from Hostašovy sady. With a bit of luck, you can leave your car in the streets of Jiráskova and Dobrovského, at a pinch right on the Mír Square (náměstí Míru).'}
                  {language === 'de' &&
                    'Die Lehrräume im 1. Stock sind entweder von der Pavlíkova Straße oder durch den Hintereingang vom Hostašovy-Park aus zugänglich. Wenn du etwas Glück hast, kannst du dein Auto in den Straßen Jiráskova und Dobrovského oder im Notfall direkt am Náměstí Míru (Hauptplatz) abstellen.'}
                  {language === 'ua' &&
                    'Ти можеш потрапити до класу на 1-му поверсі або з вулиці Pavlíkova, або через чорний вхід з Hostašové sady. Якщо пощастить, ви можете залишити машину на вулицях Jiráskova та Dobrovského, або в екстреному випадку прямо на Náměstí Míru.'}
                </p>

                <div className='mt-8 border-t border-black/20 pt-5 text-base uppercase tracking-[0.08em] text-black/45 xl:text-lg'>
                  {/*<p>
                    {language === 'cz' && 'Fakturační údaje:'}
                    {language === 'en' && 'Billing details:'}
                    {language === 'de' && 'Rechnungsdaten:'}
                    {language === 'ua' && 'Платіжні дані:'}
                  </p>*/}
                </div>

                <div className='mt-4 font-stabil text-lg xl:text-2xl'>
                  <p>Rozmluv se, s. r. o.</p>
                  <p>Pavlíkova 7, Klatovy</p>
                  <p>IČO: 19647964</p>
                  <p>DIČ: CZ19647964</p>
                </div>
              </div>
            </div>

            <div className='mt-10 grid grid-cols-2 gap-8'>
              <Image
                src='/contact/1.webp'
                alt='cedule'
                width={654}
                height={981}
                sizes='(min-width: 1280px) 50vw, 50vw'
                className='h-auto w-full rounded-2xl'
              />
              <Image
                src='/contact/3.webp'
                alt='učebna'
                width={818}
                height={1226}
                sizes='(min-width: 1280px) 50vw, 50vw'
                className='h-auto w-full rounded-2xl'
              />
            </div>
          </div>

          <div className='xl:hidden'>
            <div className='grid gap-y-10 font-stabil text-lg'>
              <div className='space-y-8'>
                <div className='flex items-start gap-4'>
                  <MapPin className='mt-1 h-6 w-6 shrink-0 text-[#FFC900]' />
                  <div>
                    <p>Pavlíkova 7, Klatovy</p>
                    <p>Křížová 162, Klatovy</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Mail className='mt-1 h-6 w-6 shrink-0 text-[#00A8CC]' />
                  <a href='mailto:ciao@rozmluv.se'>ciao@rozmluv.se</a>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='mt-1 h-6 w-6 shrink-0 text-[#ED8996]' />
                  <div className='space-y-3'>
                    <div>
                      <p>Adriana Černá</p>
                      <a href='tel:+420733557502'>+420 733 557 502</a>
                    </div>
                    <div>
                      <p>Kateřina Hulecová</p>
                      <a href='tel:+420734675810'>+420 734 675 810</a>
                    </div>
                  </div>
                </div>

                <button
                  className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
                  onClick={() => openNewsletter()}
                >
                  {language === 'cz' && 'Odběr newsletteru →'}
                  {language === 'en' && 'Newsletter subscription →'}
                  {language === 'de' && 'Newsletter abonnieren →'}
                  {language === 'ua' && 'Слідкувати за новинами →'}
                </button>
              </div>

              <div>
                <h3 className='mb-4 font-labil text-3xl font-bold leading-tight'>
                  {language === 'cz' && 'Jak se k nám dostanete?'}
                  {language === 'en' && 'How to find us?'}
                  {language === 'de' && 'Wie findest du uns?'}
                  {language === 'ua' && 'Як до нас дістатися?'}
                </h3>

                <p>
                  {language === 'cz' &&
                    'Do učebny v 1. patře se dostaneš buď z Pavlíkovy ulice, nebo zadním vchodem z Hostašových sadů. Auto můžeš při troše štěstí nechat v ulicích Jiráskova a Dobrovského, v nouzi přímo na náměstí Míru.'}
                  {language === 'en' &&
                    'You can get to the classroom on the 1st floor either from Pavlíkova Street or by the rear entrance from Hostašovy sady. With a bit of luck, you can leave your car in the streets of Jiráskova and Dobrovského, at a pinch right on the Mír Square (náměstí Míru).'}
                  {language === 'de' &&
                    'Die Lehrräume im 1. Stock sind entweder von der Pavlíkova Straße oder durch den Hintereingang vom Hostašovy-Park aus zugänglich. Wenn du etwas Glück hast, kannst du dein Auto in den Straßen Jiráskova und Dobrovského oder im Notfall direkt am Náměstí Míru (Hauptplatz) abstellen.'}
                  {language === 'ua' &&
                    'Ти можеш потрапити до класу на 1-му поверсі або з вулиці Pavlíkova, або через чорний вхід з Hostašové sady. Якщо пощастить, ви можете залишити машину на вулицях Jiráskova та Dobrovského, або в екстреному випадку прямо на Náměstí Míru.'}
                </p>

                <div className='mt-8 border-t border-black/20 pt-5 text-base uppercase tracking-[0.08em] text-black/45'>
                  <p>
                    {language === 'cz' && 'Fakturační údaje:'}
                    {language === 'en' && 'Billing details:'}
                    {language === 'de' && 'Rechnungsdaten:'}
                    {language === 'ua' && 'Платіжні дані:'}
                  </p>
                </div>

                <div className='mt-4 font-stabil text-lg'>
                  <p>Rozmluv se, s. r. o.</p>
                  <p>Pavlíkova 7, Klatovy</p>
                  <p>IČO: 19647964</p>
                  <p>DIČ: CZ19647964</p>
                </div>
              </div>
            </div>
          </div>
        </Cols>

        <div className='mt-10 grid grid-cols-2 gap-8 xl:hidden'>
          <Image
            src='/contact/1.webp'
            alt='cedule'
            width={654}
            height={981}
            sizes='50vw'
            className='h-auto w-full rounded-2xl'
          />
          <Image
            src='/contact/3.webp'
            alt='učebna'
            width={818}
            height={1226}
            sizes='50vw'
            className='h-auto w-full rounded-2xl'
          />
        </div>
      </Container>
    </section>
  )
}
