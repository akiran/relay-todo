let todos = [
  { id: "1", title: "Learn relay", completed: false },
  { id: "2", title: "Learn nextjs", completed: true },
];

export function getTodos() {
  return todos;
}

export function getTodo(id) {
  return todos.find((todo) => todo.id === id);
}

export function createTodo({ title, completed }) {
  const newTodo = {
    id: `${todos.length}`,
    title,
    completed: completed || false,
  };
  todos = todos.concat(newTodo);
  return newTodo;
}

export function deleteTodo({ id }) {
  todos = todos.filter((todo) => todo.id !== id);
  return id;
}
