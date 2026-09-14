import { startCrudPage } from './crud-page.js';
startCrudPage({
  page: 'customers',
  key: 'customers',
  prefix: 'cus',
  singular: 'Customer',
  title: 'Customers',
  description: 'Manage customers and their purchase history.',
  fields: [
    ['Customer name', 'name'],
    ['Phone', 'phone'],
    ['Email', 'email'],
  ],
  columns: [
    { title: 'Customer', key: 'name' },
    { title: 'Phone', key: 'phone' },
    { title: 'Email', key: 'email' },
  ],
});
