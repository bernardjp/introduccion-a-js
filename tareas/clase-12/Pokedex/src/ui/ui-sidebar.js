import { pageIndexCalculator, resourceIDCalculator } from '../utils/utils.js';

export function renderSidebar(resourceJSON) {
  cleanResultOptionsList();
  renderPagination([resourceJSON.previous, resourceJSON.next]);
  renderPageIndex([resourceJSON.previous, resourceJSON.next], resourceJSON.count);
  renderResultOptionsList(resourceJSON.results);

  return resourceJSON;
}

function cleanResultOptionsList() {
  const $resourcesListWrapper = document.getElementById('resources-list');

  while ($resourcesListWrapper.firstChild) {
    $resourcesListWrapper.removeChild($resourcesListWrapper.firstChild);
  }
}

function renderPagination(paginationURL) {
  document.querySelector('.line').classList.remove('hidden');

  paginationURL.forEach((url, index) => {
    let $pageNav;

    if (index) {
      $pageNav = document.getElementById('next-pagination-nav');
    } else {
      $pageNav = document.getElementById('prev-pagination-nav');
    }

    if (url) {
      $pageNav.classList.remove('hidden');
      $pageNav.dataset.url = url;
    } else {
      $pageNav.classList.add('hidden');
    }
  });
}

function renderPageIndex(paginationURLs, count) {
  const pageIndex = pageIndexCalculator(paginationURLs, count);
  const $pageTotalIndex = document.getElementById('total-index');
  const $pageCurrentIndex = document.getElementById('current-index-input');

  $pageCurrentIndex.value = `${pageIndex.current}`;
  $pageTotalIndex.innerHTML = ` of ${pageIndex.total}`;
  $pageCurrentIndex.setAttribute('max', `${pageIndex.total}`);
}

function renderResultOptionsList(resultsArrayFromAPI) {
  const $resourcesListWrapper = document.getElementById('resources-list');

  resultsArrayFromAPI.forEach((result) => {
    const $listedResource = document.createElement('li');
    const resourceName = result.name;
    const resourceID = resourceIDCalculator(result.url);
    $listedResource.id = resourceID;
    $listedResource.innerText = `${resourceID}. ${resourceName}`;
    $resourcesListWrapper.appendChild($listedResource);
  });
}
