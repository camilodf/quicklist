# 📝 QuickList — Lista de Compras / Shopping List

![Licença](https://img.shields.io/badge/license-MIT-blue.svg) ![Status](https://img.shields.io/badge/status-concluído-green.svg)

Aplicação web desenvolvida com **HTML, CSS e JavaScript**, focada na organização de tarefas diárias com persistência de dados.  
*Web application developed with **HTML, CSS, and JavaScript**, focused on daily task organization with data persistence.*

O sistema permite adicionar itens, marcá-los como concluídos com animações fluidas e removê-los com feedback visual, salvando tudo automaticamente no navegador do usuário.  
*The system allows adding items, marking them as done with fluid animations, and removing them with visual feedback, automatically saving everything in the user's browser.*

---

## 🌐 Demonstração ao Vivo / Live Demo

Veja o projeto em funcionamento:  
*See the project live:* 👉 [**QuickList - App**](https://https://quicklist-rosy.vercel.app/)

---

## 📷 Demonstração / Preview

<div align="center">
  <img src="/assets/preview.PNG" alt="Preview do projeto Quicklist" width="100%">
</div>

---

## 🚀 Tecnologias Utilizadas / Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

- **Armazenamento:** `LocalStorage` (API do Navegador)
- **Ícones:** Arquivos SVG manipulados via CSS
- **Fontes:** Inter e Sora (Google Fonts)

---

## 🧩 Funcionalidades / Features

- **Adicionar e Validar Itens:** Impede a criação de itens vazios ou duplicados na lista.  
  * *Add and Validate Items: Prevents creating empty or duplicate items in the list.*
  
- **Persistência de Dados (LocalStorage):** A lista não se perde ao fechar a aba ou atualizar a página.  
  * *Data Persistence (LocalStorage): The list is not lost when closing the tab or refreshing the page.*
  
- **Animações CSS Personalizadas:** Efeito de "riscado" suave (strikethrough) animado da esquerda para a direita ao concluir uma tarefa.  
  * *Custom CSS Animations: Smooth strikethrough effect animated from left to right when completing a task.*
  
- **Sistema de Alertas (Toast):** Mensagens de confirmação de exclusão que desaparecem automaticamente com temporizadores inteligentes.  
  * *Alert System (Toast): Deletion confirmation messages that automatically disappear with smart timers.*
  
- **Design Responsivo e Acessível:** Interface adaptável para dispositivos móveis e desktop.  
  * *Responsive and Accessible Design: Adaptable interface for mobile and desktop devices.*

---

## ⚙️ Como Executar Localmente / How to Run Locally

1.  **Clone este repositório / Clone this repository:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/quicklist.git](https://github.com/SEU-USUARIO/quicklist.git)
    ```

2.  **Navegue até a pasta / Navigate to the folder:**
    ```bash
    cd quicklist
    ```

3.  **Abra o `index.html` / Open `index.html`:**
    Basta abrir o arquivo `index.html` no seu navegador de preferência (ou usar o Live Server do VS Code).
    * *Just open the `index.html` file in your preferred browser (or use VS Code Live Server).*

---

## 🧠 Aprendizados / Learnings

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:  
*While developing this project, I deepened my knowledge in:*

- **Especificidade CSS:** Gerenciamento de pesos de seletores para estilização correta sem uso de `!important`.  
  * *CSS Specificity: Managing selector weights for correct styling without using `!important`.*
  
- **Manipulação Avançada do DOM:** Criação dinâmica de elementos HTML baseada em Arrays de objetos.  
  * *Advanced DOM Manipulation: Dynamic creation of HTML elements based on Arrays of objects.*
  
- **Lógica Assíncrona:** Uso de `setTimeout` e `clearTimeout` para gerenciar o ciclo de vida das notificações de alerta.  
  * *Asynchronous Logic: Using `setTimeout` and `clearTimeout` to manage the lifecycle of alert notifications.*
  
- **Pseudo-elementos CSS:** Uso de `::after` e `transform-origin` para criar animações de sublinhado progressivo.  
  * *CSS Pseudo-elements: Using `::after` and `transform-origin` to create progressive underline animations.*

---

## 📂 Estrutura do Projeto / Project Structure

Organização dos arquivos para separar estrutura, estilo e comportamento.  
*File organization to separate structure, style, and behavior.*

<pre>
/quicklist
├── 📂 assets/
│   ├── logo.svg
│   ├── trash.svg
│   ├── warning.svg
│   └── preview.png
├── 📂 styles/
│   ├── global.css
│   └── index.css
├── 📄 index.html
├── 📄 script.js
└── 📄 README.md
</pre>

---

## 🪪 Licença / License

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar para estudos.  
*This project is under the MIT License. Feel free to use and modify for study purposes.*

---

<p align="center">
  Feito com ❤️ por Camilo Dalcim Franzini
</p>