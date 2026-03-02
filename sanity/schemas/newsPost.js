export default {
  name: 'newsPost',
  title: 'News Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Climate Action', 'Girls & Women', 'Livelihoods', 'Organization'] },
      validation: (Rule) => Rule.required(),
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (Rule) => Rule.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'imageAlt', title: 'Image Alt Text', type: 'string' },
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
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}
