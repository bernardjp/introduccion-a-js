import { renderArticle } from '../ui/ui-article.js';

export function initializeArticle() {
  const articleContent = {
    title: 'Welcome to the PokéDex',
    excerpt: `"To make a complete guide on all the Pokémon in the world… 
    That was my dream! But, I'm too old! I can't do it! So, I want you to 
    fulfill my dream for me! Get moving! This is a great undertaking in 
    Pokémon history!"  <strong>-- Professor Oak</strong>`,
  };

  renderArticle(articleContent);
}

export function setAboutArticle() {
  const articleContent = {
    title: 'About me.',
    excerpt: `"To make a complete guide on all the Pokémon in the world… 
    That was my dream! But, I'm too old! I can't do it! So, I want you to 
    fulfill my dream for me! Get moving! This is a great undertaking in 
    Pokémon history!"  <strong>-- JP Bernard</strong>`,
  };

  renderArticle(articleContent);
}

export function setContactArticle() {
  const articleContent = {
    title: 'Contact me.',
    excerpt: `"To make a complete guide on all the Pokémon in the world… 
    That was my dream!"  <strong>-- JP Bernard</strong>`,
  };

  renderArticle(articleContent);
}
