import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'language',
  title: 'Jazyk',
  type: 'document',
  fields: [
    defineField({
      name: 'titleCz',
      title: 'Název 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Název 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'titleDe',
      title: 'Název 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'titleUa',
      title: 'Název 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleCz',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'subtitleCz',
      title: 'Podtitulek 🇨🇿',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subtitleEn',
      title: 'Podtitulek 🇬🇧',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subtitleDe',
      title: 'Podtitulek 🇩🇪',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subtitleUa',
      title: 'Podtitulek 🇺🇦',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
    }),
    defineField({
      name: 'disabled',
      title: 'Neaktivní',
      type: 'boolean',
    }),
    defineField({
      name: 'color',
      title: 'Barva',
      type: 'string',
    }),
    defineField({
      name: 'lectors',
      title: 'Lektoři',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Lektor',
          type: 'object',
          fields: [
            defineField({
              name: 'lector',
              title: 'Lektor*ka',
              type: 'reference',
              to: [{ type: 'lector' }],
            }),
          ],
          preview: {
            select: {
              title: 'lector.name',
              media: 'lector.image',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'whyCards',
      title: 'Proč tento jazyk - karty',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Karta',
          type: 'object',
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
          ],
          preview: {
            select: {
              title: 'titleCz',
            },
          },
        }),
      ],
    }),
  ],
})
