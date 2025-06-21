function addTask() {
  // Get the value from the input field
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;

  // Do nothing if input is empty
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item (li)
  let li = document.createElement("li");
  li.textContent = taskText;

  // Create a remove button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.marginLeft = "10px";

  // Add event listener to the button
  removeBtn.onclick = function () {
    li.remove(); // This removes the <li> from the list
  };

  // Append the button to the list item
  li.appendChild(removeBtn);

  // Append the list item to the task list
  document.getElementById("taskList").appendChild(li);

  // Clear the input field
  taskInput.value = "";
}
