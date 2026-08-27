'use client'

import { Container } from '@/components/container'
import { useLanguage } from '@/store/use-language'

export default function Page() {
  const { language } = useLanguage()

  return (
    <main className='mt-28 md:mt-32 font-stabil text-lg mb-8'>
      <Container>
        <div>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Ochrana osobních údajů'}
            {language === 'en' && 'Personal Data Protection'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'Pokud jste klikli na odběr newsletteru nebo se stali naším zákazníkem, svěřili jste nám svoje osobní údaje. Zodpovídáme za jejich ochranu a bezpečí. Doporučujeme Vám proto seznámit se s ochranou osobních údajů, zásadami a právy, které máte v souvislosti s GDPR (Nařízení o ochraně osobních údajů).'}
            {language === 'en' &&
              'If you have clicked on a newsletter or become our customer, you have entrusted us with your personal data. We are responsible for their protection and safety. We therefore recommend that you familiarize yourself with the protection of personal data, the principles and rights you have in relation to the GDPR (General Data Protection Regulation).'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <p className='mt-3'>
            {language === 'cz' &&
              'Správcem Vašich údajů je Rozmluv se, s. r. o., IČO 19647964 se sídlem Pavlíkova 7, 339 01 Klatovy. Vaše osobní údaje zpracovává jako správce, to znamená, že určuje, jak budou osobní údaje zpracovávány a za jakým účelem, po jak dlouhou dobu, a vybírá případné další zpracovatele, kteří jí se zpracováním budou pomáhat.'}
            {language === 'en' &&
              'The administrator of your data is Rozmluv se, s. r. o., IČO 19647964, registered office Pavlíkova 7, 339 01 Klatovy. She processes your personal data as an administrator, that is, she determines how personal data will be processed and for what purpose, for how long, and she selects any other administrators who will help her with the processing.'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
        </div>

        <div className='mt-8'>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Kontaktní údaje'}
            {language === 'en' && 'Contact Details'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'Pokud se na nás budete chtít v průběhu zpracování obrátit, můžete nás kontaktovat na e-mailovou adresu ciao@rozmluv.se Prohlašujeme, že jako správce Vašich osobních údajů splňujeme veškeré zákonné povinnosti vyžadované platnou legislativou, zejména zákonem o ochraně osobních údajů a GDPR, a tedy že:'}
            {language === 'en' &&
              'If you wish to contact us during the data processing, you can contact us at ciao@rozmluv.se. We declare that, as the administrator of your personal data, we comply with all legal obligations required by the applicable legislation, in particular the Privacy Act and the GDPR, and therefore that:'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' &&
                'budeme zpracovávat Vaše osobní údaje jen na základě platného právního důvodu, a to především oprávněného zájmu, plnění smlouvy, zákonné povinnosti či uděleného souhlasu,'}
              {language === 'en' &&
                'we will process your personal data only on the basis of a valid legal reason, namely a legitimate interest, performance of a contract, a legal obligation or a given consent,'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'plníme dle článku 13 GDPR informační povinnost ještě před zahájením zpracování osobních údajů,'}
              {language === 'en' &&
                'I/We fulfil the information obligation under the Article 13 GDPR before the processing of personal data begins,'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'umožníme a budeme Vás podporovat v uplatňování a plnění Vašich práv podle zákona o ochraně osobních údajů a GDPR.'}
              {language === 'en' &&
                'we will enable and support you in exercising and fulfilling your rights under the Privacy Act and the GDPR.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>
        </div>

        <div className='mt-8'>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Účel zpracování Osobních údajů'}
            {language === 'en' && 'Purpose of Personal Data Processing'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'Zpracováváme následující osobní údaje získané na základě kupní smlouvy či kontaktního formuláře'}
            {language === 'en' &&
              'We process the following personal data obtained on the basis of the purchase contract or contact form'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' && 'jméno a příjmení;'}

              {language === 'en' && 'Name and surname;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'fakturační údaje (IČO, DIČ, sídlo, údaj o plátci DPH);'}
              {language === 'en' &&
                'billing data (IČO, VATIN, registered office, VAT payer data);'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'kontaktní údaje (e-mailová adresa, telefon);'}
              {language === 'en' &&
                'contact details (e-mail address, telephone number);'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'údaje spojené s platbou (bankovní spojení);'}
              {language === 'en' && 'payment details (bank details);'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'další informace odpovídající svou povahou osobnímu údaji, které budou nahodile volnou formou sděleny Subjektem údajů v objednávce či při uzavření Smlouvy, aniž by byly vyžadovány.'}
              {language === 'en' &&
                'additional information corresponding to the nature of the personal data, which will be randomly communicated in a free form by the Data Subject in the process of the order or at the conclusion of the Contract, without being required.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>

          <p className='mt-3'>
            {language === 'cz' &&
              'Tyto osobní údaje zpracováváme pro níže uvedené účely a na základě uvedených právních základů v souladu s čl. 6 odst. 1 GDPR:'}
            {language === 'en' &&
              'We process this personal data for the following purposes and on the basis of the above legal bases in accordance with Art. 6 par. 1 GDPR:'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' &&
                'Plnění smlouvy, která byla mezi námi uzavřena;'}
              {language === 'en' && 'Performance of the contract between us;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'pro plnění právní povinnosti správce (zejména povinností souvisejících s ohlašovací povinností vůči orgánům veřejné správy, vyplývajících z předpisů daňových a jiných právních předpisů);'}
              {language === 'en' &&
                'for the fulfilment of the legal obligation of the administrator (in particular obligations related to reporting obligations towards public authorities, arising from tax and other legal regulations);'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'e-mailová adresa Subjektu údajů bude dále použita dle § 7 odst. 3 č. 480/2004 Sb., o některých službách informační společnosti, ve znění pozdějších předpisů, v souladu s oprávněným zájmem správce pro zasílání obchodních sdělení Správce e-mailem. Toto zasílání obchodních sdělení Správce může Subjekt údajů kdykoliv zrušit. Pro tento účel bude Správce údajů archivovat e-mailovou adresu Subjektu údajů do doby zrušení zasílání obchodních sdělení ze strany Subjektu údajů; to se však nedotýká jiných účelů zpracování e-mailové adresy Subjektu údajů.'}
              {language === 'en' &&
                'The e-mail address of the Data Subject will be further used in accordance with § 7 par. 3 no. 480/2004 Coll., on certain information society services, as amended, in accordance with the legitimate interest of the Administrator for sending commercial communications by the Administrator via e-mail. This sending of commercial communications by the Administrator may be cancelled by the Data Subject at any time. For this purpose, the Data Administrator will archive the e-mail address of the Data Subject until the sending of commercial communications by the Data Subject is cancelled; however, this does not affect other purposes of processing the e-mail address of the Data Subject.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'V případě, že bude Správce užívat Osobní údaje k jinému účelu, než který je stanoven v této Informační doložce, neprodleně poskytne Subjektu údajů informaci o tomto jiném účelu a další informace uvedené v této Informační doložce.'}
              {language === 'en' &&
                'In the case that the Administrator uses the Personal Data for a purpose other than that specified in this Information Clause, it shall immediately provide the Data Subject with information about this other purpose and other information specified in this Information Clause.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'Ze strany Správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR.'}
              {language === 'en' &&
                'There is no automatic individual decision-making by the Administrator within the import of Art. 22 GDPR.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>
        </div>

        <div className='mt-8'>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Další příjemci Osobních údajů'}
            {language === 'en' && 'Other Recipients of Personal Data'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'Osobní údaje Subjektu údajů mohou být Správcem zpřístupněny těmto třetím osobám:'}
            {language === 'en' &&
              'Personal data of the Data Subject may be disclosed by the Administrator to the following third parties:'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' &&
                'externímu poskytovateli účetních a daňově-poradenských služeb pro zpracování účetnictví a daňové agendy Správce, externímu poskytovateli právních služeb;'}
              {language === 'en' &&
                'an external provider of accounting and tax advisory services for the processing of accounting and of tax agenda of the Administrator, an external provider of legal services;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' && 'orgánům veřejné správy;'}

              {language === 'en' && 'public authorities;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'mohou být nahodile zpřístupněny osobám poskytujícím Správci a/nebo dalším příjemcům serverové, webové, cloudové nebo IT služby nebo osobám, které jsou obchodními partnery Správce, je-li to potřeba ke splnění uvedených účelů.'}
              {language === 'en' &&
                'They may be made randomly accessible to persons providing the Administrator and/or other recipients of server, web, cloud or IT services, or to persons who are business partners of the Administrator if necessary for the fulfilment of the stated purposes.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'Správce nemá v úmyslu předat Osobní údaje Subjektu údajů třetím osobám ze zemí mimo EU a EHP'}
              {language === 'en' &&
                'The Administrator does not intend to transfer Personal Data of the Data Subject to third parties from non-EU and EEA countries'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>
        </div>

        <div className='mt-8'>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Doba uložení Osobních údajů'}
            {language === 'en' && 'Period of storage of Personal Data'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'Osobní údaje Subjektu údajů budou Správcem zpracovávány po dobu trvání Smlouvy a dobu následujících pěti (5) let od splnění Smlouvy nebo po dobu nezbytnou k plnění archivačních a jiných zákonných povinností Správce podle platných právních předpisů, trvají-li déle než stanovená doba. Zasílání obchodních sdělení Správce na emailovou adresu Subjektu údajů může Subjekt údajů kdykoliv zrušit. Pro tento účel bude Správce údajů archivovat e-mailovou adresu Subjektu údajů do doby zrušení zasílání obchodních sdělení ze strany Subjektu údajů; to se však nedotýká jiných účelů zpracování e-mailové adresy Subjektu údajů.'}
            {language === 'en' &&
              'Personal data of the Data Subject shall be processed by the Administrator for the duration of the Contract and for the following five (5) years from the fulfilment of the Contract or for the period necessary for the fulfilment of archiving and other legal obligations of the Administrator under applicable legislation, if they last longer than the specified period. The sending of commercial communications by the Administrator to the email address of the Data Subject may be cancelled by the Data Subject at any time. For this purpose, the Data Administrator shall archive the email address of the Data Subject until the sending of commercial communications by the Data Subject is cancelled; however, this does not affect other purposes of the processing of the email address of the Data Subject.'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
        </div>

        <div className='mt-8'>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Práva Subjektu údajů'}
            {language === 'en' && 'Rights of the Data Subject'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'V souladu s předpisy pro ochranu osobních údajů má Subjekt údajů tato práva:'}
            {language === 'en' &&
              'In accordance with the rules on the protection of personal data, the Data Subject has the following rights:'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <ul className='list-disc list-inside'>
            <li>
              {language === 'cz' &&
                'PRÁVO NA PŘÍSTUP k Osobním údajům u Správce, což znamená, že Subjekt údajů může kdykoliv požádat o potvrzení Správce, zda Osobní údaje jsou či nejsou zpracovávány, a pokud jsou, pak za jakými účely, v jakém rozsahu, komu jsou zpřístupněny, jak dlouho budou zpracovávány, zda má právo na opravu, výmaz, omezení zpracování či vznést námitku, odkud Osobní údaje byly získány, a zda dochází na základě zpracování Osobních údajů k automatickému rozhodování, včetně případného profilování. Subjekt údajů má také právo získat kopii Osobních údajů, přičemž první poskytnutí je bezplatné, za další poskytnutí pak může Správce požadovat přiměřenou úhradu administrativních nákladů;'}
              {language === 'en' &&
                'RIGHT TO ACCESS the Personal Data, which means that the Data Subject may at any time ask the Administrator for confirmation as to whether or not the Personal Data is being processed and, if so, for what purposes, to what extent, to whom it is made available, for how long it will be processed, whether the administrator has the right to rectification, erasure, restriction of processing or to object, from where the Personal Data was obtained, and whether automatic decision-making, including profiling, occurs on the basis of the processing of the Personal Data. The Data Subject also has the right to obtain a copy of the Personal Data, with the first provision being free of charge, for further provision the Administrator may then request reasonable payment of administrative costs;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'PRÁVO NA OPRAVU Osobních údajů, což znamená, že Subjekt údajů může kdykoliv požádat Správce o opravu či doplnění Osobních údajů, pokud by byly nepřesné či neúplné;'}
              {language === 'en' &&
                'RIGHT TO CORRECT Personal Data, which means that the Data Subject may at any time ask the Administrator to correct or supplement Personal Data if it is inaccurate or incomplete;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'PRÁVO NA VÝMAZ Osobních údajů, což znamená, že Správce musí vymazat Osobní údaje, pokud již nejsou potřebné pro účely, pro které byly shromážděny nebo jinak zpracovány, Subjekt údajů odvolá souhlas a neexistuje žádný další důvod pro zpracování, Subjekt údajů vznese námitky proti zpracování a neexistují žádné převažující oprávněné důvody pro zpracování, zpracování je protiprávní nebo (v) to ukládá zákonná povinnost;'}
              {language === 'en' &&
                'RIGHT TO DELETE Personal Data, which means that the Administrator must delete Personal Data if they are no longer needed for the purposes for which they were collected or otherwise processed, The Data Subject withdraws consent and there is no further ground for processing, The Data Subject objects to processing and there are no prevailing legitimate grounds for processing, the processing is unlawful or (v) the legal obligation assigns to do so;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'PRÁVO NA OMEZENÍ zpracování Osobních údajů, což znamená, že dokud se nevyřeší sporné otázky ohledně zpracování Osobních údajů, konkrétně pokud Subjekt údajů popírá přesnost Osobních údajů, zpracování je protiprávní, ale místo výmazu Osobních údajů chce Subjekt údajů jejich zpracování pouze omezit, Správce již Osobní údaje nepotřebuje pro účely zpracování, ale Subjekt údajů ano, tak Správce může mít Osobní údaje pouze uloženy a další zpracování je podmíněno souhlasem Subjektu údajů, případně tím, že tyto Osobní údaje jsou potřeba z důvodu určení, výkonu nebo obhajoby právních nároků;'}
              {language === 'en' &&
                'RIGHT TO RESTRICT the processing of Personal Data, which means that until the disputed issues regarding the processing of Personal Data are resolved, namely if the Data Subject denies the accuracy of the Personal Data, the processing is unlawful, however, instead of deleting the Personal Data, the Data Subject only wants to restrict their processing, the Administrator no longer needs the Personal Data for the purposes of processing, but the Data Subject does, so the Administrator may only have the Personal Data stored and further processing is subject to the consent of the Data Subject, or to the fact that such Personal Data is needed for the purpose of determining, exercising or defending legal claims;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'PRÁVO NA PŘENOSITELNOST údajů, což znamená, že Subjekt údajů má právo získat Osobní údaje, které poskytl Správci se souhlasem ke zpracování nebo pro účely plnění smlouvy, ve strukturovaném, běžně používaném a strojově čitelném formátu, a dále má právo, je-li to technicky proveditelné, aby Správce tyto údaje předal jinému správci;'}
              {language === 'en' &&
                'RIGHT TO TRANSMIT the Data, which means that the Data Subject has the right to obtain Personal Data provided to the Administrator with the consent to be processed or for the purposes of performance of a contract, in a structured commonly used and machine-readable format, and also has the right, where technically feasible, to have the Administrator transmit such data to another Administrator;'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
            <li>
              {language === 'cz' &&
                'PRÁVO VZNÉST NÁMITKU proti zpravování Osobních údajů, což znamená, že Subjekt údajů může u Správce podat písemnou či elektronickou námitku proti zpracování svých Osobních údajů, čímž způsobí, že Správce Osobní údaje dále nezpracovává, pokud neprokáže závažné oprávněné důvody pro zpracování, které převažují nad zájmy Subjektu údajů nebo jeho právy a svobodami.'}
              {language === 'en' &&
                'RIGHT TO OBJECT to the processing of Personal Data, which means that the Data Subject may lodge a written or electronic objection to the Administrator against the processing of his or her Personal Data, thereby causing the Administrator to no longer process the Personal Data unless he or she demonstrates compelling legitimate reasons for the processing which outweigh the interests of the Data Subject or his or her rights and freedoms.'}
              {language === 'de' && ''}
              {language === 'ua' && ''}
            </li>
          </ul>
          <p className='mt-3'>
            {language === 'cz' &&
              'Veškerá svá práva, stanovená předchozím odstavcem, může Subjekt údajů uplatnit u Správce buďto písemnou formou přes datovou schránku či elektronickou formou na Kontaktních údajích Správce.'}
            {language === 'en' &&
              "The Data Subject may assert all their rights, as set out in the previous paragraph, at the Administrator either in writing via the data box or electronically at the Administrator's Contact Data."}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <p className='mt-3'>
            {language === 'cz' &&
              'Dále má Subjekt údajů právo podat stížnost proti zpracování Osobních údajů u Úřadu pro ochranu osobních údajů na adrese Pplk. Sochora 27, 170 00 Praha 7 (www.uoou.cz).'}
            {language === 'en' &&
              'Furthermore, the Data Subject has the right to lodge a complaint against the processing of Personal Data at the Personal Data Protection Office at Pplk. Sochora 27, 170 00 Praha 7 (www.uoou.cz).	Furthermore, the Data Subject has the right to lodge a complaint against the processing of Personal Data at the Personal Data Protection Office at Pplk. Sochora 27, 170 00 Praha 7 (www.uoou.cz).'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
        </div>

        <div className='mt-8'>
          <h2 className='font-labil text-2xl sm:text-3xl font-black'>
            {language === 'cz' && 'Mlčenlivost'}
            {language === 'en' && 'Confidentiality'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </h2>
          <p>
            {language === 'cz' &&
              'Dovolujeme si Vás ujistit, že naši zaměstnanci a externí lektoři, kteří budou zpracovávat Vaše osobní údaje, jsou povinni zachovávat mlčenlivost o osobních údajích a o bezpečnostních opatřeních, jejichž zveřejnění by ohrozilo zabezpečení Vašich osobních údajů. Tato mlčenlivost přitom trvá i po skončení závazkových vztahů s námi. Bez vašeho souhlasu nebudou Vaše osobní údaje vydány žádné jiné třetí straně.'}
            {language === 'en' &&
              'We assure you that our employees and external tutors, who will process your personal data, are required to maintain confidentiality about personal data and security measures, the disclosure of which would compromise the security of your personal data. This confidentiality continues even after the end of the contractual obligations with us. Your personal data will not be disclosed to any other third party without your consent.'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
          <p className='mt-3'>
            {language === 'cz' &&
              'Tyto zásady zpracování osobních údajů platí od 1. 9. 2023'}
            {language === 'en' &&
              'This personal data processing policy has applied since September 9, 2023.'}
            {language === 'de' && ''}
            {language === 'ua' && ''}
          </p>
        </div>
      </Container>
    </main>
  )
}
