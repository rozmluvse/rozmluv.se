import { defineField, defineType } from 'sanity'

const cardFields = [
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
    name: 'descriptionCz',
    title: 'Popis 🇨🇿',
    type: 'text',
    rows: 3,
  }),
  defineField({
    name: 'descriptionEn',
    title: 'Popis 🇬🇧',
    type: 'text',
    rows: 3,
  }),
  defineField({
    name: 'descriptionDe',
    title: 'Popis 🇩🇪',
    type: 'text',
    rows: 3,
  }),
  defineField({
    name: 'descriptionUa',
    title: 'Popis 🇺🇦',
    type: 'text',
    rows: 3,
  }),
  defineField({
    name: 'color',
    title: 'Barva',
    type: 'string',
  }),
]

export default defineType({
  name: 'howItWorks',
  title: 'Jak to funguje?',
  type: 'document',
  fields: [
    defineField({
      name: 'descriptionCz',
      title: 'Popis sekce 🇨🇿',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Popis sekce 🇬🇧',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionDe',
      title: 'Popis sekce 🇩🇪',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionUa',
      title: 'Popis sekce 🇺🇦',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'card1',
      title: 'Karta 1',
      type: 'object',
      fields: cardFields,
    }),
    defineField({
      name: 'card2',
      title: 'Karta 2',
      type: 'object',
      fields: cardFields,
    }),
    defineField({
      name: 'card3',
      title: 'Karta 3',
      type: 'object',
      fields: cardFields,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Jak to funguje?',
      }
    },
  },
})
