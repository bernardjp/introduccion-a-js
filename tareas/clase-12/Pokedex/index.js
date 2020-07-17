import { initializeSidebar } from './src/app/sidebar.js';
import { initializeNavbar } from './src/app/navbar.js';
import { initializeArticle } from './src/app/article.js';

function initialize() {
  initializeSidebar();
  initializeNavbar();
  initializeArticle();
}

initialize();
