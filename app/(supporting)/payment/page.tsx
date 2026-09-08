import { Metadata } from 'next'
import { Container } from '@/components/container'
import { Payment } from '@/containers/payment'
import { cachedClient } from '@/sanity/lib/client'
import { PaymentQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Platební podmínky a pravidla lekcí',
  description:
    'Informace o platbě za jazykové kurzy, pravidla rušení a nahrazování lekcí v jazykovém studiu rozmluv se.',
  alternates: {
    canonical: '/payment',
  },
  openGraph: {
    title: 'Platební podmínky a pravidla lekcí | rozmluv se',
    description:
      'Informace o platbě za jazykové kurzy, pravidla rušení a nahrazování lekcí v jazykovém studiu rozmluv se.',
    url: 'https://rozmluv.se/payment',
  },
}


export default async function Page() {
  const data = await cachedClient(PaymentQuery)

  return (
    <main className='font-stabil mt-28 md:mt-32 text-lg mb-8'>
      <Container>
        <Payment data={data} />

        {/* <h2 className='font-labil font-black text-4xl sm:text-5xl'>
          {language === 'cz' && 'Platební podmínky'}
          {language === 'en' && 'Payment terms'}
          {language === 'de' && 'Zahlungsbedingungen'}
          {language === 'ua' && 'Умови оплати'}
        </h2>

        <div className='mt-4'>
          <h3 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Úhrada kurzu probíhá předem:'}
            {language === 'en' && 'The course is paid in advance:'}
            {language === 'de' && 'Der Kurs wird im Voraus bezahlt:'}
            {language === 'ua' && 'Оплата курсу здійснюється заздалегідь:'}
          </h3>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' &&
                'individuální a duální kurzy: cena za min. 5 lekcí'}
              {language === 'en' &&
                'individual and pair courses: price for at least 5 lessons'}
              {language === 'de' &&
                'Einzel- und Paarkurse: Preis für minimal 5 Lektionen'}
              {language === 'ua' &&
                'індивідуальні заняття та заняття у парі: ціна за 5 лекцій(мінімально)'}
            </li>
            <li>
              {language === 'cz' && 'skupinové kurzy: jednorázově celá částka'}
              {language === 'en' && 'group courses: in a lump sum'}
              {language === 'de' && 'Gruppenkurse: einmalig der volle Betrag'}
              {language === 'ua' && 'групові заняття: одноразова ціла частка'}
            </li>
            <li>
              {language === 'cz' &&
                'Kurz je možné absolvovat nejpozději 6 měsíců od vystavení faktury, jinak lekce propadají jako odučené.'}
              {language === 'en' && ''}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>
        </div>

        <h2 className='font-labil font-black text-4xl sm:text-5xl mt-24'>
          {language === 'cz' && 'Pravidla pro rušení a nahrazování lekcí'}
          {language === 'en' && 'Rules for cancelling and rescheduling lessons'}
          {language === 'de' &&
            'Regeln für die Stornierung und den Ersatz von Unterrichtsstunden'}
          {language === 'ua' && 'Правила про скасування та перенесення занять'}
        </h2>

        <div className='mt-4'>
          <h3 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'individuální kurzy:'}
            {language === 'en' && 'individual courses:'}
            {language === 'de' && 'Individuelle Kurse:'}
            {language === 'ua' && 'Індивідуальні заняття:'}
          </h3>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' &&
                'Zrušit nebo přeložit lekci můžeš nejpozději 24 hodin předem, jinak propadá jako odučená.'}
              {language === 'en' &&
                'You can cancel or reschedule the lesson no later than 24 hours in advance, otherwise it will be forfeited.'}
              {language === 'de' && ''}
              {language === 'ua' &&
                'Ти можеш скасувати або перенести урок не пізніше ніж за 24 години, інакше урок буде анульовано.'}
            </li>
            <li>
              {language === 'cz' &&
                'Propadlou lekci lze po předchozí domluvě s lektorem nahradit studijním materiálem v Google Classroom.'}
              {language === 'en' &&
                'A forfeited lesson can be replaced with a study material in Google Classroom after prior agreement with the lecturer.'}
              {language === 'de' &&
                'Du kannst eine Unterrichtsstunde bis zu 24 Stunden im Voraus absagen oder verschieben, andernfalls verfällt sie.'}
              {language === 'ua' &&
                'Пропущене заняття можна замінити навчальним матеріалом у Google Classroom за попередньою домовленістю з викладачем.'}
            </li>
          </ul>
        </div>

        <div className='mt-6'>
          <h3 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'skupinové kurzy:'}
            {language === 'en' && 'group courses: '}
            {language === 'de' && 'Gruppenkurse:'}
            {language === 'ua' && 'групові заняття:'}
          </h3>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' && 'Zameškaná lekce propadá bez náhrady.'}
              {language === 'en' &&
                'Missed lesson forfeits without compensation.'}
              {language === 'de' &&
                'Versäumte Unterrichtsstunden verfallen ersatzlos und ohne Rückerstattung.'}
              {language === 'ua' &&
                'Пропущена лекція пропадає без відпрацювання.'}
            </li>
          </ul>
        </div>

        <div className='mt-6'>
          <h3 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Odhlášení z kurzu'}
            {language === 'en' && ''}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h3>
          <ul className='list-disc ml-6'>
            <li>
              {language === 'cz' &&
                'V případě odhlášení v čase od vystavení faktury do první lekce včetně platí klient*ka 25 % z ceny jí*m objednaného kurzu.'}
              {language === 'en' && ''}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'Pokud se student*ka odhlásí v termínu po druhé proběhlé lekci, uhradí 50 % z ceny jí*m objednaného kurzu.'}
              {language === 'en' && ''}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>
        </div> */}
      </Container>
    </main>
  )
}
