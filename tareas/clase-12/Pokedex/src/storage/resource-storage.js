export function loadResourceFromStorage(key) {
  const resourceFromStorage = localStorage.getItem(key);
  if (!resourceFromStorage) {
    throw new Error('resource not found in localStorage.');
  }

  return resourceFromStorage;
}

export async function loadResourceFromAPI(url) {
  const resourceFromAPI = await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return resourceFromAPI;
}

export function saveResourceInStorage(key, json) {
  localStorage.setItem(key, json);
}
