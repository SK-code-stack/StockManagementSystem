import { startListPage } from './list-page.js';
import { money, status } from './core.js';
startListPage({
  page: 'inventory',
  key: 'products',
  title: 'Inventory',
  description: 'Monitor available stock and its current value.',
  columns: [
    { title: 'Product', key: 'name' },
    { title: 'SKU', key: 'sku' },
    { title: 'Category', key: 'category' },
    { title: 'Current stock', key: 'stock', numeric: true },
    { title: 'Minimum', key: 'min', numeric: true },
    {
      title: 'Stock value',
      numeric: true,
      format: (product) => money(product.stock * product.cost),
    },
    {
      title: 'Status',
      format: (product) =>
        status(
          product.stock === 0
            ? 'Out of Stock'
            : product.stock <= product.min
              ? 'Low Stock'
              : 'In Stock'
        ),
    },
  ],
});
