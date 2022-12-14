export default {
  name: 'howWeWorkSection',
  type: 'document',
  title: 'How We Work - Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'tagLine',
      type: 'string',
      title: 'Tag Line',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [{type: 'howWeWorkCard'}],
    },
  ],
}
