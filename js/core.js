export const $ = (selector, root = document) => root.querySelector(selector);
export const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value || 0));
export const id = prefix => `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
export const today = () => new Date().toISOString().slice(0, 10);
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

const seed = {
  settings: { company: 'StockFlow Industries', tax: 8.25, dark: false, minimumStock: 10, allowNegative: false },
  categories: [
    { id: 'cat-1', name: 'Electronics', description: 'Devices and digital equipment', status: 'Active' },
    { id: 'cat-2', name: 'Accessories', description: 'Computer accessories', status: 'Active' },
    { id: 'cat-3', name: 'Office Equipment', description: 'Workspace supplies', status: 'Active' }
  ],
  suppliers: [
    { id: 'sup-1', name: 'Tech Supplies Ltd', contact: 'Maya Chen', phone: '+1 512 555 0142', email: 'orders@techsupplies.com', status: 'Active' },
    { id: 'sup-2', name: 'Global Electronics', contact: 'Derek Hall', phone: '+1 415 555 0199', email: 'sales@globalelectronics.com', status: 'Active' }
  ],
  customers: [
    { id: 'cus-1', name: 'Apex Robotics Ltd', phone: '+1 512 555 0190', email: 'finance@apexrobotics.com', status: 'Active' },
    { id: 'cus-2', name: 'Orion Workspace', phone: '+1 312 555 0181', email: 'office@orionworkspace.com', status: 'Active' }
  ],
  products: [
    { id: 'prd-1', name: 'Wireless Mouse', sku: 'WM-1001', category: 'Electronics', supplier: 'Tech Supplies Ltd', cost: 18, price: 34, stock: 146, min: 20, unit: 'pcs', description: 'Ergonomic wireless mouse' },
    { id: 'prd-2', name: 'Mechanical Keyboard', sku: 'KB-2040', category: 'Electronics', supplier: 'Global Electronics', cost: 52, price: 95, stock: 38, min: 12, unit: 'pcs', description: 'Compact mechanical keyboard' },
    { id: 'prd-3', name: 'USB-C Cable (2m)', sku: 'UC-3008', category: 'Accessories', supplier: 'Tech Supplies Ltd', cost: 4, price: 12, stock: 9, min: 20, unit: 'pcs', description: 'Braided USB-C cable' },
    { id: 'prd-4', name: 'Laptop Stand', sku: 'LS-1200', category: 'Office Equipment', supplier: 'Tech Supplies Ltd', cost: 22, price: 48, stock: 0, min: 10, unit: 'pcs', description: 'Adjustable aluminium laptop stand' },
    { id: 'prd-5', name: 'Bluetooth Headphones', sku: 'BH-4500', category: 'Electronics', supplier: 'Global Electronics', cost: 36, price: 79, stock: 65, min: 15, unit: 'pcs', description: 'Noise-isolating headphones' }
  ],
  purchases: [{ id: 'PO-1048', supplier: 'Tech Supplies Ltd', date: today(), items: 8, total: 4280, status: 'Completed' }],
  sales: [{ id: 'INV-2091', customer: 'Apex Robotics Ltd', date: today(), items: 4, total: 1218, payment: 'Paid', status: 'Completed' }],
  movements: [{ id: 'mov-1', date: new Date().toLocaleString(), product: 'Wireless Mouse', sku: 'WM-1001', type: 'Sale', quantity: -4, previous: 150, current: 146, reference: 'INV-2091', notes: 'Customer sale' }]
};

export function read() { try { return JSON.parse(localStorage.getItem('stockflowData')) || structuredClone(seed); } catch { return structuredClone(seed); } }
export function write(data) { localStorage.setItem('stockflowData', JSON.stringify(data)); }
export function status(text) { const kind = /out|cancel|overdue/i.test(text) ? 'danger' : /low|pending|draft|partial/i.test(text) ? 'warning' : /sale|purchase|adjust/i.test(text) ? 'info' : 'success'; return `<span class="badge ${kind}">${escapeHTML(text)}</span>`; }
export function toast(text, kind = 'success') { const root = $('#toast-root'); const item = document.createElement('div'); item.className = `toast ${kind}`; item.textContent = text; root.append(item); setTimeout(() => item.remove(), 3200); }
export function modal(title, content, actions = '') { $('#modal-root').innerHTML = `<div class="modal-backdrop"><section class="modal"><header class="modal-header"><b>${title}</b><button class="close" data-close-modal>×</button></header><div class="modal-body">${content}</div><footer class="modal-footer">${actions}</footer></section></div>`; $('[data-close-modal]').onclick = closeModal; $('.modal-backdrop').onclick = event => { if (event.target === event.currentTarget) closeModal(); }; }
export function closeModal() { $('#modal-root').innerHTML = ''; }
const pages = [['dashboard', 'Dashboard', 'index.html'], ['products', 'Products', 'products.html'], ['categories', 'Categories', 'categories.html'], ['inventory', 'Inventory', 'inventory.html'], ['low-stock', 'Low Stock', 'low-stock.html'], ['stock-in', 'Stock In', 'stock-in.html'], ['stock-out', 'Stock Out', 'stock-out.html'], ['adjustments', 'Adjustments', 'adjustments.html'], ['movements', 'Stock Movements', 'movements.html'], ['purchases', 'Purchases', 'purchases.html'], ['sales', 'Sales', 'sales.html'], ['suppliers', 'Suppliers', 'suppliers.html'], ['customers', 'Customers', 'customers.html'], ['reports', 'Reports', 'reports.html'], ['settings', 'Settings', 'settings.html']];
export function shell(page, title, description, content, action = '') { const data = read(); document.body.classList.toggle('dark', data.settings.dark); $('#app').innerHTML = `<div class="app"><aside class="sidebar"><a class="brand" href="index.html"><b class="brand-mark">▣</b><span>StockFlow</span></a><nav class="nav">${pages.map(([key, label, file]) => `<a href="${file}" class="${page === key ? 'active' : ''}"><span class="nav-icon">${label === 'Dashboard' ? '▦' : label === 'Products' ? '▣' : label === 'Inventory' ? '⌂' : label === 'Low Stock' ? '⚠' : '◇'}</span><span>${label}</span></a>`).join('')}</nav></aside><main class="main"><header class="topbar"><a class="mobile-menu btn" href="index.html">☰</a><div class="global-search"><input id="global-search" placeholder="Search products, suppliers, customers..."></div><div class="top-actions"><button class="btn" id="theme-button">◐</button><div class="avatar">EV</div><div><b>Elena Vance</b><div class="small">Operations Lead</div></div></div></header><section class="content"><div class="page-head"><div><div class="breadcrumb">StockFlow / ${title}</div><h1>${title}</h1><p class="subtext">${description}</p></div>${action}</div>${content}</section></main></div>`; $('#theme-button').onclick = () => { const state = read(); state.settings.dark = !state.settings.dark; write(state); document.body.classList.toggle('dark', state.settings.dark); }; }
export function bindSearch(selector, callback) { $(selector).addEventListener('input', event => callback(event.target.value.toLowerCase())); }
export function empty(message, button = '') { return `<div class="empty"><div>⌕</div>${message}${button ? `<br><br>${button}` : ''}</div>`; }
