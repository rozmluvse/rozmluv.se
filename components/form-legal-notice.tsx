import { cn } from '@/lib/utils'
import Link from 'next/link'

type FormLegalNoticeProps = {
  className?: string
}

export const FormLegalNotice = ({ className }: FormLegalNoticeProps) => (
  <p
    className={cn(
      'mt-6 max-w-3xl font-stabil text-sm leading-relaxed text-black/60 md:text-base',
      className
    )}
  >
    Odesláním dotazníku souhlasíš se zpracováním vyplněných údajů pro účely
    zkvalitnění služeb www.rozmluv.se a s tím, že ti můžeme zasílat newsletter a
    marketingovou komunikaci v souladu s našimi{' '}
    <Link
      href='/personal-info'
      className='underline decoration-black/30 underline-offset-4 transition-colors hover:text-black hover:decoration-black'
    >
      zásadami ochrany osobních údajů
    </Link>
    .
  </p>
)
