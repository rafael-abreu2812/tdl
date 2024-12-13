//Botão e lista do html
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Evento de clique do botão
addTaskBtn.addEventListener("click", () => {
    //prompt pedindo a tarefa
    const task = prompt("Digite aqui a tarefa!");

    //verificando se algo foi digitado
    if(task && task.trim() !== ""){
        //vai criar uma nova tarefa na lista
        const li = document.createElement("li");
        li.textContent = task;

        //vai adicionar a tarefa criada á lista
        taskList.appendChild(li);
    }else{
        alert("Digite uma tarefa válida!");
    }

});