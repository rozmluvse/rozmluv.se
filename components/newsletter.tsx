'use client'

import { useLanguage } from '@/store/use-language'
import { useNewsletter } from '@/store/use-newsletter'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

export const Newsletter = () => {
  const pathname = usePathname()

  const { language } = useLanguage()

  const {
    closeNewsletter,
    closeNewsletterPermanently,
    openNewsletter,
    isOpen,
  } = useNewsletter()

  const [lang, setLang] = useState('cz')

  const studio = pathname.includes('/studio')

  useEffect(() => {
    const newsletterTimeout = setTimeout(() => {
      if (!document.cookie.includes('newsletterClosed')) {
        openNewsletter()
      }
    }, 10000)

    return () => clearTimeout(newsletterTimeout)
  }, [openNewsletter])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='newsletter background'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'left-0 top-0 z-[1005] grid h-screen w-screen place-content-center bg-black/60 backdrop-blur-sm',
              studio ? 'hidden' : 'fixed',
            )}
          >
            <motion.div
              key='newsletter'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className='relative mx-4 aspect-square max-h-[500px] max-w-[333px] rounded-3xl bg-[#9F6ACD] p-4 sm:max-w-[500px]'
            >
              <Button
                onClick={() => closeNewsletter()}
                variant='ghost'
                className='absolute right-4 top-4 m-0 h-min w-min p-0 hover:bg-transparent'
              >
                <X className='text-zinc-200' />
              </Button>

              <form
                method='post'
                action={process.env.ECOMAIL_API_KEY || ''}
                onSubmit={(e) => {
                  e.preventDefault()

                  closeNewsletterPermanently()

                  const form = e.target as HTMLFormElement

                  console.log('Form action:', form.action)
                  console.log('Form data:', new FormData(form))

                  form.submit()

                  console.log('after submit')
                }}
                className='mx-auto mt-12 w-[85%] sm:w-[65%]'
              >
                <h2 className='text-center text-3xl text-white'>
                  {language === 'cz' &&
                    'Novinky ve výuce, tipy na učení i pohled do zákulisí ti pošleme v newsletteru na'}
                  {language === 'en' &&
                    'Our newsletter covers teaching news, learning tips or a backstage insight. Do not miss it and let us send it to you at'}
                  {language === 'de' &&
                    'Neuigkeiten aus dem Lernbereich, Lerntipps und auch Blicke hinter die Kulissen senden wir dir gerne in unserem Newsletter unter'}
                  {language === 'ua' &&
                    'Навчальні новинки, поради та погляд за лаштунки - все надішлемо у інформаційному листі'}
                </h2>
                <input
                  type='email'
                  name='email'
                  className='mb-2 mt-8 w-full rounded-3xl border border-zinc-200 bg-transparent py-1 text-center font-stabil text-lg text-white placeholder:text-white'
                  placeholder='tvuj@email.com'
                />
                <input
                  type='text'
                  name='name'
                  className='mb-2 w-full rounded-3xl border border-zinc-200 bg-transparent py-1 text-center font-stabil text-lg text-white placeholder:text-white'
                  placeholder='tvoje jméno'
                />
                <div className='mb-6 flex items-center justify-between'>
                  <div className='flex gap-2'>
                    <input
                      type='radio'
                      name='lang'
                      id='lang'
                      value='cz'
                      defaultChecked
                      onChange={(e) => setLang(e.currentTarget.value)}
                    />
                    <h3 className='items-center font-stabil text-white'>
                      {language === 'cz' && 'v češtině'}
                      {language === 'en' && 'in Czech'}
                      {language === 'de' && 'auf Tschechisch'}
                      {language === 'ua' && 'чеською мовою'}
                    </h3>
                  </div>
                  <div className='flex gap-2'>
                    <input
                      type='radio'
                      name='lang'
                      id='lang'
                      value='en'
                      onChange={(e) => setLang(e.currentTarget.value)}
                    />
                    <h3 className='items-center font-stabil text-white'>
                      {language === 'cz' && 'v angličtině'}
                      {language === 'en' && 'in English'}
                      {language === 'de' && 'auf Englisch'}
                      {language === 'ua' && 'англійською мовою'}
                    </h3>
                  </div>
                  <input
                    type='text'
                    name='custom_fields[language]'
                    id='custom_fields[language]'
                    className='hidden'
                    value={lang}
                  />
                </div>
                <div className='flex flex-col gap-4'>
                  <Button
                    type='submit'
                    className='ffs-12-hover rounded-full bg-white py-5 font-labil text-xl font-black text-black hover:bg-zinc-50'
                  >
                    {language === 'cz' && 'odebírej'}
                    {language === 'en' && 'subscribe'}
                    {language === 'de' && 'abonnieren'}
                    {language === 'ua' && 'слідкуй'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
