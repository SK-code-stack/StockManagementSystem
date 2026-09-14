import { startCrudPage } from './crud-page.js';
startCrudPage({ page: 'categories', key: 'categories', prefix: 'cat', singular: 'Category', title: 'Categories', description: 'Organize products into meaningful groups.', fields: [['Category name', 'name'], ['Description', 'description']], columns: [{ title: 'Category name', key: 'name' }, { title: 'Description', key: 'description' }] });
