import { v4 } from "uuid";

let todos = [
  {
    id: "0d32e280-d76a-478f-8832-c7dcf8561da4",
    title: "Learn relay",
    completed: false,
  },
  {
    id: "e1c0b64a-fd1c-4eb8-b71a-87e1485a3ce5",
    title: "Learn nextjs",
    completed: true,
  },
];

export function getTodos() {
  return todos;
}

export function getTodo(id) {
  return todos.find((todo) => todo.id === id);
}

export function createTodo({ title, completed }) {
  const newTodo = {
    id: v4(),
    title,
    completed: completed || false,
  };
  todos = [newTodo].concat(todos);
  return newTodo;
}

export function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  return id;
}

export function toggleTodo(id) {
  console.log(todos);
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  console.log(todos);
  return id;
}
