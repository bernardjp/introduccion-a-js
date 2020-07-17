export function renderResourceCard(resourceURL, resourceType) {
  if (resourceType === 'pokemon') { renderPokemonCard(resourceURL); }

  if (resourceType === 'berry') { renderBerryCard(resourceURL); }

  if (resourceType === 'item') { renderItemCard(resourceURL); }

  if (resourceType === 'move') { renderMoveCard(resourceURL); }
}

function renderPokemonCard(resourceURL) {
  renderCardImage(resourceURL.sprites.front_default);

  const $cardPropertiesList = document.getElementById('card-properties');
  $cardPropertiesList.innerHTML = `
        <li>Name: <strong>${resourceURL.name.toUpperCase()}</strong></li>
        <li>Poké-ID: <strong>${resourceURL.id}</strong></li>
        <li>Type: <strong>${resourceURL.types[0].type.name.toUpperCase()}</strong></li>
        <li>First Appereance: <strong>POKÉMON ${resourceURL.game_indices[0].version.name.toUpperCase()}</strong></li>
        <li>Height: <strong>${resourceURL.height}'</strong></li>
        <li>Weight: <strong>${resourceURL.weight}lb</strong></li>
        <hr>
        <p>Combat Stats</p>
        <li>Hit Points: <strong>${resourceURL.stats[0].base_stat}</strong></li>
        <li>Attack: <strong>${resourceURL.stats[1].base_stat}</strong></li>
        <li>Defense: <strong>${resourceURL.stats[2].base_stat}</strong></li>
        <li>Special Attack: <strong>${resourceURL.stats[3].base_stat}</strong></li>
        <li>Special Defense: <strong>${resourceURL.stats[4].base_stat}</strong></li>
        <li>Speed: <strong>${resourceURL.stats[5].base_stat}</strong></li>
        <hr>
        <p>Abilities</p>
        <li>Ability A: <strong>${resourceURL.abilities[0].ability.name.toUpperCase()}</strong></li>
        <li>Ability B: <strong>${resourceURL.abilities[1].ability.name.toUpperCase()}</strong></li>
    `;
}

function renderBerryCard(resourceURL) {
  const $cardPropertiesList = document.getElementById('card-properties');
  renderCardImage('./img/psyduck.png');
  $cardPropertiesList.innerHTML = '<p>CONTENT CURRENTLY UNAVAILABLE</p>';
  console.log(resourceURL.name);
}

function renderItemCard(resourceURL) {
  const $cardPropertiesList = document.getElementById('card-properties');
  renderCardImage('./img/psyduck.png');
  $cardPropertiesList.innerHTML = '<p>CONTENT CURRENTLY UNAVAILABLE</p>';
  console.log(resourceURL.name);
}

function renderMoveCard(resourceURL) {
  const $cardPropertiesList = document.getElementById('card-properties');
  renderCardImage('./img/psyduck.png');
  $cardPropertiesList.innerHTML = '<p>CONTENT CURRENTLY UNAVAILABLE</p>';
  console.log(resourceURL.name);
}

function renderCardImage(imgURL) {
  const $cardImage = document.querySelector('.img');
  $cardImage.src = `${imgURL}`;
  $cardImage.classList.remove('hidden');
}
