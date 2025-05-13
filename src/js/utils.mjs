export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = 'afterbegin',
  clear = false
) {
  if (!templateFn || typeof templateFn !== 'function') {
    console.error('templateFn must be a valid function.');
    return;
  }

  if (!parentElement) {
    console.error('parentElement is not defined.');
    return;
  }

  if (!Array.isArray(list)) {
    console.error('list must be an array.');
    return;
  }

  if (clear) {
    parentElement.innerHTML = '';
  }

  const html = list.map(templateFn).join('');
  parentElement.insertAdjacentHTML(position, html);
}
