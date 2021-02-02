import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";

const deleteTodoMutation = graphql`
  mutation DeleteTodo_Mutation($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      deletedTodoId
    }
  }
`;

export default function DeleteTodo({ id }) {
  const [commit, isInFlight] = useMutation(deleteTodoMutation);
  function clickHandler(e) {
    commit({
      variables: {
        input: {
          id,
        },
      },
      onCompleted(data) {
        console.log(data, "!!!");
      },
      updater: (store) => {
        const proxy = store.getRoot();
        const conn = ConnectionHandler.getConnection(proxy, "TodoList_todos");
        ConnectionHandler.deleteNode(conn, id);
      },
    });
  }
  return <button className="destroy" onClick={clickHandler}></button>;
}
