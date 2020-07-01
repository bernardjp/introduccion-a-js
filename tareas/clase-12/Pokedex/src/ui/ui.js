
import { pageIndexCalculator, resourceIDCalculator } from "../utils/utils.js";

export function renderSidebar (resourceJSON) {
    console.log(resourceJSON);

    cleanResultOptions();
    renderPagination([resourceJSON.previous, resourceJSON.next]);
    renderPageIndex(resourceJSON.next, resourceJSON.count);
    renderResultOptions(resourceJSON.results);

    return resourceJSON;
}

function cleanResultOptions() {
    const $resourcesListWrapper = document.getElementById('resources-list');

    while($resourcesListWrapper.firstChild) {
        $resourcesListWrapper.removeChild($resourcesListWrapper.firstChild);
    }
}

function renderPagination(paginationURL){  
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

function renderPageIndex(url, count) {
    const pageIndex = pageIndexCalculator(url, count);
    const $pageTotalIndex = document.getElementById('total-index');
    const $pageCurrentIndex = document.getElementById('current-index-input');

    $pageTotalIndex.innerHTML = ` of ${pageIndex.total}`;
    $pageCurrentIndex.value = `${pageIndex.current}`;
    $pageCurrentIndex.setAttribute('max', `${pageIndex.total}`);
}

function renderResultOptions(resultsArray) {
    const $resourcesListWrapper = document.getElementById('resources-list');

    resultsArray.forEach(result => {
        const $listedResource = document.createElement('li');
        const resourceName = result.name;
        const resourceID = resourceIDCalculator(result.url);
        $listedResource.id= resourceID;
        $listedResource.innerText = `${resourceID}- ${resourceName}`;
        $resourcesListWrapper.appendChild($listedResource);
    })
}
