import { startListPage } from './list-page.js';
import { money, status } from './core.js';
startListPage({
  page: 'sales',
  key: 'sales',
  title: 'Sales',
  description: 'Track invoices, payments, and fulfilled orders.',
  action: '<a class="btn btn-primary" href="create-sale.html">＋ Create Sale</a>',
  columns: [
    { title: 'Invoice ID', key: 'id' },
    { title: 'Customer', key: 'customer' },
    { title: 'Date', key: 'date' },
    { title: 'Items', key: 'items', numeric: true },
    { title: 'Total', numeric: true, format: (item) => money(item.total) },
    { title: 'Payment', format: (item) => status(item.payment) },
    { title: 'Status', format: (item) => status(item.status) },
  ],
});
