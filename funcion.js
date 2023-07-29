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

// Artikel rendern
function renderArticles() {
  let html = '';
  for(let article of articles) {
    html += `
      <h2>${article.title}</h2>  
      <p>${article.content}</p>
    `;
  }

  document.getElementById('articles').innerHTML = html;
}

renderArticles();
