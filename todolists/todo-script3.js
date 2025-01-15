//Select HTML Elements//
const taskInput = document.getElementById('taskInput');//Input Box//
const addTaskBtn = document.getElementById('addTaskBtn');//Add Task Button//
const taskList = document.getElementById('taskList');//Task list container//

//Load tasks from local storage on page load 
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//Load tasks or initialize empty array
    savedTasks.forEach(task => createTaskElement(task));   
//Create elements for each saved task
});

//Function to create a task element
function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;

//  Create 'Complete' button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Check";

    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
//  Toggle the completed class style
        saveTasksToLocalStorage();
//  Update Local Storage
    });

//  Create 'Delete' button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', () => {
        li.remove();//remove task

        saveTasksToLocalStorage();
//      update local storage again
    });

//  Create 'edit' button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";

    editBtn.addEventListener('click', () => {
        const newTask = prompt('Edit Task:', li.textContent)
//      prompt to add new task
        if(newTask !== null && newTask.trim() !=="") {
//      checks for valid input
            li.textContent = newTask.trim();// Update task text

//          re-attach buttons
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            li.appendChild(editBtn);

//          Update local storage
            saveTasksToLocalStorage();
        }
    });

//  Append buttons to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);
}

// Save task to local storage 
function saveTasksToLocalStorage() {
    const tasks = [];

    taskList.querySelectorAll('li').forEach(li => {
        tasks.push(li.firstChild.textContent.trim());//Refers only to the text node containing the task test 
        // and excludes any subsequent text like the text for the buttons//
// Collect task text from each <li>
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTaskBtn.addEventListener('click', () => {
    const tasks = taskInput.value.trim() 
        if (tasks !=="") {
            createTaskElement(tasks);
            saveTasksToLocalStorage();

            taskInput.value ="";
        }
});