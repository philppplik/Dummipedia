// articles.js

// Beispielartikel
const articles = [
  {
    title: 'Artikel 1',
    content: 'Inhalt von Artikel 1'
  },
  {
    title: 'Artikel 2', 
    content: 'Inhalt von Artikel 2'
  }  
];

// Artikel in DOM rendern
function renderArticles() {
  const main = document.querySelector('main');
  articles.forEach(article => {
    const html = `
      <article class="article">
        <h2>${article.title}</h2>
        <p>${article.content}</p>  
      </article>
    `;
    main.insertAdjacentHTML('beforeend', html);
  });
}

renderArticles();
