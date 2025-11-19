// --- VARIÁVEIS E SELETORES ---
const inputItem = document.getElementById("input-item");
const addBtn = document.getElementById("add-btn");
const listContainer = document.querySelector(".list-itens");
const alertText = document.querySelector(".alert-text");

// Importante: Essa variável precisa ficar fora das funções (escopo global)
// para que eu consiga "cancelar" o timer anterior quando o usuário clicar rápido demais.
let timeOutId; 

// --- CARREGAMENTO INICIAL ---
// Tenta buscar o que tá salvo no navegador. O '|| []' é o plano B:
// se não tiver nada salvo (null), ele cria um array vazio pra não dar erro.
let minhaLista = JSON.parse(localStorage.getItem('listaDeCompras')) || [];

// Já roda a função de exibir assim que a página abre pra lista não aparecer vazia
mostrarItens();

// --- ADICIONAR ITEM ---
addBtn.addEventListener("click", function(){
    // O trim() é vida: remove aqueles espaços sem querer no começo ou fim que o corretor do celular coloca
    const valorDigitado = inputItem.value.trim();

    // Validação simples: se estiver vazio, para tudo (return)
    if(!valorDigitado){
        alert("Nenhum item foi digitado!");
        return;
    }

    // O .some() é um "fofoqueiro": ele varre a lista só pra ver se JÁ EXISTE (retorna true/false).
    // Usei toLowerCase() nos dois pra "Arroz" ser igual a "arroz".
    const itemExist = minhaLista.some(function(itemAtual){
        return itemAtual.name.toLowerCase() === valorDigitado.toLowerCase();
    });
    
    if(itemExist){
        alert("Item já cadastrado!")
        inputItem.value = "";
        return;
    } else {
        // Se passou nos testes, adiciona o OBJETÃO com nome e status
        minhaLista.push({
            name: valorDigitado,
            concluido: false
        });
    }

    inputItem.value = '';
    atualizarTela(); // Minha função "faz tudo": salva e desenha
});

// --- EXIBIR NA TELA (RENDERIZAÇÃO) ---
function mostrarItens(){
    // Zero o HTML atual pra não duplicar a lista velha com a nova
    listContainer.innerHTML = '';

    // O loop forEach varre meu array e cria o HTML de cada item
    minhaLista.forEach((item, index) => {
        listContainer.innerHTML += `
        <li class="item-tarefa ${item.concluido ? 'done' : ''}">
            <div class="info-tarefa">
                <input type="checkbox" ${item.concluido ? 'checked' : ''}
                    onclick="concluirTarefa(${index})"
                >    
                <p>${item.name}</p>
            </div>
            <button class="button-delete" onclick="deletarItem(${index})">
                <img src="/assets/trash.svg" alt="Lixeira">
            </button>
        </li>
        `;
    });
}

// --- DELETAR E ALERTAS ---
function deletarItem(index) {
    const item = minhaLista[index].name;
    minhaLista.splice(index, 1);
    atualizarTela();

    if (timeOutId) {
        clearTimeout(timeOutId);
    }

    // 1. Coloca o elemento na tela (ainda invisível/transparente)
    alertText.style.display = 'flex';
    
    // 2. Define o conteúdo
    alertText.innerHTML = `
        <div class="info-tarefa">
            <img src="/assets/warning.svg" alt="Alerta">
            <p>${item} foi removido da lista!</p>
        </div>
        <button class="button-delete" onclick="removerMensagem()">
            <img src="/assets/x.svg" alt="Lixeira">
        </button>
    `;

    // 3. PEQUENO TRUQUE: Espera 10ms para adicionar a classe. 
    // Isso dá tempo do navegador processar que o elemento existe antes de animar.
    setTimeout(() => {
        alertText.classList.add('alert-open');
    }, 10);

    // 4. Agenda o fechamento
    timeOutId = setTimeout(() => {
        removerMensagem();
    }, 5000); 
}

// --- MARCAR COMO FEITO ---
function concluirTarefa(index){
    // Inverte o valor atual (se era true vira false, se era false vira true)
    minhaLista[index].concluido = !minhaLista[index].concluido;
    atualizarTela(); 
}

// --- FECHAR ALERTA ---
function removerMensagem() {
    // 1. Remove a classe primeiro (inicia o fade-out / desaparecimento visual)
    alertText.classList.remove('alert-open');

    // 2. Espera o tempo da transição do CSS (0.5s = 500ms) para tirar da tela
    setTimeout(() => {
        // Só esconde DEPOIS que a animação visual terminou
        alertText.style.display = 'none';
    }, 500); // 500ms DEVE ser igual ao tempo do 'transition' no CSS

    if (timeOutId) {
        clearTimeout(timeOutId);
    }
}

// --- PERSISTÊNCIA DE DADOS ---
// Função auxiliar pra não ficar repetindo código
function atualizarTela() {
    // O LocalStorage só aceita TEXTO (string).
    // O JSON.stringify pega meu array chique e transforma num textão.
    localStorage.setItem('listaDeCompras', JSON.stringify(minhaLista));
    mostrarItens();
}

