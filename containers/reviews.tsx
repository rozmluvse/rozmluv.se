'use client'

import { Container } from '@/components/container'
import { InfoText } from '@/components/info-text'
import { useLanguage } from '@/store/use-language'
import { Cols } from '@/components/cols'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
import Link from 'next/link'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface Props {
  reviews: any[]
}

export const Reviews = ({ reviews: _reviews }: Props) => {
  const { language } = useLanguage()
  const [videoPage, setVideoPage] = useState(0)
  const videoReviews = [
    {
      title:
        language === 'cz'
          ? 'Video reference'
          : language === 'en'
            ? 'Video reference'
            : language === 'de'
              ? 'Video-Referenz'
              : 'Відео-відгук',
      name:
        language === 'cz'
          ? 'Tetovací Jméno'
          : language === 'en'
            ? 'Tetovaci Jmeno'
            : language === 'de'
              ? 'Tetovaci Jmeno'
              : 'Tetovaci Jmeno',
      description:
        language === 'cz'
          ? 'Krátké povídání o tom, jak výuka probíhá, co člověku dala a proč se do ní vyplatí jít.'
          : language === 'en'
            ? 'A short story about how the lessons work, what they brought, and why they are worth it.'
            : language === 'de'
              ? 'Ein kurzes Feedback dazu, wie der Unterricht laeuft, was er gebracht hat und warum er sich lohnt.'
              : 'Короткий відгук про те, як проходять заняття, що вони дали і чому це того варте.',
      cta:
        language === 'cz'
          ? 'Pustit video'
          : language === 'en'
            ? 'Play video'
            : language === 'de'
              ? 'Video abspielen'
              : 'Увімкнути відео',
      embedUrl: 'https://www.youtube.com/embed/Jw7s42Op2ao',
      previewUrl: 'https://img.youtube.com/vi/Jw7s42Op2ao/maxresdefault.jpg',
      accent: '#F6F0F8',
    },
    {
      title:
        language === 'cz'
          ? 'Video reference'
          : language === 'en'
            ? 'Video reference'
            : language === 'de'
              ? 'Video-Referenz'
              : 'Відео-відгук',
      name:
        language === 'cz'
          ? 'Tetovací Jméno II'
          : language === 'en'
            ? 'Tetovaci Jmeno II'
            : language === 'de'
              ? 'Tetovaci Jmeno II'
              : 'Tetovaci Jmeno II',
      description:
        language === 'cz'
          ? 'Další zkušenost s výukou, která ukazuje, jak přirozeně se dá do jazyka dostat.'
          : language === 'en'
            ? 'Another student story showing how naturally you can get into the language.'
            : language === 'de'
              ? 'Eine weitere Erfahrung, die zeigt, wie natuerlich man in die Sprache hineinfindet.'
              : 'Ще один відгук про те, як природно можна зануритися в мову.',
      cta:
        language === 'cz'
          ? 'Pustit video'
          : language === 'en'
            ? 'Play video'
            : language === 'de'
              ? 'Video abspielen'
              : 'Увімкнути відео',
      embedUrl: 'https://www.youtube.com/embed/Jw7s42Op2ao',
      previewUrl: 'https://img.youtube.com/vi/Jw7s42Op2ao/maxresdefault.jpg',
      accent: '#EAF6DD',
    },
  ]

  const renderVideoCard = (videoReview: (typeof videoReviews)[number]) => (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type='button'
          className='group h-full w-full overflow-hidden rounded-[28px] text-left transition-transform hover:-translate-y-0.5'
          style={{ backgroundColor: videoReview.accent }}
        >
          <div className='relative isolate grid gap-6 p-4 sm:p-5 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-10 xl:p-6'>
            <div className='relative z-0 aspect-video w-full overflow-hidden rounded-[24px] border-2 border-black bg-black xl:max-w-[360px] xl:justify-self-start'>
              <Image
                src={videoReview.previewUrl}
                alt={videoReview.name}
                fill
                sizes='(min-width: 1280px) 40vw, 100vw'
                className='object-cover transition-transform duration-300 group-hover:scale-[1.02]'
              />
              <div className='absolute inset-0 bg-black/20' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors group-hover:bg-black group-hover:text-white'>
                  <Play className='ml-1 h-7 w-7 fill-current' />
                </div>
              </div>
            </div>

            <div className='relative z-10 flex min-h-[202px] min-w-0 flex-col justify-center px-2 py-2 xl:px-0 xl:py-2'>
              <h3 className='font-labil text-3xl font-bold leading-[0.95] text-black xl:text-4xl'>
                {videoReview.name}
              </h3>

              <p className='max-w-[34rem] pt-4 font-stabil text-base leading-snug text-black/75 xl:text-lg'>
                {videoReview.description}
              </p>

              <div className='pt-6'>
                <div className='inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-white px-5 font-labil text-lg font-bold text-black transition-colors group-hover:bg-black group-hover:text-white'>
                  {videoReview.cta}
                </div>
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className='max-w-4xl border-2 border-black bg-white p-3 sm:p-4'>
        <DialogTitle className='sr-only'>{videoReview.name}</DialogTitle>
        <DialogDescription className='sr-only'>
          {videoReview.description}
        </DialogDescription>

        <div className='aspect-video w-full overflow-hidden rounded-2xl bg-black'>
          <iframe
            src={videoReview.embedUrl}
            title={videoReview.name}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='h-full w-full'
          />
        </div>
      </DialogContent>
    </Dialog>
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

            <div className='mt-14'>
              <div className='overflow-hidden'>
                <div
                  className='flex transition-transform duration-300 ease-out'
                  style={{ transform: `translateX(-${videoPage * 100}%)` }}
                >
                  {videoReviews.map((review, index) => (
                    <div
                      key={`video-review-${index}`}
                      className='w-full shrink-0'
                    >
                      {renderVideoCard(review)}
                    </div>
                  ))}
                </div>
              </div>

              {videoReviews.length > 1 && (
                <div className='mt-8 flex items-center justify-between gap-4'>
                  <div className='flex items-center gap-2'>
                    <button
                      type='button'
                      onClick={() => setVideoPage((page) => Math.max(page - 1, 0))}
                      className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
                      disabled={videoPage === 0}
                      aria-label='Previous video reference'
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      type='button'
                      onClick={() =>
                        setVideoPage((page) =>
                          Math.min(page + 1, videoReviews.length - 1),
                        )
                      }
                      className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
                      disabled={videoPage === videoReviews.length - 1}
                      aria-label='Next video reference'
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className='flex items-center gap-2'>
                    {videoReviews.map((_, index) => (
                      <button
                        key={`video-review-dot-${index}`}
                        type='button'
                        onClick={() => setVideoPage(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          videoPage === index
                            ? 'w-8 bg-black'
                            : 'w-2.5 bg-black/25 hover:bg-black/45'
                        }`}
                        aria-label={`Go to video reference ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Původní textové reference necháváme zatím mimo render.
            {reviews.map((review) => renderCard(review))} */}
          </div>
        </Cols>
      </Container>
    </section>
  )
}
