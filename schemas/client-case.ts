import {Rule} from 'sanity'

export default {
  name: 'case',
  type: 'document',
  title: 'Case',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "The case's title.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'A brief sentence describing the case.',
      validation: (Rule: Rule) =>
        Rule.required().max(65).error("The case's title must be less than 65 characters."),
    },
    {
      name: 'caseImage',
      type: 'image',
      title: 'Case Image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
