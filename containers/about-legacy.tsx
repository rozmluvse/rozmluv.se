/// původní sekce o nás

'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import { SectionTitle } from '@/components/section-title'

export const AboutLegacy = ({ lectors }: { lectors: any }) => {
  const { language } = useLanguage()

  return (
    <section id='about' className='scroll-mt-28'>
      <Container>
        <Cols>
          <SectionTitle
            titleCz='O nás'
            titleEn='About us'
            titleDe='Über uns'
            titleUa='про нас'
          />
          <div>
            <div>
              <InfoText
                textCz='S naším lektorským týmem zajišťujeme ty nejlepší podmínky k tomu, abys měl*a možnost se co nejdříve rozmluvit. Máme pozitivní zkušenost s individuálními lekcemi nebo kurzy ve skupinách s opravdu nízkým počtem osob. Dostaneš se tak ke slovu dostatečně často, jazyk tě bude bavit a prostě se rozmluvíš.'
                textEn="Our team is providing the best conditions to get you talking fluently as soon as possible. We have a positive experience with both individual lessons or small group courses. At our studio, you'll get a word often enough and you will enjoy the language along."
                textDe='Mit unserem Dozententeam bieten wir dir die optimale Umgebung, damit du dich so schnell wie möglich in der fremden Sprache verständigen kannst. Wir haben positive Erfahrungen mit Einzelunterricht oder mit Gruppenkursen mit einer wirklich kleinen Anzahl an Teilnehmern. So kommst Du oft genug zu Wort, hast Spaß an der Sprache und redest dich einfach frei.'
                textUa='З нашою командою викладачів ми забезпечуємо найкращі умови, щоб ви мали можливість якнайшвидше розговоритися. У нас є позитивний досвід індивідуальних занять або курсів у групах з дійсно невеликою кількістю людей. Таким чином, ти зможеш говорити досить часто, тобі сподобається мова і ти просто будеш спілкуватися.'
              />
            </div>

            <div className='mt-8'>
              <Link
                href='/story'
                className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
              >
                {language === 'cz' && 'Jak vzniklo naše studio?'}
                {language === 'en' && 'How was our studio founded?'}
                {language === 'de' && 'Wie ist unser Studio entstanden?'}
                {language === 'ua' && 'Як виникла наша студія?'}
              </Link>
            </div>
          </div>
        </Cols>

        <div className='mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4'>
          {lectors.map((lector: any) => (
            <Link
              key={lector.name}
              href={`/lectors/${lector.slug.current}`}
              className='group rounded-2xl'
            >
              <div className='relative mb-4 aspect-[9/13.55] overflow-hidden rounded-3xl'>
                <Image
                  src={urlForImage(lector.image)}
                  alt={lector.name}
                  fill
                  sizes='(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw'
                  className='rounded-3xl object-cover transition-opacity duration-200 group-hover:opacity-70'
                />
                <div className='pointer-events-none absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                  <div className='rounded-xl border-2 border-black bg-white px-5 py-2 font-labil text-lg font-bold text-black'>
                    {language === 'cz' && 'Poznej lektora*ku'}
                    {language === 'en' && 'Meet the lecturer'}
                    {language === 'de' && 'Lerne den*die Lektor*in kennen'}
                    {language === 'ua' && 'Познайомся з викладачем*кою'}
                  </div>
                </div>
              </div>
              <h3 className='font-stabil'>{lector.name}</h3>
              <p className='font-stabil'>
                {language === 'cz' && lector.roleCz}
                {language === 'en' && lector.roleEn}
                {language === 'de' && lector.roleDe}
                {language === 'ua' && lector.roleUa}
              </p>
            </Link>
          ))}
          <div className='grid aspect-[9/13.55] place-content-center rounded-2xl bg-[#FD828C] p-2 text-center'>
            <h2 className='mb-6 lg:text-2xl'>
              {language === 'cz' && 'Chceš se stát součástí lektorského týmu?'}
              {language === 'en' &&
                "Would you like to join the lecturers' team?"}
              {language === 'de' &&
                'Willst du Teil unseres Lektor*innenteams werden?'}
              {language === 'ua' && '!text!'}
            </h2>
            <Link href='/for-lectors'>
              <button className='rounded-full bg-white px-6 py-2 hover:bg-zinc-100 lg:text-xl'>
                {language === 'cz' && 'To teda'}
                {language === 'en' && 'Hell yeah'}
                {language === 'de' && 'Aber sowas von!'}
                {language === 'ua' && '!text!'}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
