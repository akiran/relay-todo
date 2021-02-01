import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";

const fragment = graphql`
  fragment Todo_Query on Todo {
    id
    title
    completed
  }
`;

function Todo({ todo }) {
  console.log(todo);
  const data = useFragment(fragment, todo);
  return (
    <li>
      <input className="toggle" type="checkbox"></input>
      <label>{data.title}</label>
      <button className="destroy"></button>
    </li>
  );
}

export default Todo;
