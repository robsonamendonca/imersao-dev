let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");

const notificationContainer = document.getElementById('notification-container');
const showButton = document.getElementById('show-notification');
let timerId; // Variável para armazenar o ID do temporizador de fechamento


let dados = [];

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            showNotification("Houve um problema ao carregar os dados.");
            return; // Interrompe a execução se houver erro
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    renderizarCards(dadosFiltrados);
    if (dadosFiltrados.length === 0) {
        showNotification();
    }
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <div class="tag-list">
            ${dado.tags.map(tag => `<span class="tag tag-default">${tag}</span>`).join('')}
        </div>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}

campoBusca.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        iniciarBusca();
    }
}); 



// Função para mostrar a notificação
function showNotification(message = "Termo não encontrado: tente novamente!") {
    // 1. Limpa qualquer temporizador anterior para evitar conflitos
    clearTimeout(timerId);

    // 2. Define a mensagem (se desejar)
    const messageElement = document.querySelector('.notification-message');
    if (messageElement) {
        messageElement.textContent = message;
    }

    // 3. Exibe o balão (garante que ele remova a classe 'hide' e adicione 'show')
    notificationContainer.classList.remove('hide');
    notificationContainer.classList.add('show');

    // 4. Configura o fechamento automático após 4 segundos (4000ms)
    timerId = setTimeout(() => {
        hideNotification();
    }, 4000); 
}

// Função para esconder a notificação
function hideNotification() {
    // 1. Limpa o temporizador (caso o usuário clique no 'x' antes)
    clearTimeout(timerId); 

    // 2. Adiciona a classe 'hide' para iniciar a animação de saída
    notificationContainer.classList.remove('show');
    notificationContainer.classList.add('hide');

    // 3. Opcional: Remove as classes de animação após a conclusão da transição
    // para redefinir o estado. (500ms é a duração da transição CSS)
    setTimeout(() => {
        notificationContainer.classList.remove('hide');
        // Você pode resetar a opacidade para 0 aqui se quiser, mas o CSS já trata disso
    }, 500); 
}

// Adiciona o evento de clique ao botão de demonstração
if (showButton) {
    showButton.addEventListener('click', () => {
        showNotification("Novo item adicionado com sucesso!");
    });
}

  async function updateStars() {
    const response = await fetch("https://api.github.com/repos/robsonamendonca/imersao-dev");
    const data = await response.json();
    document.getElementById("stars-count").textContent = data.stargazers_count;
  }
  updateStars();