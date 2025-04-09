// Funções para manipulação dos modais
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeButtons = document.querySelectorAll('.close');

// Abrir modal de login
loginBtn.onclick = () => {
    loginModal.style.display = "block";
}

// Abrir modal de cadastro
registerBtn.onclick = () => {
    registerModal.style.display = "block";
}

// Fechar modais
closeButtons.forEach(button => {
    button.onclick = () => {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
});

// Fechar modal ao clicar fora
window.onclick = (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

// Funções para manipulação das postagens
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os post-cards
    const postCards = document.querySelectorAll('.post-card');
    const postModal = document.getElementById('postModal');
    const postModalClose = document.querySelector('.post-modal-close');

    // Adiciona evento de clique para cada post-card
    postCards.forEach(card => {
        card.addEventListener('click', function() {
            postModal.style.display = 'block';
            // Força um reflow antes de adicionar a classe active
            postModal.offsetHeight;
            postModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Previne rolagem do body
        });
    });

    // Fecha o modal quando clicar no X
    postModalClose.addEventListener('click', closeModal);

    // Fecha o modal quando clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === postModal) {
            closeModal();
        }
    });

    // Função para fechar o modal com animação
    function closeModal() {
        postModal.classList.remove('active');
        setTimeout(() => {
            postModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300); // Tempo igual à duração da transição CSS
    }

    // Controle dos modais de Login e Registro
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeButtons = document.querySelectorAll('.close');

    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
