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
  const data = useFragment(fragment, todo);
  return <div>{data.title}</div>;
}

export default Todo;
