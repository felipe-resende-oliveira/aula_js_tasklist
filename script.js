function adicionarTarefa() {
        let mensagem = "Tarefa adicionada com sucesso!"; 
        // Pega o input e adiciona a uma variavel
        let inputTarefa = document.getElementById("inputTarefa")
        // Pega o valor do input e adiciona na variavel tarefa
        let tarefa = inputTarefa.value
        console.log(tarefa)
        //imprime a mensagem colocada na variavel mensagem
        document.getElementById("mensagem").textContent = mensagem
        // adiciona a variavel a ul
        let listaTarefas = document.getElementById("listaTarefas")
        //adiciona a variavel a li
        let novaTarefa = document.createElement("li")
        //Coloca o valor da variavel tarefa na li da variavel novaTarefa como texto (valor dado pelo usuário)
        novaTarefa.textContent = tarefa
        //cria uma li dentro da ul, a partir de suas variaveis
        listaTarefas.appendChild(novaTarefa)

        //Troca o valor dado pelo usuário para um texto vazio para limpar o que está escrito no input de texto
        inputTarefa.value = ""
}