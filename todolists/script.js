//Select HTML Elements//
const taskInput = document.getElementById('taskInput');//Input Box//
const addTaskBtn = document.getElementById('addTaskBtn');//Add Task Button//
const taskList = document.getElementById('taskList');//Task list container//


// Event Listener for Adding Task //
addTaskBtn.addEventListener('click', () => {
	const task = taskInput.value.trim(); //Get Input Value and trim WhiteSpaces
	if (task !=="") {//Only add if the input is not empty
		const li = document.createElement('li'); //Create a new list item
		li.textContent = task;
		taskList.appendChild(li);//Add it to the task list
		taskInput.value = "";
	}
});
