export default {
  name: 'impactStory',
  title: 'Impact Story',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: 'person', title: 'Person / Group', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'location', title: 'Location', type: 'string', initialValue: 'West Pokot County' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Climate Action', 'Girls & Women', 'Livelihoods', 'Community'],
      },
      validation: (Rule) => Rule.required(),
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (Rule) => Rule.required() },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'imageAlt', title: 'Image Alt Text', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'summary', title: 'Summary', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
    { name: 'outcome', title: 'Observed Outcome', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
    {
      name: 'status',
      title: 'Publishing Status',
      type: 'string',
      initialValue: 'draft',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'image',
    },
  },
}
