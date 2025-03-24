function adicionarTarefa() {

        let tarefas = []

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

                tarefas.push(tarefa)
                
                //Adiciona a tabela o valor dado pelo usuario
                const listaTarefas = document.getElementById("listaTarefas")
                let novaTarefa = document.createElement("li")
                novaTarefa.textContent = tarefa
                listaTarefas.appendChild(novaTarefa)
        }

        //Troca o valor dado pelo usuário para um texto vazio para limpar o que está escrito no input de texto
        inputTarefa.value = ""
}