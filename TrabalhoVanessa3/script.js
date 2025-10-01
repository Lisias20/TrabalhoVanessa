// ==== Notícias ==== 
document.addEventListener('DOMContentLoaded', () => {
    
    const newsData = [
        { 
            title: "Título da Notícia 1", 
            description: "Descrição curta sobre a primeira notícia...", 
            link: "#" 
        },
        { 
            title: "Energia Solar cresce 20% no Brasil", 
            description: "Levantamento aponta aumento de painéis solares em telhados residenciais.", 
            link: "#"
        },
        { 
            title: "Nordeste bate recorde em energia eólica", 
            description: "Estados nordestinos produzem mais energia eólica do que consomem.", 
            link: "#"
        },
    ];

    const newsContainer = document.querySelector('.news-container');

    // Só executa se existir a seção de notícias
    if (newsContainer) {
        newsData.forEach(newsItem => {
            const article = document.createElement('article');
            article.classList.add('news-item'); 
            
            article.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p>${newsItem.description}</p>
                <a href="${newsItem.link}" class="cta-button small-button">Leia mais</a>
            `;
            
            newsContainer.appendChild(article);
        });
    }
});


// ==== Tema (Light / Dark) ====
const themeToggleBtn = document.getElementById('theme-toggle');

// Função para aplicar um tema
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);

    localStorage.setItem('theme', theme);

    updateThemeIcon(theme);
}

// Atualiza o ícone do botão conforme o tema
function updateThemeIcon(theme) {
    if (theme === 'dark-theme') {
        themeToggleBtn.textContent = "☀️"; // no dark, botão mostra sol (para clarear)
    } else {
        themeToggleBtn.textContent = "🌙"; // no light, botão mostra lua (para escurecer)
    }
}

// Pega tema salvo ou aplica light por padrão
const savedTheme = localStorage.getItem('theme') || 'light-theme';
setTheme(savedTheme);

// Evento de clique para alternar
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme') 
        ? 'dark-theme' : 'light-theme';
    
    const newTheme = (currentTheme === 'dark-theme') ? 'light-theme' : 'dark-theme';
    setTheme(newTheme);
});