import { groq } from 'next-sanity'

export const LectorsQuery = groq`
    *[_type=='lector'] {
        ...,
    } | order(order asc)
`

export const LectorsPathsQuery = groq`
    *[_type == "lector" && defined(slug.current)][]{
        "slug": slug.current
    }
`

export const LectorQuery = groq`
    *[_type == "lector" && slug.current == $slug][0]{
        ...
    }
`

export const LookingForQuery = groq`
    *[_type=='lookingFor'] {
        ...,
    } | order(order asc)
`

export const ForLectorsPageQuery = groq`
    *[_type=='forLectorsPage'][0]{
        ...
    }
`

export const PostsQuery = groq`
    *[_type=='post'] {
        ...,
        categories[]->
    }
`

export const PostsPathsQuery = groq`
    *[_type == "post" && defined(slug.current)][]{
        "slug": slug.current
    }
`

export const PostQuery = groq`
    *[_type == "post" && slug.current == $slug][0]{
        ...,
        writtenby->,
        categories[]->
    }
`

export const CategoriesQuery = groq`
    *[_type=='category'] {
        ...,
    }
`

export const LanguagesQuery = groq`
    *[_type=='language'] {
        ...,
    } | order(order asc)
`

export const LanguagesPathsQuery = groq`
    *[_type == "language" && defined(slug.current)][]{
        "slug": slug.current
    }
`

export const LanguageQuery = groq`
    *[_type == "language" && slug.current == $slug][0]{
        ...,
        lectors[]{
            lector->
        }
    }
`

export const CompaniesQuery = groq`
    *[_type=='company'] {
        ...,
    }
`

export const ReviewsQuery = groq`
    *[_type=='review'] {
        ...,
    }
`

export const PaymentQuery = groq`
    *[_type=='payment'] {
        ...,
    }
`

export const PricelistQuery = groq`
    *[_type=='pricelist'] {
        ...,
    } | order(order asc)
`

export const HowItWorksQuery = groq`
    *[_type=='howItWorks'][0]{
        ...
    }
`

export const ContactSettingsQuery = groq`
    *[_type=='contactSettings'][0]{
        enabled,
        formUrl,
        iframeTitle
    }
`

export const FeedbackSettingsQuery = groq`
    *[_type=='feedbackSettings'][0]{
        enabled,
        formUrl,
        iframeTitle
    }
`

export const RedirectsQuery = groq`
    *[_type=='redirect'] {
        source,
        destination,
        permanent
    }
`

export const SitemapLanguagesQuery = groq`
    *[_type == "language" && defined(slug.current) && disabled != true]{
        "slug": slug.current,
        _updatedAt
    }
`

export const SitemapLectorsQuery = groq`
    *[_type == "lector" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
    }
`

export const SitemapPostsQuery = groq`
    *[_type == "post" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
    }
`
