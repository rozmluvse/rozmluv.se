export function normalizePhoneNumber(value: string) {
  return value.replace(/[\s()-]/g, '')
}

export function isValidPhoneNumber(value: string) {
  const normalized = normalizePhoneNumber(value)

  if (!normalized) return true

  return /^\+?[0-9]{7,15}$/.test(normalized)
}
