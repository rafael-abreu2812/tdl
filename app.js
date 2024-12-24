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
                if (checkbox.checked) {
                 li.style.textDecoration = "line-through"; // adiciona risco ao marcar a task como concluida e move para seção "Tarefas Concluidas"
                 completedList.appendChild(li);
                } else {
                    li.style.textDecoration = "none";
                    completedList.appendChild(li);  // se a task não esta como concluida, não adiciona/remove o risco do texto e remove da lista "tarefas concluidas"
                }

                
            })
        } else {
            alert("Digite uma tarefa válida!");
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

