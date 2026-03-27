'use client'

import { Turnstile as TurnstilePrimitive } from '@marsidev/react-turnstile'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export type TurnstileRef = {
  reset: () => void
  getResponse: () => string | null
}

type TurnstileComponentProps = {
  onSuccess?: (token: string) => void
  onError?: () => void
  onExpire?: () => void
  className?: string
}

export const Turnstile = forwardRef<TurnstileRef, TurnstileComponentProps>(
  ({ onSuccess, onError, onExpire, className }, ref) => {
    const turnstileRef = useRef<any>(null)

    useImperativeHandle(ref, () => ({
      reset: () => {
        turnstileRef.current?.reset()
      },
      getResponse: () => {
        return turnstileRef.current?.getResponse() || null
      },
    }))

    return (
      <TurnstilePrimitive
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={onSuccess}
        onError={onError}
        onExpire={onExpire}
        className={className}
        options={{
          theme: 'light',
          size: 'normal',
        }}
      />
    )
  },
)

Turnstile.displayName = 'Turnstile'
