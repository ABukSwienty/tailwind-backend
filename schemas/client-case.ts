import {Rule} from 'sanity'

export default {
  name: 'clientCase',
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
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle',
      description: 'A brief sentence describing the case.',
      validation: (Rule: Rule) =>
        Rule.required().max(65).error("The case's title must be less than 65 characters."),
    },
    {
      name: 'caseImage',
      type: 'reference',
      title: 'Case Image',
      to: [{type: 'imageContent'}],
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
