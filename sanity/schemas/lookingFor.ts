import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lookingFor',
  title: 'Právě Hledáme',
  type: 'document',
  fields: [
    defineField({
      name: 'titleCz',
      title: 'Nadpis 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Nadpis 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'titleDe',
      title: 'Nadpis 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'titleUa',
      title: 'Nadpis 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'textCz',
      title: '🇨🇿',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'textEn',
      title: '🇬🇧',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'textDe',
      title: '🇩🇪',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'textUa',
      title: '🇺🇦',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
    }),
    defineField({
      name: 'color',
      title: 'Barva',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'titleCz',
    },
  },
})
