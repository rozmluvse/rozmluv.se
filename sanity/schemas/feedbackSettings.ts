import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'feedbackSettings',
  title: 'Formulář zpětné vazby',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Zobrazit formulář',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'formUrl',
      title: 'URL Google formuláře',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https'],
          allowRelative: false,
        }).custom(value => {
          if (!value) {
            return true
          }

          try {
            const url = new URL(value)

            if (
              url.hostname !== 'docs.google.com' ||
              !url.pathname.startsWith('/forms/')
            ) {
              return 'Vložte URL Google Forms formuláře z domény docs.google.com/forms.'
            }
          } catch {
            return 'Vložte platnou URL adresu.'
          }

          return true
        }),
    }),
    defineField({
      name: 'iframeTitle',
      title: 'Popisek iframe',
      type: 'string',
      description:
        'Volitelné. Použije se pro přístupnost vloženého formuláře.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Formulář zpětné vazby',
      }
    },
  },
})
