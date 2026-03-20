'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Page() {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'O vzniku studia | rozmluv se'
        : language === 'en'
        ? 'The Story of Rozmluv se | rozmluv se'
        : language === 'de'
        ? 'Die Story | rozmluv se'
        : language === 'ua'
        ? 'Про створення студії | rozmluv se'
        : ''
  }, [language])

  return (
    <main className='font-stabil mt-28 md:mt-32 text-lg lg:text-2xl mb-8'>
      <Container className='grid gap-4 lg:gap-10 lg:grid-cols-2'>
        <Image
          src='/story/barbora.webp'
          alt='barbora'
          width={800}
          height={960}
          className='w-full rounded-3xl'
        />
        <div>
          <h2 className='text-2xl lg:text-4xl font-labil mb-3'>
            {language === 'cz' && 'Příběh rozmluv se'}
            {language === 'en' && 'The Story of Rozmluv se'}
            {language === 'de' && 'Die Geschichte hinter Rozmluv se'}
            {language === 'ua' && 'Історія rozmluv se'}
          </h2>

          <p className='mb-6'>
            {language === 'cz' &&
              'Na počátku všeho byla... Bára. Češtinářka, němčinářka, krajkářka, hudebnice, dobrovolnice, lektorka a nastávající matička. V září 2022, pouhý měsíc před porodem, otevírá nad klatovským Zrnem svoje vlastní jazykové studio.'}
            {language === 'en' &&
              'At the beginning of it all there was... Bára. Czech teacher, German teacher, lacemaker, musician, volunteer, lecturer and mother-to-be. In September 2022, just a month before giving a birth, she opens her own language studio above Zrno Restaurant in Klatovy.'}
            {language === 'de' &&
              'Am Anfang von allem stand... Bára. Lehrerin für Tschechisch und Deutsch, Klöpplerin, Musikerin, Freiwillige, Lektorin und werdende Mutter. Im September 2022, nur einen Monat vor der Entbindung, eröffnet sie ihr eigenes Sprachstudio über dem Café Zrno in Klattau.'}
            {language === 'ua' &&
              'На початку всього було... Бара. Чешка, німкеня, мереживниця, музикант, волонтер, лектор і майбутня мама. У вересні 2022 року, лише за місяць до пологів, вона відкриває власну мовну студію поблизe клатовського Зрно.'}
          </p>
          <p className='mb-6'>
            {language === 'cz' &&
              'Bářina vize, která se promítá do života celé jazykovky, není zadat studentům d. cv. na str. 7, ale měnit jejich životy k lepšímu. Motivovat je, posouvat, pomoct dotáhnout do konce jejich sny. Své studenty vždycky vnímala jako inspirativní lidi, kteří ji samotnou můžou hodně naučit. U cizinců nadšeně nasává jejich jazyk i kulturní rozdíly.'}
            {language === 'en' &&
              "Bára's vision, which is reflected in the life of the entire language studio, is not to assign homework on p. 7, but to change the lives of their students for the better. To motivate them, to push them, to help them to follow their dreams. She has always seen her students as inspirational people who can teach Bára herself a lot. Working with foreigners enables her to experience different languages and cultural differences, which she enjoys with pleasure."}
            {language === 'de' &&
              'Báras Vision, die auf das Leben der gesamten Sprachschule ausstrahlt, besteht nicht darin, den Schülern die Hausaufgabe auf Seite 7 aufzugeben, sondern statt dessen ihr Leben zum Besseren zu verändern. Sie zu motivieren, sie anzuspornen, ihnen zu helfen, ihre Träume zu verwirklichen. Sie hat ihre Schüler immer als inspirierende Menschen gesehen, von denen sie selbst viel lernen kann. Beider Begegnung mit Fremden saugt sie mit Begeisterung deren sprachliche und kulturelle Unterschiede auf.'}
            {language === 'ua' &&
              'Бачення Бари, яке відображено в житті всієї мовної школи, полягає в тому, щоб не призначати студентам d.cv. на сторінці 7, але змінити своє життя на краще. Мотивувати їх, підштовхнути, допомогти досягти їхніх мрій. Вона завжди сприймала своїх учнів як надихаючих людей, які можуть її багато чому навчити. З іноземцями вона із захопленням вбирає їх мову та культурні відмінності.'}
          </p>
          <p className='mb-6'>
            {language === 'cz' &&
              'Báru můžete od roku 2020 potkat i v lektorské komunitě slowczech nebo během pravidelných setkání Languaria. Tahle komunita lidí z Klatov i širokého okolí miluje jazyky a schází se offline každý měsíc. Češi tu nenuceně komunikují v angličtině, vietnamštině nebo němčině a cizinci zase brousí záludné české ř.'}
            {language === 'en' &&
              'Since 2020, you could also have met Bára in the lecturer community slowczech or during regular Languaria meetings. This community of people from Klatovy and the surrounding area loves languages and meets offline every month. Czechs here communicate casually in English, Vietnamese or German, and foreigners master a tricky Czech letter "ř".'}
            {language === 'de' &&
              'Seit 2020 kannst du Bára auch in der slowczech-Community oder bei den regelmäßigen Languarium-Treffen begegnen. Diese Gemeinschaft von Menschen aus Klattau und der weiteren Umgebung liebt Sprachen und trifft sich jeden Monat offline. Hier kommunizieren Tschechen zwanglos auf Englisch, Vietnamesisch oder Deutsch, und Ausländer mühen sich mit dem vertrackten tschechischen ř-Laut ab.'}
            {language === 'ua' &&
              'З 2020 року ви також можете зустріти Бару в спільноті викладачів slowczech або під час регулярних зустрічей Languaria. Ця спільнота людей із Клатова та його околиць любить мови та збирається офлайн щомісяця. Чехи тут невимушено спілкуються англійською, в’єтнамською чи німецькою, а іноземці відточують хитру чеську ř.'}
          </p>
        </div>
      </Container>
    </main>
  )
}
