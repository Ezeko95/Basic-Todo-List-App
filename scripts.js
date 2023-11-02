function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <button class='delete' onClick="delete(this)">Delete</button>`;
  taskList.appendChild(listItem);

  taskInput.value = '';

}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove()
}