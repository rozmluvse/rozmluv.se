import { NextResponse } from 'next/server'

type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  gdprConsent?: boolean
  website?: string
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload

  if (body.website) {
    return NextResponse.json({ message: 'OK' })
  }

  if (
    !body.firstName?.trim() ||
    !body.lastName?.trim() ||
    !body.email?.trim() ||
    !body.message?.trim() ||
    !body.gdprConsent
  ) {
    return NextResponse.json(
      { error: 'Vyplň prosím všechna povinná pole.' },
      { status: 400 },
    )
  }

  const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(body.email)

  if (!isValidEmail) {
    return NextResponse.json(
      { error: 'Zadej prosím platný e-mail.' },
      { status: 400 },
    )
  }

  console.log('Contact form submission', {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone || '',
    message: body.message,
  })

  return NextResponse.json({
    message:
      'Díky, zpráva dorazila. Turnstile a finální doručování doplníme v dalším kroku.',
  })
}
