import { renderSidebar } from '../ui/ui-sidebar.js';
import { renderResourceCard } from '../ui/ui-card.js';
import { loadResource } from './load-resources.js';
import { pageParametersCalculator } from '../utils/utils.js';

export function initializeSidebar() {
  const $sidebarSelect = document.getElementById('api-resources');
  const $sidebarPageNavigators = document.querySelectorAll('.sidebar-nav');
  const $sidebarListedResources = document.getElementById('resources-list');
  const $sidebarPageInput = document.getElementById('page-index');

  $sidebarSelect.addEventListener('change', selectResourceTypeFromSidebar);
  $sidebarPageNavigators.forEach((navigator) => {
    navigator.addEventListener('click', selectPageFromSidebarNavigator);
  });
  $sidebarListedResources.addEventListener('click', selectResourceFromSidebar);
  $sidebarPageInput.addEventListener('submit', selectPageFromSidebarInput);
}

async function selectResourceTypeFromSidebar(e) {
  e.preventDefault();

  const resourceType = e.target.value;
  const pageParameters = { offset: 0, limit: 20 };
  const resourceSelectedURL = `https://pokeapi.co/api/v2/${resourceType}?offset=${pageParameters.offset}&limit=${pageParameters.limit}/`;

  const resource = await loadResource(`${resourceType}-${pageParameters.offset}-${pageParameters.limit}`, resourceSelectedURL);
  renderSidebar(resource);
}

async function selectPageFromSidebarNavigator(e) {
  e.preventDefault();

  const navigatorSelectedURL = e.target.dataset.url;
  const resourceType = navigatorSelectedURL.match(/pokemon|item|berry|move/g).pop();
  const pageParameters = pageParametersCalculator(navigatorSelectedURL);

  const resource = await loadResource(`${resourceType}-${pageParameters.offset}-${pageParameters.limit}`, navigatorSelectedURL);
  renderSidebar(resource);
}

async function selectPageFromSidebarInput(e) {
  e.preventDefault();

  const pageNumberSelected = e.target[0].value;
  const resourceType = document.getElementById('api-resources').value;
  const pageParameters = {
    limit: 20,
    offset() {
      return this.limit * (pageNumberSelected - 1);
    },
  };
  const resourceSelectedURL = `https://pokeapi.co/api/v2/${resourceType}?offset=${pageParameters.offset()}&limit=${pageParameters.limit}/`;

  const resource = await loadResource(`${resourceType}-${pageParameters.offset()}-${pageParameters.limit}`, resourceSelectedURL);
  renderSidebar(resource);
}

async function selectResourceFromSidebar(e) {
  e.preventDefault();

  const resourceID = e.target.id;
  const resourceType = document.getElementById('api-resources').value;
  const resourceURL = `https://pokeapi.co/api/v2/${resourceType}/${resourceID}/`;

  const resource = await loadResource(`${resourceType}-${resourceID}`, resourceURL);
  renderResourceCard(resource, resourceType);
}
