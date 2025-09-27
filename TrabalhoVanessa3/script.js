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

// Botão de alternância de tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Checa se já existe tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    document.body.classList.add('light-theme'); // padrão
}

// Atualiza o ícone conforme o tema
function updateThemeIcon() {
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = "🌙"; 
    } else {
        themeToggleBtn.textContent = "🌞"; 
    }
}

updateThemeIcon();

// Alternar tema ao clicar
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Salva no localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }

    updateThemeIcon();
});
