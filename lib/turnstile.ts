const VERIFY_ENDPOINT_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const VERIFICATION_TIMEOUT_MS = 10000

type TurnstileResponse = {
  success: boolean
  hostname?: string
  'error-codes'?: string[]
}

export type TurnstileVerificationResult = {
  success: boolean
  error?: string
  hostname?: string
  errorCodes?: string[]
}

export async function verifyTurnstileToken(
  token: string,
  remoteip?: string,
): Promise<TurnstileVerificationResult> {
  try {
    const secret = process.env.TURNSTILE_SECRET_KEY

    if (!secret) {
      return {
        success: false,
        error: 'Server configuration error - missing Turnstile secret key.',
      }
    }

    if (!token) {
      return {
        success: false,
        error: 'Missing Turnstile verification.',
      }
    }

    if (token.length > 2048) {
      return {
        success: false,
        error: 'Invalid token format.',
      }
    }

    const params = new URLSearchParams({
      secret,
      response: token,
    })

    if (remoteip) {
      params.append('remoteip', remoteip)
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), VERIFICATION_TIMEOUT_MS)

    try {
      const response = await fetch(VERIFY_ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const data = (await response.json()) as TurnstileResponse

      if (!data.success) {
        const errorCodes = data['error-codes'] || []

        return {
          success: false,
          error: getErrorMessage(errorCodes),
          errorCodes,
        }
      }

      return {
        success: true,
        hostname: data.hostname,
      }
    } catch (fetchError) {
      clearTimeout(timeoutId)
      throw fetchError
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        success: false,
        error: 'Verification timeout. Please try again.',
      }
    }

    return {
      success: false,
      error: 'An error occurred during verification. Please try again.',
    }
  }
}

function getErrorMessage(errorCodes: string[]) {
  if (errorCodes.includes('timeout-or-duplicate')) {
    return 'Verification expired or already used. Please try again.'
  }
  if (errorCodes.includes('invalid-input-response')) {
    return 'Invalid verification. Please refresh and try again.'
  }
  if (errorCodes.includes('invalid-input-secret')) {
    return 'Server configuration error. Please contact support.'
  }
  if (errorCodes.includes('missing-input-response')) {
    return 'Missing verification. Please complete the challenge.'
  }
  if (errorCodes.includes('missing-input-secret')) {
    return 'Server configuration error. Please contact support.'
  }
  if (errorCodes.includes('bad-request')) {
    return 'Invalid request. Please try again.'
  }
  if (errorCodes.includes('internal-error')) {
    return 'Verification service temporarily unavailable. Please try again.'
  }

  return 'Verification failed. Please try again.'
}

export function getClientIP(request: Request): string | undefined {
  const cfConnectingIP = request.headers.get('CF-Connecting-IP')
  const xForwardedFor = request.headers.get('X-Forwarded-For')
  const xRealIP = request.headers.get('X-Real-IP')

  return (
    cfConnectingIP ||
    (xForwardedFor ? xForwardedFor.split(',')[0].trim() : undefined) ||
    xRealIP ||
    undefined
  )
}
