import { setAboutArticle, setContactArticle, initializeArticle } from './article.js';

export function initializeNavbar() {
  const $homeBtn = document.getElementById('home-btn');
  const $aboutBtn = document.getElementById('about-btn');
  const $contactBtn = document.getElementById('contact-btn');

  $homeBtn.addEventListener('click', initializeArticle);
  $aboutBtn.addEventListener('click', setAboutArticle);
  $contactBtn.addEventListener('click', setContactArticle);
}
