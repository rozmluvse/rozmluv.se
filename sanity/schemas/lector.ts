import { defineField, defineType } from 'sanity'

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
    }),
    defineField({
      name: 'aboutBadgeEn',
      title: 'Badge O nás 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'aboutBadgeDe',
      title: 'Badge O nás 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'aboutBadgeUa',
      title: 'Badge O nás 🇺🇦',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
