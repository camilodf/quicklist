const inputItem = document.getElementById("input-item");
const addBtn = document.getElementById("add-btn");
const listContainer = document.querySelector(".list-itens");

// 1. Tenta pegar a lista do LocalStorage. Se não tiver nada lá, cria um array vazio.
// JSON.parse transforma o TEXTO guardado de volta em ARRAY.
let minhaLista = JSON.parse(localStorage.getItem('listaDeCompras')) || [];

// Chama a função logo de cara para mostrar o que já estava salvo
mostrarItens();

addBtn.addEventListener("click", function(){
    const valorDigitado = inputItem.value.trim();

    if(!valorDigitado){
        alert("Nenhum item foi digitado!");
        return;
    }

    const itemExist = minhaLista.some(function(itemAtual){
        return itemAtual.name.toLowerCase() === valorDigitado.toLowerCase();
    });
    
    if(itemExist){
        alert("Item já cadastrado!")
        inputItem.value = "";
        return;
    } else {
        minhaLista.push({
            name: valorDigitado,
            concluido: false
        });
    }

    inputItem.value = '';
    atualizarTela(); // Função unificada para atualizar visual + dados
});

function mostrarItens(){
    listContainer.innerHTML = '';

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

function deletarItem(index) {
    minhaLista.splice(index, 1);
    atualizarTela(); // Atualiza e salva
}

function concluirTarefa(index){
    minhaLista[index].concluido = !minhaLista[index].concluido;
    atualizarTela(); // Atualiza e salva
}

// Criei esta função auxiliar para não repetir código.
// Ela salva no navegador e depois redesenha a tela.
function atualizarTela() {
    // JSON.stringify transforma o ARRAY em TEXTO para o navegador aceitar
    localStorage.setItem('listaDeCompras', JSON.stringify(minhaLista));
    mostrarItens();
}