const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('Click', () => {
	console.log('Button Clicked')
	const task = taskInput.value.trim();
		if (task !=="") {
			const li = document.createElement('li');
			li.textContent = task;
			taskList.appendChild(li);
			taskInput.value = "";

		}
});