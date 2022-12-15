import {Rule} from 'sanity'

export default {
  name: 'casesPage',
  type: 'document',
  title: 'Cases - Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "The page's title. Will not be displayed.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'cases',
      title: 'Cases',
      type: 'array',
      description:
        'Cases that will be displayed on the cases page. Will appear in the order below. Drag and drop to reorder.',
      of: [{type: 'reference', to: [{type: 'clientCase'}]}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  initialValue: {
    title: 'Cases',
  },
}
