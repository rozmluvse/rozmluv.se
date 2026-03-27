import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const ecomailApiKey = process.env.ECOMAIL_API_KEY

    if (!ecomailApiKey) {
      console.error('ECOMAIL_API_KEY is not set')
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )
    }

    const payload = {
      subscriber_data: {
        name: body.name || '',
        email: body.email,
        custom_fields: {
          language: body.language || 'cz',
        },
      },
      update_existing: true,
      trigger_autoresponders: true,
    }

    const response = await fetch('https://api2.ecomailapp.cz/lists/1/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        key: ecomailApiKey,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Ecomail API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Newsletter API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
