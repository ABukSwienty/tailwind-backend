import {Rule} from 'sanity'

export default {
  name: 'howWeWorkCard',
  type: 'document',
  title: 'How We Work - Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "The card's title.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      description: "The card's content. Keep it to a few sentences. Spaces are ignored.",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
