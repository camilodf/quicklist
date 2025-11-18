const inputItem = document.getElementById("input-item");
const addBtn = document.getElementById("add-btn");
const listContainer = document.querySelector(".list-itens");
const deleteBtn = document.getElementsByClassName("button-delete")

let minhaLista = [];

addBtn.addEventListener("click", function(){
    /*Trim remove espaços acidentais*/
    const valorDigitado = inputItem.value.trim();
    //Validar Campo Vazio
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
    }
    else{
        minhaLista.push({
            name: valorDigitado,
            checked: false
        });

    }

    mostrarItens();
    inputItem.value = '';
});

    function mostrarItens(){
        listContainer.innerHTML = '';

        minhaLista.forEach((item,index) => {
            listContainer.innerHTML += `
            <li class="item-tarefa ${item.concluido ? 'done' : ''}">

                <div class="info-tarefa">
                    <input type="checkbox" ${item.concluido ? 'checked' : ''}
                        onclick="concluirTarefa(${index})"
                    >    
                    <p>${item.name}</p>
                </div>
                <button class="button-delete"><img src="/assets/trash.svg" alt="Lixeira"></button>

            </li>
            `;
        });
    };


    deleteBtn.addEventListener("click", function(){

        deletarItem();
    })

    function deletarItem(index){
        console.log('indice: ', index)
    }