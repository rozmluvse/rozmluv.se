export const getGoogleFormsEmbedUrl = (formUrl?: string) => {
  if (!formUrl) {
    return null
  }

  try {
    const url = new URL(formUrl)

    if (
      url.protocol !== 'https:' ||
      url.hostname !== 'docs.google.com' ||
      !url.pathname.startsWith('/forms/')
    ) {
      return null
    }

    url.searchParams.set('embedded', 'true')

    return url.toString()
  } catch {
    return null
  }
}
