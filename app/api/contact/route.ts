import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { isValidPhoneNumber } from '@/lib/contact-validation'
import { getEmailConfig } from '@/lib/email'
import { getClientIP, verifyTurnstileToken } from '@/lib/turnstile'

type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  gdprConsent?: boolean
  website?: string
  turnstileToken?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    if (body.website) {
      return NextResponse.json({ message: 'OK' })
    }

    if (
      !body.firstName?.trim() ||
      !body.lastName?.trim() ||
      !body.email?.trim() ||
      !body.message?.trim() ||
      !body.gdprConsent ||
      !body.turnstileToken
    ) {
      return NextResponse.json(
        { error: 'Vyplň prosím všechna povinná pole.' },
        { status: 400 },
      )
    }

    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      body.email,
    )

    if (!isValidEmail) {
      return NextResponse.json(
        { error: 'Zadej prosím platný e-mail.' },
        { status: 400 },
      )
    }

    if (body.phone?.trim() && !isValidPhoneNumber(body.phone)) {
      return NextResponse.json(
        { error: 'Zadej prosím platné telefonní číslo.' },
        { status: 400 },
      )
    }

    const clientIP = getClientIP(request)
    const turnstileResult = await verifyTurnstileToken(
      body.turnstileToken,
      clientIP,
    )

    if (!turnstileResult.success) {
      return NextResponse.json(
        {
          error:
            turnstileResult.error ||
            'Verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const emailConfig = getEmailConfig()

    try {
      const transporter = nodemailer.createTransport({
        host: emailConfig.smtp.host,
        port: emailConfig.smtp.port,
        secure: emailConfig.smtp.secure,
        auth: emailConfig.auth,
        tls: {
          rejectUnauthorized: process.env.NODE_ENV === 'production',
          minVersion: 'TLSv1',
        },
      })

      await transporter.verify()

      const mailOptions = {
        from: emailConfig.sender.from,
        to: emailConfig.contactForm.to,
        subject: emailConfig.contactForm.subject,
        replyTo: body.email,
        html: `
          <h2>Nova zprava z kontaktniho formulare</h2>
          <p><strong>Jmeno:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>E-mail:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Telefon:</strong> ${body.phone}</p>` : ''}
          <p><strong>Zprava:</strong></p>
          <div style="background-color:#f5f5f5;padding:15px;border-left:4px solid #FFC900;margin:10px 0;">
            ${body.message.replace(/\n/g, '<br>')}
          </div>
          <hr>
          <p style="font-size:12px;color:#666;">
            Odeslano z kontaktniho formulare na rozmluv.se<br>
            Cas odeslani: ${new Date().toLocaleString('cs-CZ')}
          </p>
        `,
        text: `
Nova zprava z kontaktniho formulare

Jmeno: ${body.firstName} ${body.lastName}
E-mail: ${body.email}
${body.phone ? `Telefon: ${body.phone}` : ''}

Zprava:
${body.message}

---
Odeslano z kontaktniho formulare na rozmluv.se
Cas odeslani: ${new Date().toLocaleString('cs-CZ')}
        `,
      }

      await transporter.sendMail(mailOptions)

      return NextResponse.json({
        success: true,
        message: 'Zpráva byla úspěšně odeslána.',
      })
    } catch (smtpError) {
      console.error('SMTP configuration error:', smtpError)
      return NextResponse.json(
        { error: 'Problém s připojením k e-mailovému serveru.' },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Došlo k chybě při zpracování formuláře.' },
      { status: 500 },
    )
  }
}
