import {Rule} from 'sanity'

export default {
  name: 'aboutUs',
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
      description: 'Brief tag lines that will be displayed on the about page.',
      of: [{type: 'string'}],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'teamMembers',
      type: 'array',
      title: 'Team Members',
      description: 'Team members that will be displayed on the about page.',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  initialValue: {
    title: 'About Us',
  },
}
