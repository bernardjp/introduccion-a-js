
import { renderSidebar } from "../ui/ui.js";
import { renderResourceCard } from "../ui/ui-card.js";

const $sidebarSelect = document.getElementById('api-resources');
const $sidebarPageNavigators = document.querySelectorAll('.sidebar-nav');
const $sidebarListedResources = document.getElementById('resources-list');
const $sidebarPageInput = document.getElementById('page-index');

$sidebarSelect.addEventListener('change', selectResourceTypeFromSidebar);
$sidebarPageNavigators.forEach(navigator => {
    navigator.addEventListener('click', selectPageNavigatorFromSidebar);
});
$sidebarListedResources.addEventListener('click', selectResourceFromSidebar);
$sidebarPageInput.addEventListener('submit', selectPageFromSidebarInput);


function selectResourceTypeFromSidebar(e) {
    e.preventDefault();

    const resourceTypeSelected = e.target.value;
    const resourceTypeSelectedURL = `https://pokeapi.co/api/v2/${resourceTypeSelected}`;
    fetchAndRenderPaginatedList(resourceTypeSelectedURL);
}

function selectPageNavigatorFromSidebar(e) {
    e.preventDefault();

    const navigatorSelectedURL = e.target.dataset.url;
    fetchAndRenderPaginatedList(navigatorSelectedURL);
}

function selectResourceFromSidebar(e) {
    e.preventDefault();

    const resourceSelectedID = e.target.id;
    const resourceTypeSelected = $sidebarSelect.value;
    const resourceSelectedURL = `https://pokeapi.co/api/v2/${resourceTypeSelected}/${resourceSelectedID}/`;
   
    fetch(resourceSelectedURL)
        .then(response => response.json())
        .then(response => renderResourceCard(response, resourceTypeSelected))
        .catch(error => console.error(error))
}

function selectPageFromSidebarInput(e) {
    e.preventDefault();
    
    const pageNumberSelected = e.target[0].value;
    const resourceTypeSelected = $sidebarSelect.value;
    const resourcesPerPageLimit = 20;
    const resourcesOffsetInPageSelected = resourcesPerPageLimit * (pageNumberSelected - 1);
    const resourceSelectedURL = `https://pokeapi.co/api/v2/${resourceTypeSelected}?offset=${resourcesOffsetInPageSelected}&limit=${resourcesPerPageLimit}/`;

    fetchAndRenderPaginatedList(resourceSelectedURL);
}

function fetchAndRenderPaginatedList(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => renderSidebar(response))
        .catch(error => console.error(error))
}




/*    
fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(response => speciesText(response.species.url))
    .catch(error => console.error(error))

function speciesText(url) {
    fetch(url).then(response => response.json())
        .then(response => console.log(response.flavor_text_entries[2].flavor_text))
        .catch(error => console.error(error))
}
*/
