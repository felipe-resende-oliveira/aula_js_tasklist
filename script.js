function adicionarTarefa() {

        // Pega o valor do input e adiciona na variavel tarefa
        const inputTarefa = document.getElementById("inputTarefa") 
        let tarefa = inputTarefa.value.trim()
        const mensagem = document.getElementById("mensagem")

        if(tarefa == "") {
                //mostra uma mensagem de erro
                let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
                mensagem.style.color = "#A34743"
                mensagem.textContent = mensagemErro 
        } else {
                //imprime a mensagem colocada na variavel mensagem
                let mensagemSucesso = "Tarefa adicionada com sucesso!";
                mensagem.style.color = "#28A745"
                mensagem.textContent = mensagemSucesso
                

                // adiciona a variavel a ul
                const listaTarefas = document.getElementById("listaTarefas")
                //adiciona a variavel a li
                let novaTarefa = document.createElement("li")
                //Coloca o valor da variavel tarefa na li da variavel novaTarefa como texto (valor dado pelo usuário)
                novaTarefa.textContent = tarefa
                //cria uma li dentro da ul, a partir de suas variaveis
                listaTarefas.appendChild(novaTarefa)
        }

        //Troca o valor dado pelo usuário para um texto vazio para limpar o que está escrito no input de texto
        inputTarefa.value = ""

        //se o valor do input for vazio então mostre uma mensagem de erro

}