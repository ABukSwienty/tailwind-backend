import {Rule} from 'sanity'

export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'reference',
      title: 'Image',
      description:
        "The team member's image. Please make sure the image is formatted as a square and is less the 1mb.",
      to: [{type: 'imageContent'}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
