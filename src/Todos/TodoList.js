import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import Todo from "./Todo";

const query = graphql`
  query TodoList_Query {
    todos {
      id
      ...Todo_Query
    }
  }
`;

function TodoList() {
  const data = useLazyLoadQuery(query);
  return (
    <section className="main">
      <ul className="todo-list">
        {data.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
