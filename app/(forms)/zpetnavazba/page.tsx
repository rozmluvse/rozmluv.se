import { Container } from '@/components/container'
import { getGoogleFormsEmbedUrl } from '@/lib/google-forms'
import { cachedClient } from '@/sanity/lib/client'
import { FeedbackSettingsQuery } from '@/sanity/lib/queries'

type FeedbackSettings = {
  enabled?: boolean
  formUrl?: string
  iframeTitle?: string
} | null

export default async function Page() {
  const feedbackSettings =
    await cachedClient<FeedbackSettings>(FeedbackSettingsQuery)
  const formUrl =
    feedbackSettings?.enabled === false
      ? null
      : getGoogleFormsEmbedUrl(feedbackSettings?.formUrl)
  const iframeTitle =
    feedbackSettings?.iframeTitle?.trim() || 'Formulář zpětné vazby'

  return (
    <main className='mt-20 min-h-[60vh] overflow-hidden bg-white mb-32 lg:mt-32 lg:mb-40 xl:mt-24'>
      <Container>
        {formUrl && (
          <iframe
            src={formUrl}
            title={iframeTitle}
            loading='lazy'
            className='min-h-[720px] w-full border-0'
          />
        )}
      </Container>
    </main>
  )
}
