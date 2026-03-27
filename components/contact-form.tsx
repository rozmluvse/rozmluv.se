'use client'

import Link from 'next/link'
import { FormEvent, useMemo, useState } from 'react'
import { useLanguage } from '@/store/use-language'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  gdprConsent: boolean
  website: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  gdprConsent: false,
  website: '',
}

export const ContactForm = () => {
  const { language } = useLanguage()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const copy = useMemo(
    () => ({
      legend:
        language === 'cz'
          ? 'Kontaktní formulář'
          : language === 'en'
            ? 'Contact form'
            : language === 'de'
              ? 'Kontaktformular'
              : 'Контактна форма',
      intro:
        language === 'cz'
          ? 'Ozveme se co nejdřív a domluvíme další postup.'
          : language === 'en'
            ? 'We will get back to you as soon as possible and suggest next steps.'
            : language === 'de'
              ? 'Wir melden uns so bald wie möglich und schlagen die nächsten Schritte vor.'
              : 'Ми відповімо якнайшвидше і запропонуємо подальший postup.',
      firstName:
        language === 'cz'
          ? 'Jméno *'
          : language === 'en'
            ? 'First name *'
            : language === 'de'
              ? 'Vorname *'
              : "Ім'я *",
      lastName:
        language === 'cz'
          ? 'Příjmení *'
          : language === 'en'
            ? 'Last name *'
            : language === 'de'
              ? 'Nachname *'
              : 'Прізвище *',
      email:
        language === 'cz'
          ? 'E-mail *'
          : language === 'en'
            ? 'Email *'
            : language === 'de'
              ? 'E-Mail *'
              : 'E-mail *',
      phone:
        language === 'cz'
          ? 'Telefon'
          : language === 'en'
            ? 'Phone'
            : language === 'de'
              ? 'Telefon'
              : 'Телефон',
      message:
        language === 'cz'
          ? 'Zpráva *'
          : language === 'en'
            ? 'Message *'
            : language === 'de'
              ? 'Nachricht *'
              : 'Повідомлення *',
      gdpr:
        language === 'cz'
          ? 'Souhlasím se zpracováním osobních údajů.'
          : language === 'en'
            ? 'I agree to the processing of personal data.'
            : language === 'de'
              ? 'Ich stimme der Verarbeitung personenbezogener Daten zu.'
              : 'Я погоджуюся на обробку персональних даних.',
      submit:
        language === 'cz'
          ? 'Odeslat zprávu'
          : language === 'en'
            ? 'Send message'
            : language === 'de'
              ? 'Nachricht senden'
              : 'Надіслати повідомлення',
      placeholders: {
        firstName:
          language === 'cz'
            ? 'Tvoje jméno'
            : language === 'en'
              ? 'Your first name'
              : language === 'de'
                ? 'Dein Vorname'
                : "Твоє ім'я",
        lastName:
          language === 'cz'
            ? 'Tvoje příjmení'
            : language === 'en'
              ? 'Your last name'
              : language === 'de'
                ? 'Dein Nachname'
                : 'Твоє прізвище',
        email: 'hello@email.com',
        phone:
          language === 'cz'
            ? 'Nepovinné'
            : language === 'en'
              ? 'Optional'
              : language === 'de'
                ? 'Optional'
                : "Не обов'язково",
        message:
          language === 'cz'
            ? 'S čím ti můžeme pomoct?'
            : language === 'en'
              ? 'How can we help you?'
              : language === 'de'
                ? 'Womit koennen wir dir helfen?'
                : 'Чим ми можемо допомогти?',
      },
      errors: {
        firstName:
          language === 'cz'
            ? 'Jméno je povinné.'
            : language === 'en'
              ? 'First name is required.'
              : language === 'de'
                ? 'Vorname ist erforderlich.'
                : "Ім'я є обов'язковим.",
        lastName:
          language === 'cz'
            ? 'Příjmení je povinné.'
            : language === 'en'
              ? 'Last name is required.'
              : language === 'de'
                ? 'Nachname ist erforderlich.'
                : "Прізвище є обов'язковим.",
        emailRequired:
          language === 'cz'
            ? 'E-mail je povinný.'
            : language === 'en'
              ? 'Email is required.'
              : language === 'de'
                ? 'E-Mail ist erforderlich.'
                : "E-mail є обов'язковим.",
        emailInvalid:
          language === 'cz'
            ? 'Zadej platný e-mail.'
            : language === 'en'
              ? 'Enter a valid email.'
              : language === 'de'
                ? 'Gib eine gueltige E-Mail ein.'
                : 'Введи коректний e-mail.',
        message:
          language === 'cz'
            ? 'Zpráva je povinná.'
            : language === 'en'
              ? 'Message is required.'
              : language === 'de'
                ? 'Nachricht ist erforderlich.'
                : "Повідомлення є обов'язковим.",
        gdpr:
          language === 'cz'
            ? 'Souhlas je povinný.'
            : language === 'en'
              ? 'Consent is required.'
              : language === 'de'
                ? 'Zustimmung ist erforderlich.'
                : "Потрібна згода.",
      },
      success:
        language === 'cz'
          ? 'Zpráva byla odeslána.'
          : language === 'en'
            ? 'Message sent.'
            : language === 'de'
              ? 'Nachricht wurde gesendet.'
              : 'Повідомлення надіслано.',
      error:
        language === 'cz'
          ? 'Nepodařilo se odeslat formulář. Zkus to prosím znovu.'
          : language === 'en'
            ? 'Failed to submit the form. Please try again.'
            : language === 'de'
              ? 'Das Formular konnte nicht gesendet werden. Bitte versuche es erneut.'
              : 'Не вдалося надіслати форму. Спробуй ще раз.',
      privacy:
        language === 'cz'
          ? 'zpracováním osobních údajů'
          : language === 'en'
            ? 'personal data processing'
            : language === 'de'
              ? 'Verarbeitung personenbezogener Daten'
              : 'обробкою персональних даних',
    }),
    [language],
  )

  const inputClassName =
    'w-full rounded-2xl border border-black/10 bg-white/85 px-4 py-3.5 font-stabil text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-black/20 focus:bg-white'

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!values.firstName.trim()) nextErrors.firstName = copy.errors.firstName
    if (!values.lastName.trim()) nextErrors.lastName = copy.errors.lastName
    if (!values.email.trim()) {
      nextErrors.email = copy.errors.emailRequired
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      nextErrors.email = copy.errors.emailInvalid
    }
    if (!values.message.trim()) nextErrors.message = copy.errors.message
    if (!values.gdprConsent) nextErrors.gdprConsent = copy.errors.gdpr

    return nextErrors
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    setSubmitState({ type: null, message: '' })

    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || copy.error)
      }

      setSubmitState({
        type: 'success',
        message: result.message || copy.success,
      })
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: error instanceof Error ? error.message : copy.error,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className='space-y-6'>
      <div className='space-y-3'>
        <h3 className='font-labil text-3xl font-bold leading-tight text-black xl:text-4xl'>
          {copy.legend}
        </h3>
        <p className='max-w-xl font-stabil text-base leading-tight text-black/70 xl:text-lg'>
          {copy.intro}
        </p>
      </div>

      <input
        type='text'
        name='website'
        autoComplete='off'
        tabIndex={-1}
        value={values.website}
        onChange={(event) =>
          setValues((current) => ({ ...current, website: event.target.value }))
        }
        className='hidden'
      />

      <div className='grid gap-4 sm:grid-cols-2'>
        <div className='space-y-2'>
          <label className='font-stabil text-sm text-black/60'>
            {copy.firstName}
          </label>
          <input
            type='text'
            value={values.firstName}
            onChange={(event) =>
              setValues((current) => ({ ...current, firstName: event.target.value }))
            }
            className={inputClassName}
            placeholder={copy.placeholders.firstName}
          />
          {errors.firstName && (
            <p className='font-stabil text-sm text-[#C94B5D]'>{errors.firstName}</p>
          )}
        </div>

        <div className='space-y-2'>
          <label className='font-stabil text-sm text-black/60'>
            {copy.lastName}
          </label>
          <input
            type='text'
            value={values.lastName}
            onChange={(event) =>
              setValues((current) => ({ ...current, lastName: event.target.value }))
            }
            className={inputClassName}
            placeholder={copy.placeholders.lastName}
          />
          {errors.lastName && (
            <p className='font-stabil text-sm text-[#C94B5D]'>{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className='space-y-2'>
        <label className='font-stabil text-sm text-black/60'>
          {copy.email}
        </label>
        <input
          type='email'
          value={values.email}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
          className={inputClassName}
          placeholder={copy.placeholders.email}
        />
        {errors.email && (
          <p className='font-stabil text-sm text-[#C94B5D]'>{errors.email}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label className='font-stabil text-sm text-black/60'>
          {copy.phone}
        </label>
        <input
          type='tel'
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
          className={inputClassName}
          placeholder={copy.placeholders.phone}
        />
      </div>

      <div className='space-y-2'>
        <label className='font-stabil text-sm text-black/60'>
          {copy.message}
        </label>
        <textarea
          rows={6}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          className={`${inputClassName} min-h-40 resize-y`}
          placeholder={copy.placeholders.message}
        />
        {errors.message && (
          <p className='font-stabil text-sm text-[#C94B5D]'>{errors.message}</p>
        )}
      </div>

      <div className='rounded-2xl bg-white/55 p-4'>
        <label className='flex items-start gap-3 font-stabil text-sm leading-tight text-black/75'>
          <input
            type='checkbox'
            checked={values.gdprConsent}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                gdprConsent: event.target.checked,
              }))
            }
            className='mt-0.5 h-4 w-4 rounded border-black'
          />
          <span>
            * {copy.gdpr}{' '}
            <Link href='/personal-info' className='underline'>
              {copy.privacy}
            </Link>
            .
          </span>
        </label>
        {errors.gdprConsent && (
          <p className='font-stabil text-sm text-[#C94B5D]'>{errors.gdprConsent}</p>
        )}
      </div>

      {submitState.type && (
        <div
          className={`rounded-2xl border px-4 py-3 font-stabil text-sm ${
            submitState.type === 'success'
              ? 'border-[#79B54A]/30 bg-[#EAF6DD] text-black'
              : 'border-[#C94B5D]/30 bg-[#FCE8EC] text-black'
          }`}
        >
          {submitState.message}
        </div>
      )}

      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex h-12 items-center justify-center rounded-2xl border-2 border-black bg-white px-7 font-labil text-xl font-bold leading-6 text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50'
      >
        {isSubmitting ? '…' : copy.submit}
      </button>
    </form>
  )
}
