import {Rule} from 'sanity'

export default {
  name: 'howWeWorkSection',
  type: 'document',
  title: 'How We Work - Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "The section's title.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle',
      description: "The section's subtitle.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tagLine',
      type: 'string',
      title: 'Tag Line',
      description: 'A brief one-liner describing the section.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      description: 'Cards that will be displayed on the how we work section.',
      of: [{type: 'reference', to: [{type: 'howWeWorkCard'}]}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
