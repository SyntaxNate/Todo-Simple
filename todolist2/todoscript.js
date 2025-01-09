const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
	const task = taskInput.value.trim()
		if(task !=="") {
			const li = document.createElement('li');
			li.textContent = task;

			const deleteBtn = document.createElement('button');
			deleteBtn.textContent = "Delete";

			deleteBtn.addEventListener('click', () => {
				li.remove();
			
			});

			const editBtn = document.createElement('button');//We create a new button just the way we did for the delete button
			editBtn.textContent = 'Edit'; //We have the button appear as always

			editBtn.addEventListener('click', () => {
				const newTask = prompt('Edit Task:', li.textContent);//This calls a prompt to edit the text within li(the list item)
				if(newTask !== null && newTask.trim() !=="") {// the if statement checks if the user clicks cancel and if there are
					li.textContent = newTask.trim();	    // empty spaces and returns no change if either argument is fullfilled
					
					li.appendChild(deleteBtn);//Because li.textContent rewrites everything once the trim function is called we need
					li.appendChild(editBtn);//to re-attach the buttons as they are deleted as well 
				}
			});

			li.appendChild(editBtn);
			li.appendChild(deleteBtn);
			taskList.appendChild(li);
			taskInput.value = "";
		}
});