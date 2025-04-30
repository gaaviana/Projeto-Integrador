export function alternarFormularios() {
    const btnProjeto = document.getElementById('btnProjetp');
    const btnEvento = document.getElementById('btnEvento');
    const formularios = document.querySelector('.formularios');
    const titulo = formularios.querySelector('h2');
    const formEvento = document.getElementById('formEvento');

    // Função para alternar para o formulário de Projeto
    function alternarParaProjeto() {
        titulo.textContent = 'Criar Novo Projeto';
        formEvento.id = 'formProjeto';

        // Alterar todos os IDs, names e fors para projeto
        const elementos = formEvento.querySelectorAll('[id*="Evento"], [name*="Evento"], [for*="Evento"]');
        elementos.forEach(elemento => {
            if (elemento.id) {
                elemento.id = elemento.id.replace('Evento', 'Projeto');
            }
            if (elemento.name) {
                elemento.name = elemento.name.replace('Evento', 'Projeto');
            }
            if (elemento.htmlFor) {
                elemento.htmlFor = elemento.htmlFor.replace('Evento', 'Projeto');
            }
        });
    }

    // Função para alternar para o formulário de Evento
    function alternarParaEvento() {
        titulo.textContent = 'Criar Novo Evento';
        formEvento.id = 'formEvento';

        // Alterar todos os IDs, names e fors para evento
        const elementos = formEvento.querySelectorAll('[id*="Projeto"], [name*="Projeto"], [for*="Projeto"]');
        elementos.forEach(elemento => {
            if (elemento.id) {
                elemento.id = elemento.id.replace('Projeto', 'Evento');
            }
            if (elemento.name) {
                elemento.name = elemento.name.replace('Projeto', 'Evento');
            }
            if (elemento.htmlFor) {
                elemento.htmlFor = elemento.htmlFor.replace('Projeto', 'Evento');
            }
        });
    }

    // Adicionar os event listeners
    if (btnProjeto && btnEvento) {
        btnProjeto.addEventListener('click', alternarParaProjeto);
        btnEvento.addEventListener('click', alternarParaEvento);
    } else {
        console.error('Botões não encontrados!');
    }
} 