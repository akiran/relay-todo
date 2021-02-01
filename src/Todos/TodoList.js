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
    <div>
      {data.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
