function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this.parentNode)" class='btncheck'>Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle('completed', checkbox.checked);
}

function removeTask(taskItem) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
}
