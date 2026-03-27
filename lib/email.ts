export type EmailConfig = {
  smtp: {
    host: string
    port: number
    secure: boolean
  }
  auth: {
    user: string
    pass: string
  }
  sender: {
    from: string
    replyTo?: string | boolean
  }
  contactForm: {
    to: string
    subject: string
  }
}

export function getEmailConfig(): EmailConfig {
  return {
    smtp: {
      host: process.env.EMAIL_HOST!,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'true',
    },
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASSWORD!,
    },
    sender: {
      from: `"rozmluv se" <${process.env.EMAIL_USER!}>`,
      replyTo: true,
    },
    contactForm: {
      to: process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER!,
      subject: 'Nová zpráva z kontaktního formuláře - rozmluv se',
    },
  }
}
