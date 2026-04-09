import { defineField, defineType } from 'sanity'

const isNotFeaturedOnAbout = ({ document }: { document?: { featuredOnAbout?: boolean } }) =>
  !document?.featuredOnAbout

export default defineType({
  name: 'lector',
  title: 'Lektor*ka',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Jméno',
      type: 'string',
    }),
    defineField({
      name: 'roleCz',
      title: 'Role 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'roleEn',
      title: 'Role 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'roleDe',
      title: 'Role 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'roleUa',
      title: 'Role 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Odkaz',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altImage',
      title: 'Alternativní Obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bioCz',
      title: 'Bio 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'bioEn',
      title: 'Bio 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'bioDe',
      title: 'Bio 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'bioUa',
      title: 'Bio 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'featuredOnAbout',
      title: 'Zvýraznit v sekci O nás',
      type: 'boolean',
    }),
    defineField({
      name: 'aboutFeaturedOrder',
      title: 'Pořadí ve featured kartách',
      type: 'number',
      hidden: isNotFeaturedOnAbout,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.featuredOnAbout && typeof value !== 'number') {
            return 'Vyplň pořadí ve featured kartách.'
          }

          return true
        }),
    }),
    defineField({
      name: 'aboutOrder',
      title: 'Pořadí v gridu O nás',
      type: 'number',
    }),
    defineField({
      name: 'aboutBadgeCz',
      title: 'Badge O nás 🇨🇿',
      type: 'string',
      hidden: isNotFeaturedOnAbout,
    }),
    defineField({
      name: 'aboutBadgeEn',
      title: 'Badge O nás 🇬🇧',
      type: 'string',
      hidden: isNotFeaturedOnAbout,
    }),
    defineField({
      name: 'aboutBadgeDe',
      title: 'Badge O nás 🇩🇪',
      type: 'string',
      hidden: isNotFeaturedOnAbout,
    }),
    defineField({
      name: 'aboutBadgeUa',
      title: 'Badge O nás 🇺🇦',
      type: 'string',
      hidden: isNotFeaturedOnAbout,
    }),
    defineField({
      name: 'featuredEmail',
      title: 'E-mail pro featured CTA',
      description:
        'Použije se pro tlačítko "napsat zprávu" ve featured kartě v sekci O nás.',
      type: 'email',
      hidden: isNotFeaturedOnAbout,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.featuredOnAbout && !value) {
            return 'Featured lektor*ka musí mít vyplněný e-mail.'
          }

          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
