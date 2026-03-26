'use client'

import { Cols } from '@/components/cols'
import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { SectionTitle } from '@/components/section-title'
import { urlForImage } from '@/sanity/lib/image'
import { useLanguage } from '@/store/use-language'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const About = ({ lectors }: { lectors: any[] }) => {
  const { language } = useLanguage()
  const [showAllTeam, setShowAllTeam] = useState(false)
  const [isDesktopCarousel, setIsDesktopCarousel] = useState(false)
  const [initialTeamCount, setInitialTeamCount] = useState(8)
  const [desktopTeamPage, setDesktopTeamPage] = useState(0)
  const desktopTeamPageSize = 4

  useEffect(() => {
    const updateTeamLayout = () => {
      if (window.innerWidth >= 1280) {
        setIsDesktopCarousel(true)
        setInitialTeamCount(8)
        return
      }

      setIsDesktopCarousel(false)

      if (window.innerWidth >= 640) {
        setInitialTeamCount(8)
        return
      }

      setInitialTeamCount(4)
    }

    updateTeamLayout()
    window.addEventListener('resize', updateTeamLayout)

    return () => window.removeEventListener('resize', updateTeamLayout)
  }, [])

  const featuredLectors = [...lectors]
    .filter((lector) => lector.featuredOnAbout)
    .sort(
      (a, b) => (a.aboutFeaturedOrder ?? Number.MAX_SAFE_INTEGER) - (b.aboutFeaturedOrder ?? Number.MAX_SAFE_INTEGER)
    )
    .slice(0, 2)

  const teamLectors = [...lectors]
    .filter((lector) => !lector.featuredOnAbout)
    .sort(
      (a, b) => (a.aboutOrder ?? a.order ?? Number.MAX_SAFE_INTEGER) - (b.aboutOrder ?? b.order ?? Number.MAX_SAFE_INTEGER)
    )

  const visibleTeamLectors = showAllTeam
    ? teamLectors
    : teamLectors.slice(0, initialTeamCount)
  const desktopTeamPagesCount = Math.ceil(teamLectors.length / desktopTeamPageSize)
  const desktopTeamPages = Array.from(
    { length: desktopTeamPagesCount },
    (_, pageIndex) =>
      teamLectors.slice(
        pageIndex * desktopTeamPageSize,
        (pageIndex + 1) * desktopTeamPageSize
      )
  )

  useEffect(() => {
    setDesktopTeamPage(0)
  }, [teamLectors.length])

  useEffect(() => {
    if (desktopTeamPagesCount === 0) return

    setDesktopTeamPage((page) => Math.min(page, desktopTeamPagesCount - 1))
  }, [desktopTeamPagesCount])

  const getBadge = (lector: any) =>
    (language === 'cz' && lector.aboutBadgeCz) ||
    (language === 'en' && lector.aboutBadgeEn) ||
    (language === 'de' && lector.aboutBadgeDe) ||
    (language === 'ua' && lector.aboutBadgeUa)

  const getRole = (lector: any) =>
    (language === 'cz' && lector.roleCz) ||
    (language === 'en' && lector.roleEn) ||
    (language === 'de' && lector.roleDe) ||
    (language === 'ua' && lector.roleUa)

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

        {featuredLectors.length > 0 && (
          <div className='mt-14 grid grid-cols-2 gap-4 sm:gap-6'>
            {featuredLectors.map((lector) => (
              <Link
                key={lector.slug?.current || lector.name}
                href={lector.slug?.current ? `/lectors/${lector.slug.current}` : '#'}
                className='group rounded-3xl bg-[#F6F0F8] p-4 sm:p-5'
              >
                <div className='grid gap-4 sm:gap-5 xl:grid-cols-[220px_1fr] xl:items-start'>
                  <div className='relative aspect-[0.9] overflow-hidden rounded-[28px] bg-white/60'>
                    <Image
                      src={urlForImage(lector.image)}
                      alt={lector.name}
                      fill
                      sizes='(min-width: 1024px) 25vw, 100vw'
                      className='object-cover transition-opacity duration-200 group-hover:opacity-85'
                    />
                  </div>

                  <div className='flex h-full flex-col justify-between'>
                    <div>
                      {getBadge(lector) && (
                        <div className='mb-3 inline-flex rounded-full bg-[#F7CC46] px-3 py-1 font-stabil text-xs font-bold sm:mb-4 sm:px-4 sm:text-sm'>
                          {getBadge(lector)}
                        </div>
                      )}
                      <h3 className='text-xl font-black leading-none sm:text-2xl xl:text-3xl'>
                        {lector.name}
                      </h3>
                      <p className='mt-2 font-stabil text-sm leading-tight sm:mt-3 sm:text-base xl:text-xl'>
                        {getRole(lector)}
                      </p>
                    </div>

                    <div className='mt-5 sm:mt-8'>
                      <div className='inline-flex h-10 items-center justify-center rounded-xl border-2 border-black bg-white px-4 font-labil text-sm font-bold text-black transition-colors hover:bg-black hover:text-white sm:h-11 sm:px-5 sm:text-base'>
                        {language === 'cz' && 'napsat'}
                        {language === 'en' && 'write'}
                        {language === 'de' && 'schreiben'}
                        {language === 'ua' && 'написати'}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className='mt-14'>
          <h3 className='font-labil text-3xl font-bold leading-tight'>
            {language === 'cz' && 'Náš lektorský tým'}
            {language === 'en' && 'Our lecturers'}
            {language === 'de' && 'Unser Lektor*innenteam'}
            {language === 'ua' && 'Наша команда викладачів'}
          </h3>

          {!isDesktopCarousel && (
            <>
              <div className='mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4'>
                {visibleTeamLectors.map((lector) => (
                  <Link
                    key={lector.slug?.current || lector.name}
                    href={lector.slug?.current ? `/lectors/${lector.slug.current}` : '#'}
                    className='group rounded-2xl'
                  >
                    <div className='relative mb-4 aspect-[9/13.55] overflow-hidden rounded-3xl bg-[#F6F0F8]'>
                      <Image
                        src={urlForImage(lector.image)}
                        alt={lector.name}
                        fill
                        sizes='(min-width: 640px) 25vw, 50vw'
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
                    <h3 className='font-stabil text-xl font-bold leading-tight'>
                      {lector.name}
                    </h3>
                    <p className='font-stabil text-base leading-tight text-black/75'>
                      {getRole(lector)}
                    </p>
                  </Link>
                ))}
              </div>

              {teamLectors.length > initialTeamCount && (
                <div className='mt-8'>
                  <button
                    type='button'
                    onClick={() => setShowAllTeam((value) => !value)}
                    className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-6 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white'
                  >
                    {showAllTeam
                      ? language === 'cz'
                        ? 'Skrýt tým'
                        : language === 'en'
                          ? 'Hide the team'
                          : language === 'de'
                            ? 'Team ausblenden'
                            : 'Сховати команду'
                      : language === 'cz'
                        ? 'Poznat celý tým'
                        : language === 'en'
                          ? 'Meet the whole team'
                          : language === 'de'
                            ? 'Das ganze Team kennenlernen'
                            : 'Познайомитися з усією командою'}
                  </button>
                </div>
              )}
            </>
          )}

          {isDesktopCarousel && (
            <>
              <div className='mt-8 overflow-hidden'>
                <div
                  className='flex transition-transform duration-300 ease-out'
                  style={{
                    width: `${desktopTeamPagesCount * 100}%`,
                    transform: `translateX(-${desktopTeamPage * (100 / desktopTeamPagesCount)}%)`,
                  }}
                >
                  {desktopTeamPages.map((pageLectors, pageIndex) => (
                    <div
                      key={`desktop-team-page-${pageIndex}`}
                      className='grid w-full shrink-0 grid-cols-4 gap-6'
                      style={{ width: `${100 / desktopTeamPagesCount}%` }}
                    >
                      {pageLectors.map((lector) => (
                        <Link
                          key={lector.slug?.current || lector.name}
                          href={lector.slug?.current ? `/lectors/${lector.slug.current}` : '#'}
                          className='group rounded-2xl'
                        >
                          <div className='relative mb-4 aspect-[9/13.55] overflow-hidden rounded-3xl bg-[#F6F0F8]'>
                            <Image
                              src={urlForImage(lector.image)}
                              alt={lector.name}
                              fill
                              sizes='25vw'
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
                          <h3 className='font-stabil text-xl font-bold leading-tight'>
                            {lector.name}
                          </h3>
                          <p className='font-stabil text-base leading-tight text-black/75'>
                            {getRole(lector)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {desktopTeamPagesCount > 1 && (
                <div className='mt-8 flex items-center gap-2'>
                  <button
                    type='button'
                    onClick={() =>
                      setDesktopTeamPage((page) => Math.max(page - 1, 0))
                    }
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
                    aria-label={
                      language === 'cz'
                        ? 'Předchozí lektoři'
                        : language === 'en'
                          ? 'Previous lectors'
                          : language === 'de'
                            ? 'Vorherige Lektor*innen'
                            : 'Попередні викладачі'
                    }
                    disabled={desktopTeamPage === 0}
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type='button'
                    onClick={() =>
                      setDesktopTeamPage((page) =>
                        Math.min(page + 1, desktopTeamPagesCount - 1)
                      )
                    }
                    className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
                    aria-label={
                      language === 'cz'
                        ? 'Další lektoři'
                        : language === 'en'
                          ? 'Next lectors'
                          : language === 'de'
                            ? 'Nächste Lektor*innen'
                            : 'Наступні викладачі'
                    }
                    disabled={desktopTeamPage === desktopTeamPagesCount - 1}
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className='mt-10 rounded-2xl bg-[#ED8996] px-6 py-5'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <h3 className='font-labil text-2xl font-bold leading-tight text-black'>
              {language === 'cz' && 'Chceš se stát součástí lektorského týmu?'}
              {language === 'en' &&
                "Would you like to join the lecturers' team?"}
              {language === 'de' &&
                'Willst du Teil unseres Lektor*innenteams werden?'}
              {language === 'ua' && 'Хочеш стати частиною команди викладачів?'}
            </h3>

            <Link
              href='/for-lectors'
              className='inline-flex h-11 items-center justify-center rounded-full bg-white px-6 font-labil text-base font-bold text-black transition-colors hover:bg-black hover:text-white'
            >
              {language === 'cz' && 'To teda'}
              {language === 'en' && 'Hell yeah'}
              {language === 'de' && 'Aber sowas von!'}
              {language === 'ua' && 'Однозначно'}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
