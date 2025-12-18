const nomes = []

const form = document.getElementById('form-cadastro');
const inputNome = document.getElementById('nome');
const Lista = document.getElementById('lista-nome');
const contador = document.getElementById('contador');
const botaoLimpar = document.getElementById('limpar');

function cadastrarNome(event){
    event.preveventDefault();

    const nome = inputNome.value.trim()

    if (nome ==='') {
        alert('Por favor, digite um nome antes de cadastrar.')

        inputNome.focus()
        return;
        
    }

    nomes.push(nome);

    adicionarNomeNaTela(nome);

    atualizarContador();

    inputNome.value = '';

    inputNome.focus();
}

function atualizarContador(){
    const total = nomes.length;

    if (total === 0) {
        contador.textContent = 'Nenhum usuário cadastrado.';
    }else if(total===1){
        contador.textContent = 'Nenhum usuário cadastrado.';
    }
}