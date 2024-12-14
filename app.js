//Lista do html e campo de entrada
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//Evento de clique do botão
taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        //pegar o valor digitado no campo de entrada
        const task = taskInput.value;

        //verificando se algo foi digitado
        if (task && task.trim() !== "") {
            //vai criar uma nova tarefa na lista
            const li = document.createElement("li");

            //cria a caixinha (checkbox)
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            //texto da tarefa para controlar separadamente da caixinha
            const taskText = document.createTextNode(" " + task); //espaço pra separar a caixinha da task

            //adicionar caixinha e texto dentro do item da lista
            li.appendChild(checkbox);
            li.appendChild(taskText);

            //vai adicionar a tarefa criada á lista
            taskList.appendChild(li);

            //limpar o campo de entrada após adicionar uma tarefa
            taskInput.value = "";

            //evento de marcar caixinha e desmarcar
            checkbox.addEventListener("change", () => {
                //aplicar style de riscar as tasks aqui
            })
        } else {
            alert("Digite uma tarefa válida!");
        }
    }
});