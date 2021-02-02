import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useState } from "react";
import { ConnectionHandler } from "relay-runtime";
import uuid from "uuid";

const createTodoMutation = graphql`
  mutation TodoInput_Mutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      todoEdge {
        node {
          id
          title
          completed
        }
      }
    }
  }
`;

function TodoInput() {
  const [title, setTitle] = useState("");
  const [commit, isInFlight] = useMutation(createTodoMutation);
  function keyHandler(e) {
    if (e.key === "Enter") {
      commit({
        variables: {
          input: {
            title,
          },
        },
        onCompleted(data) {
          console.log(data, "!!!");
        },
        updater: (store) => {
          console.log(store);
          const payload = store.getRootField("createTodo");
          const newEdge = payload.getLinkedRecord("todoEdge");
          const proxy = store.getRoot();
          const conn = ConnectionHandler.getConnection(proxy, "TodoList_todos");
          ConnectionHandler.insertEdgeBefore(conn, newEdge);
        },
      });
    }
  }
  function changeHandler(e) {
    setTitle(e.target.value);
  }

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onChange={changeHandler}
      onKeyPress={keyHandler}
      value={title}
    />
  );
}

export default TodoInput;
