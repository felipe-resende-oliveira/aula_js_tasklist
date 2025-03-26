let tarefas = []
const botaoLimpar = document.getElementById("botao-limpar")

function adicionarTarefa() {


        const inputTarefa = document.getElementById("inputTarefa") 
        let tarefa = inputTarefa.value.trim()
        const mensagem = document.getElementById("mensagem")

        if(tarefa == "") {
                let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
                mensagem.style.color = "#A34743"
                mensagem.textContent = mensagemErro
        } else {
                let mensagemSucesso = "Tarefa adicionada com sucesso!";
                mensagem.style.color = "#28A745"
                mensagem.textContent = mensagemSucesso
                botaoLimpar.style.display = "inline-block"

                tarefas.push(tarefa)
                renderizarTarefas()
        }

        //Troca o valor dado pelo usuário para um texto vazio para limpar o que está escrito no input de texto
        inputTarefa.value = ""
}

function renderizarTarefas() {
        //Adiciona a tabela o valor dado pelo usuario
        const listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""

        //for (iterador, condição, frequencia)
        for (let i = 0; i < tarefas.length; i++) {
                let novaTarefa = document.createElement("li")
                novaTarefa.textContent = tarefas[i]

                let botaoRemover = document.createElement("button")
                botaoRemover.className = "remover"
                botaoRemover.textContent = "Remover"
                botaoRemover.onclick = () => removerTarefa(i)

                let botaoEditar = document.createElement("button")
                botaoEditar.className = "editar"
                botaoEditar.textContent = "Editar"
                botaoEditar.onclick = () => editarTarefa(i)


                novaTarefa.appendChild(botaoRemover)
                novaTarefa.appendChild(botaoEditar)
                listaTarefas.appendChild(novaTarefa)

        }

}

function removerTarefa(i) {
        tarefas.splice(i, 1)
        renderizarTarefas()

        if (tarefas.length == 0) {
                botaoLimpar.style.display = "none"
        } else {
                botaoLimpar.style.display = "inline-block"
        }
}

function editarTarefa(i) {
        let tarefaEditada = prompt("Edite a tarefa:")
        if(tarefaEditada.trim !== "" ) {
                tarefas[i] = tarefaEditada
                renderizarTarefas()
        }
}
function limparLista() {   

        tarefas.length = 0
        botaoLimpar.style.display = "none"
        renderizarTarefas()
        const mensagem = document.getElementById("mensagem")
        mensagem.style.color = "#331F19"
        mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}