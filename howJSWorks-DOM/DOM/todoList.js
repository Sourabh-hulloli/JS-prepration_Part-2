const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  newLi.innerHTML = `
          <span class="text">${newTodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
  `;
  console.log(newLi);
  todoList.appendChild(newLi);
  // to clear the value from input box
  todoInput.value = "";
});

// Ex on event delegation
todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
