// Access Elements
const setDate = document.getElementById("set-date");
const addBtn = document.getElementById("add-btn");
const todosContainer = document.querySelector(".todos");
const inputEl = document.querySelector(".todo-input");

// Accessing the buttons for complete, incomplete, and delete all
const compBtn = document.getElementById("com-btn");
const inBtn = document.getElementById("In-btn");
const delBtn = document.getElementById("del-btn");

// Function to create a new task item
addBtn.addEventListener("click", () => {
  const taskText = inputEl.value;
  const dueDate = setDate.value;

  if (taskText && dueDate) {
    // Create the list item
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    // Create the radio button for completion
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.classList.add("complete-radio");
    radioBtn.style.accentColor = "green";

    // Add event listener to mark task as completed
    radioBtn.addEventListener("click", () => {
      todoItem.classList.toggle("completed");
    });

    // Create the task span
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task");
    taskSpan.innerText = `${taskText} (Due: ${dueDate})`;

    // Create the delete button (X icon)
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa fa-times"></i>';
    deleteBtn.classList.add("delete-btn");

    // Add event listener to delete the task
    deleteBtn.addEventListener("click", () => {
      todosContainer.removeChild(todoItem);
    });

    // Append elements to the list item
    todoItem.appendChild(radioBtn);
    todoItem.appendChild(taskSpan);
    todoItem.appendChild(deleteBtn);

    // Append the list item to the ul
    todosContainer.appendChild(todoItem);

    // Clear the input fields
    inputEl.value = "";
    setDate.value = "";
  } else {
    alert("Please enter a task and set a due date.");
  }
});

// Event listener for the Complete button
compBtn.addEventListener("click", () => {
  const allTasks = document.querySelectorAll(".todo-item");
  allTasks.forEach((task) => {
    if (!task.classList.contains("completed")) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
});

// Event listener for the Incomplete button
inBtn.addEventListener("click", () => {
  const allTasks = document.querySelectorAll(".todo-item");
  allTasks.forEach((task) => {
    if (task.classList.contains("completed")) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
});

// Event listener for the Delete All button
delBtn.addEventListener("click", () => {
  todosContainer.innerHTML = "";
});
