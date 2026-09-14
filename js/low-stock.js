import { read, shell, status } from './core.js';
const data = read(),
  products = data.products.filter((product) => product.stock <= product.min);
shell(
  'low-stock',
  'Low Stock Monitor',
  'Prioritize replenishment before shortages impact sales.',
  `<section class="kpis"><article class="card kpi"><div class="kpi-top">Low stock products</div><div class="value">${products.filter((product) => product.stock > 0).length}</div></article><article class="card kpi"><div class="kpi-top">Out of stock</div><div class="value">${products.filter((product) => !product.stock).length}</div></article></section><div class="card table-card"><table class="table"><thead><tr><th>Product</th><th>SKU</th><th>Supplier</th><th class="numeric">Current stock</th><th class="numeric">Minimum</th><th>Status</th><th>Action</th></tr></thead><tbody>${products.map((product) => `<tr><td><b>${product.name}</b></td><td>${product.sku}</td><td>${product.supplier}</td><td class="numeric">${product.stock}</td><td class="numeric">${product.min}</td><td>${status(product.stock ? 'Low Stock' : 'Out of Stock')}</td><td><a class="btn" href="stock-in.html">Restock</a></td></tr>`).join('') || '<tr><td colspan="7"><div class="empty">No low-stock products.</div></td></tr>'}</tbody></table></div>`
);
