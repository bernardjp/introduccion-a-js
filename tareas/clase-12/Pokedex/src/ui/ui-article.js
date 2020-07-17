export function renderArticle(articleContent) {
  const $articleTitle = document.getElementById('article-title');
  const $articleExcerpt = document.getElementById('article-excerpt');

  $articleTitle.innerText = articleContent.title;
  $articleExcerpt.innerHTML = articleContent.excerpt;
}
