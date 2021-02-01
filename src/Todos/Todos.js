import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import Todo from "./Todo";

const query = graphql`
  query Todos_Query {
    todos {
      id
      ...Todo_Query
    }
  }
`;

function Todos() {
  const data = useLazyLoadQuery(query);
  return (
    <div>
      {data?.todos?.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
