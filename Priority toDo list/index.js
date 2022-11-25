// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletechecked);
filterOption.addEventListener('click', filterTodo);

// functions 

// For adding the todo
function addTodo(event) {
  // Prevent the form from submitting
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create li 
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.append(newTodo);
  // completed ----> Check mark 
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.append(completedButton);
  // deleted ----> trash mark 
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.append(trashButton);

  // Append it to the list 
  todoList.append(todoDiv);
  // Clear the todo INPUT value 
  todoInput.value = '';
}

// for removing and adding the check mark
function deletechecked(e) {
  const item = e.target;
  // REMOVE
  if (item.classList.contains('trash-btn')) {
    item.parentElement.classList.add('fall');
    // item.parentElement.remove();
    item.parentElement.addEventListener('transitionend', function () {
      item.parentElement.remove();
    })
  }
  // CHECK MARK
  if (item.classList.contains('completed-btn')) {
    item.parentElement.classList.add('completed');
    item.parentElement.style.textDecoration = 'line-through';
    item.parentElement.style.opacity = '0.7';
  }
}

// for filtering the things 
function filterTodo(e) {
  let todos = todoList.children;
  todos = Array.from(todos);
  console.log(todos, typeof todos, Array.isArray(todos));
  for (let val of todos) {
    if (e.target.value == 'all') {
      val.style.display = 'flex';
    }
    else if (e.target.value == 'Completed') {
      if (val.classList.contains("completed")) {
        val.style.display = "flex";
      } else {
        val.style.display = "none";
      }
    }
    else if (e.target.value == 'Uncompleted') {
      if (!val.classList.contains("completed")) {
        val.style.display = "flex";
      } else {
        val.style.display = "none";
      }
    }
  }
}



