import {
  $,
  read,
  write,
  id,
  today,
  money,
  escapeHTML,
  shell,
  status,
  modal,
  closeModal,
  toast,
  bindSearch,
  empty,
} from './core.js';
let data = read();
function productForm(product = {}) {
  return `<form id="product-form" class="form-grid"><div class="field"><label>Product name</label><input name="name" required value="${escapeHTML(product.name || '')}"></div><div class="field"><label>SKU</label><input name="sku" required value="${escapeHTML(product.sku || '')}"></div><div class="field"><label>Category</label><select name="category">${data.categories.map((item) => `<option ${item.name === product.category ? 'selected' : ''}>${item.name}</option>`).join('')}</select></div><div class="field"><label>Supplier</label><select name="supplier">${data.suppliers.map((item) => `<option ${item.name === product.supplier ? 'selected' : ''}>${item.name}</option>`).join('')}</select></div><div class="field"><label>Purchase price</label><input name="cost" type="number" min="0" required value="${product.cost ?? ''}"></div><div class="field"><label>Selling price</label><input name="price" type="number" min="0" required value="${product.price ?? ''}"></div><div class="field"><label>Current stock</label><input name="stock" type="number" min="0" required value="${product.stock ?? 0}"></div><div class="field"><label>Minimum stock</label><input name="min" type="number" min="0" required value="${product.min ?? data.settings.minimumStock}"></div><div class="field full"><label>Description</label><textarea name="description">${escapeHTML(product.description || '')}</textarea></div></form>`;
}
function openProduct(product) {
  modal(
    product ? 'Edit product' : 'Add product',
    productForm(product),
    `<button class="btn" data-close-modal>Cancel</button><button class="btn btn-primary" id="save-product">Save product</button>`
  );
  $('[data-close-modal]').onclick = closeModal;
  $('#save-product').onclick = () => saveProduct(product?.id);
}
function saveProduct(productId) {
  const form = $('#product-form');
  if (!form.reportValidity()) return;
  const value = Object.fromEntries(new FormData(form));
  ['cost', 'price', 'stock', 'min'].forEach((key) => (value[key] = Number(value[key])));
  if (data.products.some((product) => product.sku === value.sku && product.id !== productId))
    return toast('SKU must be unique.', 'danger');
  if (productId)
    Object.assign(
      data.products.find((product) => product.id === productId),
      value
    );
  else data.products.unshift({ ...value, id: id('prd'), unit: 'pcs', created: today() });
  write(data);
  closeModal();
  render();
  toast('Product saved successfully.');
}
function removeProduct(productId) {
  modal(
    'Delete product',
    '<p>Are you sure you want to delete this product? This action cannot be undone.</p>',
    `<button class="btn" data-close-modal>Cancel</button><button class="btn btn-danger" id="confirm-delete">Delete</button>`
  );
  $('[data-close-modal]').onclick = closeModal;
  $('#confirm-delete').onclick = () => {
    data.products = data.products.filter((product) => product.id !== productId);
    write(data);
    closeModal();
    render();
    toast('Product deleted.');
  };
}
function renderRows(query = '') {
  const rows = data.products.filter((product) =>
    Object.values(product).join(' ').toLowerCase().includes(query)
  );
  $('#product-rows').innerHTML = rows.length
    ? rows
        .map(
          (product) =>
            `<tr><td><div class="product-cell"><div class="product-image">▣</div><div><b>${escapeHTML(product.name)}</b><div class="small">${escapeHTML(product.description)}</div></div></div></td><td><b>${product.sku}</b></td><td>${product.category}</td><td>${product.supplier}</td><td class="numeric">${money(product.cost)}</td><td class="numeric">${money(product.price)}</td><td class="numeric">${product.stock}</td><td>${status(product.stock === 0 ? 'Out of Stock' : product.stock <= product.min ? 'Low Stock' : 'In Stock')}</td><td><button class="action" data-edit="${product.id}">✎</button><button class="action" data-delete="${product.id}">⌫</button></td></tr>`
        )
        .join('')
    : `<tr><td colspan="9">${empty('No products found.')}</td></tr>`;
  document
    .querySelectorAll('[data-edit]')
    .forEach(
      (button) =>
        (button.onclick = () =>
          openProduct(data.products.find((product) => product.id === button.dataset.edit)))
    );
  document
    .querySelectorAll('[data-delete]')
    .forEach((button) => (button.onclick = () => removeProduct(button.dataset.delete)));
}
function render() {
  shell(
    'products',
    'Products',
    'Manage your catalog, pricing, and stock.',
    `<div class="card toolbar"><div class="search-field"><input id="product-search" placeholder="Search products, SKU, or supplier"></div><button class="btn" id="export-products">⇩ Export CSV</button></div><div class="card table-card"><table class="table"><thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Supplier</th><th class="numeric">Cost</th><th class="numeric">Retail</th><th class="numeric">Stock</th><th>Status</th><th>Actions</th></tr></thead><tbody id="product-rows"></tbody></table></div>`,
    '<button class="btn btn-primary" id="add-product">＋ Add Product</button>'
  );
  $('#add-product').onclick = () => openProduct();
  bindSearch('#product-search', renderRows);
  $('#export-products').onclick = () => toast('Product CSV export is ready.');
  renderRows();
}
render();
