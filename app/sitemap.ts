import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import {
  SitemapLanguagesQuery,
  SitemapLectorsQuery,
  SitemapPostsQuery,
} from '@/sanity/lib/queries'

export const revalidate = 3600 // revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rozmluv.se'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-lectors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-info`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  try {
    const [languages, lectors, posts] = await Promise.all([
      client.fetch<{ slug: string; _updatedAt?: string }[]>(
        SitemapLanguagesQuery,
        {},
        { next: { revalidate: 3600 } }
      ),
      client.fetch<{ slug: string; _updatedAt?: string }[]>(
        SitemapLectorsQuery,
        {},
        { next: { revalidate: 3600 } }
      ),
      client.fetch<{ slug: string; _updatedAt?: string }[]>(
        SitemapPostsQuery,
        {},
        { next: { revalidate: 3600 } }
      ),
    ])

    const languageRoutes: MetadataRoute.Sitemap = (languages || []).map((item) => ({
      url: `${baseUrl}/languages/${item.slug}`,
      lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }))

    const lectorRoutes: MetadataRoute.Sitemap = (lectors || []).map((item) => ({
      url: `${baseUrl}/lectors/${item.slug}`,
      lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

    const postRoutes: MetadataRoute.Sitemap = (posts || []).map((item) => ({
      url: `${baseUrl}/blog/posts/${item.slug}`,
      lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

    return [...staticRoutes, ...languageRoutes, ...lectorRoutes, ...postRoutes]
  } catch (error) {
    console.error('Failed to generate dynamic sitemap:', error)
    return staticRoutes
  }
}
