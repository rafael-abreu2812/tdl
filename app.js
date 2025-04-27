//Lista do html e campo de entrada
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//Evento de clique do botão
taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        //pegar o valor digitado no campo de entrada
        const task = taskInput.value;
        const deadline = document.getElementById("taskDeadline").value; //Pega a data prazo escolhida

        //verificando se algo foi digitado
        if (task && task.trim() !== "") {
            //vai criar uma nova tarefa na lista
            const li = document.createElement("li");

            //cria a caixinha (checkbox)
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `task-${Date.now()}`;


            const label = document.createElement("label");
            label.setAttribute("for", checkbox.id);
            label.textContent = task;
        

            //texto da tarefa e prazo
            const taskText = document.createTextNode(`${task}` - Prazo: ${deadline || "Sem prazo definido"}); 

            //adicionar caixinha e texto dentro do item da lista
            li.appendChild(checkbox);
            li.appendChild(label);
            

            //vai adicionar a tarefa criada á lista
            taskList.appendChild(li);

            //limpar o campo de entrada após adicionar uma tarefa
            taskInput.value = "";
            document.getElementById("taskDeadline").value = ""; // Limpa o campo de data

            //evento de marcar caixinha e desmarcar
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                 li.style.textDecoration = "line-through"; // adiciona risco ao marcar a task como concluida e move para seção "Tarefas Concluidas"
                 completedList.appendChild(li);
                } else {
                    li.style.textDecoration = "none";
                    taskList.appendChild(li);  // se a task não esta como concluida, não adiciona/remove o risco do texto e remove da lista "tarefas concluidas"
                }

                
            })
        } else {
            alert("Digite uma tarefa válida, por favor!");
        }
    }
    
});

// elementos da sidebar
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const completedList = document.getElementById("completedList");

// abre e fecha sidebar
openSidebar.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open"); // fecha sidebar se aberta
    } else {
        sidebar.classList.add("open"); // abre sidebar se fechada
    }
});

