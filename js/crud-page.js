import {
  $,
  read,
  write,
  id,
  escapeHTML,
  shell,
  status,
  modal,
  closeModal,
  toast,
  bindSearch,
  empty,
} from './core.js';
export function startCrudPage(config) {
  let data = read();
  const field = (label, key, value = '') =>
    `<div class="field"><label>${label}</label><input name="${key}" required value="${escapeHTML(value)}"></div>`;
  const form = (item) =>
    `<form id="crud-form" class="form-grid">${config.fields.map(([label, key]) => field(label, key, item?.[key] || '')).join('')}</form>`;
  function open(item) {
    modal(
      item ? `Edit ${config.singular}` : `Add ${config.singular}`,
      form(item),
      `<button class="btn" data-close-modal>Cancel</button><button class="btn btn-primary" id="save-item">Save</button>`
    );
    $('[data-close-modal]').onclick = closeModal;
    $('#save-item').onclick = () => save(item?.id);
  }
  function save(itemId) {
    const formNode = $('#crud-form');
    if (!formNode.reportValidity()) return;
    const value = Object.fromEntries(new FormData(formNode));
    value.status = 'Active';
    if (itemId)
      Object.assign(
        data[config.key].find((item) => item.id === itemId),
        value
      );
    else data[config.key].unshift({ id: id(config.prefix), ...value });
    write(data);
    closeModal();
    render();
    toast(`${config.singular} saved successfully.`);
  }
  function remove(itemId) {
    modal(
      `Delete ${config.singular}`,
      '<p>Are you sure you want to delete this item? This action cannot be undone.</p>',
      `<button class="btn" data-close-modal>Cancel</button><button class="btn btn-danger" id="delete-item">Delete</button>`
    );
    $('[data-close-modal]').onclick = closeModal;
    $('#delete-item').onclick = () => {
      data[config.key] = data[config.key].filter((item) => item.id !== itemId);
      write(data);
      closeModal();
      render();
      toast(`${config.singular} deleted.`);
    };
  }
  function rows(query = '') {
    const list = data[config.key].filter((item) =>
      Object.values(item).join(' ').toLowerCase().includes(query)
    );
    $('#crud-rows').innerHTML = list.length
      ? list
          .map(
            (item) =>
              `<tr>${config.columns.map((column) => `<td>${column.format ? column.format(item) : escapeHTML(item[column.key] || '—')}</td>`).join('')}<td>${item.status ? status(item.status) : ''}</td><td><button class="action" data-edit="${item.id}">✎</button><button class="action" data-delete="${item.id}">⌫</button></td></tr>`
          )
          .join('')
      : `<tr><td colspan="${config.columns.length + 2}">${empty(`No ${config.title.toLowerCase()} found.`)}</td></tr>`;
    document
      .querySelectorAll('[data-edit]')
      .forEach(
        (button) =>
          (button.onclick = () =>
            open(data[config.key].find((item) => item.id === button.dataset.edit)))
      );
    document
      .querySelectorAll('[data-delete]')
      .forEach((button) => (button.onclick = () => remove(button.dataset.delete)));
  }
  function render() {
    shell(
      config.page,
      config.title,
      config.description,
      `<div class="card toolbar"><div class="search-field"><input id="crud-search" placeholder="Search ${config.title.toLowerCase()}"></div></div><div class="card table-card"><table class="table"><thead><tr>${config.columns.map((column) => `<th>${column.title}</th>`).join('')}<th>Status</th><th>Actions</th></tr></thead><tbody id="crud-rows"></tbody></table></div>`,
      `<button class="btn btn-primary" id="add-item">＋ Add ${config.singular}</button>`
    );
    $('#add-item').onclick = () => open();
    bindSearch('#crud-search', rows);
    rows();
  }
  render();
}
