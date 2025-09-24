// Espera o DOM (Document Object Model) carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Array de objetos contendo dados das notícias
    const newsData = [
        { 
            title: "Título da Notícia 1", 
            description: "Descrição curta sobre a primeira notícia...", 
            link: "#" 
        },
        // ... mais notícias
    ];

    // Seleciona o container onde as notícias serão inseridas
    const newsContainer = document.querySelector('.news-container');

    // Para cada item no array newsData...
    newsData.forEach(newsItem => {
        // Cria um elemento article para cada notícia
        const article = document.createElement('article');
        article.classList.add('news-item'); // Adiciona classe CSS
        
        // Preenche o HTML interno do article com os dados
        article.innerHTML = `
            <h3>${newsItem.title}</h3> <!-- Interpolação de variável -->
            <p>${newsItem.description}</p>
            <a href="${newsItem.link}">Leia mais</a>
        `;
        
        // Adiciona o article criado ao container
        newsContainer.appendChild(article);
    });
});