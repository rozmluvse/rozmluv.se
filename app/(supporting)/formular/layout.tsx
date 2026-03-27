'use client'

import { useLanguage } from '@/store/use-language'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'cz'
        ? 'Kontaktní formulář | rozmluv se'
        : language === 'en'
          ? 'Contact form | rozmluv se'
          : language === 'de'
            ? 'Kontaktformular | rozmluv se'
            : 'Контактна форма | rozmluv se'
  }, [language])

  return <>{children}</>
}
