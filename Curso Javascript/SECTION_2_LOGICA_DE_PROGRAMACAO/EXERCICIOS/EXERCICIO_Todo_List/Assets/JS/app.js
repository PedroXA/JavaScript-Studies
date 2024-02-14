const btnAddToDo    = document.querySelector('.container__btn-addToDo');
const taskInput     = document.querySelector('.container__taskInput');
const taskOutput    = document.querySelector('.table-task');

function taskElementsCreator(){
    const tr = document.createElement('tr');
    const tdTask = document.createElement('td');
    const tdOption = document.createElement('td');
    return [tr, tdTask, tdOption];
}

function createDeleteButton(){
    const button = document.createElement('button');
    button.textContent = "Delete";
    button.setAttribute('class', 'delete btn btn-danger');
    return button;
}

function appendToTaskOutput(parent, ...children) {
    children.forEach(child => parent.appendChild(child));
}

function createTaskElement(taskInput) {
    const [tr, tdTask, tdOption] = taskElementsCreator();
    const button = createDeleteButton();

    tdTask.textContent = taskInput;

    appendToTaskOutput(tr, tdTask, tdOption);

    tdOption.appendChild(button);

    return tr;
}

function createTask(taskInput) {
    const taskElement = createTaskElement(taskInput);
    taskOutput.appendChild(taskElement);
}

function saveTasks(){
    const trTasks = taskOutput.querySelectorAll('tr');
    const taskList = [];

    for(let task of trTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('Delete',' ');
        taskList.push(taskText);
    }

    const taskJson = JSON.stringify(taskList);  // Passa os valores em javascript para JSON
    localStorage.setItem('tasks', taskJson);    // Armazena o valor JSON no LocalStorage do Browser
}

function addSavedTask(){
    try{
        const task = localStorage.getItem('tasks'); // Pega as informações salvas no LocalStorage
        const taskList = JSON.parse(task);          // Converte do JSON para String
    
        for (let task of taskList){
            createTask(task);
        }
    }catch(error){
        console.log("Sem instância de armazenamento no LocalStorage - Criando uma...");
    }
   
}
addSavedTask();


btnAddToDo.addEventListener('click', function(e){
   if (!taskInput.value) return;
   createTask(taskInput.value);
   saveTasks();
   taskInput.value = "";
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('delete')){
        el.closest('tr').remove();
        saveTasks();
    }
})