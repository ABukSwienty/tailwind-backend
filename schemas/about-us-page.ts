import {Rule} from 'sanity'

export default {
  name: 'aboutUsPage',
  type: 'document',
  title: 'About Us - Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The page title. Will not be displayed.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tagLines',
      type: 'array',
      title: 'Tag Lines',
      description:
        'Brief tag lines that will be displayed on the about page. Will appear in the order below. Drag and drop to reorder.',
      of: [{type: 'string'}],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'teamMembers',
      type: 'array',
      title: 'Team Members',
      description:
        'Team members that will be displayed on the about page. Will appear in the order below. Drag and drop to reorder.',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  initialValue: {
    title: 'About Us',
  },
}
