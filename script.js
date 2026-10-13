const textArea = document.querySelector('.caixa-de-texto');
const botaoAdicionarTarefa = document.querySelector('.botao-adicionar');
const listaTarefas = document.querySelector('.lista-tarefas');

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const statusTarefa = document.createElement('p');
    statusTarefa.classList.add('status-tarefa-simbolo');
    statusTarefa.textContent = '•';

    const descricaoTarefa = document.createElement('p');
    descricaoTarefa.classList.add('descricao-tarefa');
    descricaoTarefa.textContent = tarefa;

    const botaoTarefaConcluida = document.createElement('button');
    botaoTarefaConcluida.classList.add('botao-tarefa-concluida');
    botaoTarefaConcluida.textContent = 'Feito';

    const botaoExcluirTarefa = document.createElement('button');
    botaoExcluirTarefa.classList.add('botao-excluir-tarefa');
    botaoExcluirTarefa.textContent = 'X';

    botaoTarefaConcluida.addEventListener('click', () => {
        statusTarefa.textContent = '✓';
        descricaoTarefa.classList.add('tarefa-concluida');
    });

    botaoExcluirTarefa.addEventListener('click', () => {
        li.remove();
    });

    li.append(statusTarefa, descricaoTarefa, botaoTarefaConcluida, botaoExcluirTarefa);
    return li;
}

botaoAdicionarTarefa.addEventListener('click', () => {
    const textoTarefa = textArea.value;

    if (textoTarefa === '') {
        alert('Insira a terefa antes de adicionar!');
        return;
    }

    const elementoTarefa = criarElementoTarefa(textoTarefa);
    listaTarefas.appendChild(elementoTarefa);
    textArea.value = '';
});