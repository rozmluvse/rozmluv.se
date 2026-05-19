import { Container } from '@/components/container'
import { FormLegalNotice } from '@/components/form-legal-notice'
import { getGoogleFormsEmbedUrl } from '@/lib/google-forms'
import { cachedClient } from '@/sanity/lib/client'
import { ContactSettingsQuery } from '@/sanity/lib/queries'

type ContactSettings = {
  enabled?: boolean
  formUrl?: string
  iframeTitle?: string
} | null

export default async function Page() {
  const contactSettings =
    await cachedClient<ContactSettings>(ContactSettingsQuery)
  const formUrl =
    contactSettings?.enabled === false
      ? null
      : getGoogleFormsEmbedUrl(contactSettings?.formUrl)
  const iframeTitle =
    contactSettings?.iframeTitle?.trim() || 'Kontaktní formulář'

  return (
    <main className='mt-20 min-h-[60vh] overflow-hidden bg-white mb-32 lg:mt-32 lg:mb-40 xl:mt-24'>
      <Container>
        {formUrl && (
          <>
            <iframe
              src={formUrl}
              title={iframeTitle}
              loading='lazy'
              className='min-h-[720px] w-full border-0'
            />
            <FormLegalNotice className='mx-auto text-center' />
          </>
        )}
      </Container>
    </main>
  )
}
