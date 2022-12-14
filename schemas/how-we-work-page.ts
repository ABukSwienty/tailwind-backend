import {Rule} from 'sanity'

export default {
  name: 'howWeWorkPage',
  type: 'document',
  title: 'How We Work - Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "The page's title. Will not be displayed.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description:
        'Sections that will be displayed on the how we work page. Will appear in the order below. Drag and drop to reorder.',
      of: [{type: 'reference', to: [{type: 'howWeWorkSection'}]}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  initialValue: {
    title: 'How We Work',
  },
}
