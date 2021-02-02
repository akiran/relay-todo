import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import DeleteTodo from "./DeleteTodo";

const fragment = graphql`
  fragment Todo_Query on Todo {
    id
    title
    completed
  }
`;

function Todo({ todo }) {
  const data = useFragment(fragment, todo);
  return (
    <li>
      <input className="toggle" type="checkbox"></input>
      <label>{data.title}</label>
      <DeleteTodo id={todo.id} />
    </li>
  );
}

export default Todo;
