export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', title: 'Site Title', type: 'string' },
    { name: 'organizationName', title: 'Organization Name', type: 'string' },
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'contactPhone', title: 'Contact Phone', type: 'string' },
    { name: 'officeAddress', title: 'Office Address', type: 'text', rows: 3 },
    { name: 'privacyEmail', title: 'Privacy Email', type: 'string' },
  ],
}
