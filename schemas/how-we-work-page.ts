export default {
  name: 'howWeWorkPage',
  type: 'document',
  title: 'How We Work - Page',
  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [{type: 'howWeWorkSection'}],
    },
  ],
}
