import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'forLectorsPage',
  title: 'Kariéra',
  type: 'document',
  fields: [
    defineField({
      name: 'titleCz',
      title: 'Hero nadpis 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Hero nadpis 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'titleDe',
      title: 'Hero nadpis 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'titleUa',
      title: 'Hero nadpis 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'subtitleCz',
      title: 'Hero podtitulek 🇨🇿',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subtitleEn',
      title: 'Hero podtitulek 🇬🇧',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subtitleDe',
      title: 'Hero podtitulek 🇩🇪',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'subtitleUa',
      title: 'Hero podtitulek 🇺🇦',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whyDescriptionCz',
      title: 'Proč u nás - popis 🇨🇿',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whyDescriptionEn',
      title: 'Proč u nás - popis 🇬🇧',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whyDescriptionDe',
      title: 'Proč u nás - popis 🇩🇪',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whyDescriptionUa',
      title: 'Proč u nás - popis 🇺🇦',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whyCards',
      title: 'Proč u nás - karty',
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
    defineField({
      name: 'extraSectionTitleCz',
      title: 'Spodní sekce - nadpis 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'extraSectionTitleEn',
      title: 'Spodní sekce - nadpis 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'extraSectionTitleDe',
      title: 'Spodní sekce - nadpis 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'extraSectionTitleUa',
      title: 'Spodní sekce - nadpis 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'extraSectionDescriptionCz',
      title: 'Spodní sekce - popis 🇨🇿',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'extraSectionDescriptionEn',
      title: 'Spodní sekce - popis 🇬🇧',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'extraSectionDescriptionDe',
      title: 'Spodní sekce - popis 🇩🇪',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'extraSectionDescriptionUa',
      title: 'Spodní sekce - popis 🇺🇦',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'extraCards',
      title: 'Spodní sekce - karty',
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
  preview: {
    select: {
      title: 'titleCz',
    },
  },
})
