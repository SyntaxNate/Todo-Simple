const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', ()=> {
	const task = taskInput.value.trim()
	if(task !=="") {
		const li = document.createElement('li');
		li.textContent = task;

		const deleteBtn = document.createElement('button');// We create the delete dynamically like we did li variable
		deleteBtn.textContent = "Delete";//Then we state it as a static text

		deleteBtn.addEventListener('click', ()=> {
			li.remove();
		});

		li.append(deleteBtn);//Lastly we append the delete button to the item on the list being the li variable.
		taskList.appendChild(li);
		taskInput.value = "";
	}
})