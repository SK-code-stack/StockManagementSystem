import { startListPage } from './list-page.js';
import { status } from './core.js';
startListPage({
  page: 'movements',
  key: 'movements',
  title: 'Stock Movements',
  description: 'A complete audit trail of every inventory change.',
  columns: [
    { title: 'Date & time', key: 'date' },
    { title: 'Product', key: 'product' },
    { title: 'SKU', key: 'sku' },
    { title: 'Type', format: (item) => status(item.type) },
    { title: 'Quantity', key: 'quantity', numeric: true },
    { title: 'Previous', key: 'previous', numeric: true },
    { title: 'New stock', key: 'current', numeric: true },
    { title: 'Reference', key: 'reference' },
    { title: 'Notes', key: 'notes' },
  ],
});
