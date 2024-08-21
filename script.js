const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.toggle('completed', todo.completed);
    li.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="toggleTodo(${index})">
        ${todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    todos.push({ text: todoText, completed: false });
    todoInput.value = '';
    renderTodos();
  }
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

addTodoButton.addEventListener('click', addTodo);