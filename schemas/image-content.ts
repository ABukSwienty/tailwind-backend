import {Rule} from 'sanity'

export default {
  name: 'imageContent',
  type: 'document',
  title: 'Image',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The image title. Will not be displayed but useful for searching.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Please make sure the image is less the 1mb.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'A short description of the image: "A picture of a cat."',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  options: {
    hotspot: true,
  },
}
