document.addEventListener('DOMContentLoaded', () => {
    const newsData = [
        { title: "Título da Notícia 1", description: "Descrição curta sobre a primeira notícia...", link: "#" },
        { title: "Título da Notícia 2", description: "Descrição curta sobre a segunda notícia...", link: "#" },
        { title: "Título da Notícia 3", description: "Descrição curta sobre a terceira notícia...", link: "#" },
    ];

    const newsContainer = document.querySelector('.news-container');

    newsData.forEach(newsItem => {
        const article = document.createElement('article');
        article.classList.add('news-item');
        article.innerHTML = `
            <h3>${newsItem.title}</h3>
            <p>${newsItem.description}</p>
            <a href="${newsItem.link}">Leia mais</a>
        `;
        newsContainer.appendChild(article);
    });
});