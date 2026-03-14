import { groq } from 'next-sanity'

export const LectorsQuery = groq`
    *[_type=='lector'] {
        ...,
    } | order(order asc)
`

export const LectorsPathsQuery = groq`
    *[_type == "lector" && defined(slug.current)][]{
        "params": { "slug": slug.current }
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
        "params": { "slug": slug.current }
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

export const RedirectsQuery = groq`
    *[_type=='redirect'] {
        source,
        destination,
        permanent
    }
`
