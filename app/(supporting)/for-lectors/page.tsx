import { ForLectors } from '@/containers/for-lectors'
import { cachedClient } from '@/sanity/lib/client'
import { ForLectorsPageQuery, LookingForQuery } from '@/sanity/lib/queries'

export default async function Page() {
  const page = await cachedClient(ForLectorsPageQuery)
  const lookingFor = await cachedClient(LookingForQuery)

  return (
    <main className='mt-28 md:mt-32 min-h-screen mb-8'>
      <ForLectors page={page} lookingFor={lookingFor} />
    </main>
  )
}
