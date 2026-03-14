import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      title: 'Zdrojová cesta',
      type: 'string',
      description: 'Cesta na webu, např. /rozvrh',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Cílová URL',
      type: 'url',
      description: 'Kam přesměrovat, např. https://docs.google.com/...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'permanent',
      title: 'Permanentní (301)',
      type: 'boolean',
      description: 'Zaškrtni pro trvalé přesměrování (301). Výchozí je dočasné (302).',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'source',
      subtitle: 'destination',
    },
  },
})
