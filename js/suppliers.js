import { startCrudPage } from './crud-page.js';
startCrudPage({
  page: 'suppliers',
  key: 'suppliers',
  prefix: 'sup',
  singular: 'Supplier',
  title: 'Suppliers',
  description: 'Maintain your supplier contacts and purchasing relationships.',
  fields: [
    ['Supplier name', 'name'],
    ['Contact person', 'contact'],
    ['Phone', 'phone'],
    ['Email', 'email'],
  ],
  columns: [
    { title: 'Supplier', key: 'name' },
    { title: 'Contact person', key: 'contact' },
    { title: 'Phone', key: 'phone' },
    { title: 'Email', key: 'email' },
  ],
});
