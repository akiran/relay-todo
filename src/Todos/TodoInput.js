import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { useState } from "react";

const createTodoMutation = graphql`
  mutation TodoInput_Mutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      todoEdge {
        node {
          id
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
