const { createClient } = require('next-sanity')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    try {
      const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: '2024-01-14',
        useCdn: true,
      })

      const redirects = await client.fetch(
        `*[_type=='redirect']{ source, destination, permanent }`
      )

      return redirects.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent ?? false,
      }))
    } catch (error) {
      console.error('Failed to fetch redirects from Sanity:', error)
      return []
    }
  },
}

module.exports = nextConfig
