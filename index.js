const inputItem = document.getElementById(input-item);
const addBtn = document.getElementById(add-btn);
const listContainer = document.querySelector(".list-itens");

let minhaLista = [];

addBtn.addEventListener("click", function(){
    const valorDigitado = inputItem.value;

    console.log(inputItem.value,valorDigitado)

    minhaLista.push(valorDigitado);

    console.log(minhaLista)

})