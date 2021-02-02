import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from "graphql";
import {
  mutationWithClientMutationId,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
} from "graphql-relay";
import { GraphQLTodoEdge } from "./queryType";
import { createTodo, deleteTodo, getTodo, getTodos } from "./database";

const createTodoMutation = mutationWithClientMutationId({
  name: "CreateTodo",
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    completed: {
      type: GraphQLBoolean,
    },
  },
  outputFields: {
    todoEdge: {
      type: new GraphQLNonNull(GraphQLTodoEdge),
      resolve: ({ todoId }) => {
        const todo = getTodo(todoId);

        return {
          cursor: cursorForObjectInConnection([...getTodos()], todo),
          node: todo,
        };
      },
    },
  },
  mutateAndGetPayload: ({ title, completed }) => {
    const newTodo = createTodo({ title, completed });
    return {
      todoId: newTodo.id,
    };
  },
});

const deleteTodoMutation = mutationWithClientMutationId({
  name: "DeleteTodo",
  inputFields: {
    todoId: {
      type: GraphQLID,
    },
  },
  outputFields: {
    deletedTodoId: {
      type: GraphQLID,
    },
  },
  mutateAndGetPayload: ({ todoId }) => {
    const { id } = fromGlobalId(todoId);
    const deletedTodoId = deleteTodo({ id });
    return {
      deletedTodoId,
    };
  },
});

// const toggleTodoMutation = mutationWithClientMutationId({
//   name: "ToggleTodo",
//   inputFields: {
//     id: {
//       type: new GraphQLNonNull(GraphQLID),
//     },
//   },
//   outputFields: {
//     toggledTodoId: {
//       type: GraphQLID,
//     },
//   },
//   mutateAndGetPayload: ({ id }) => {
//     const deletedTodoId = toggleTodo({ id });
//     return {
//       deletedTodoId,
//     };
//   },
// });

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createTodo: createTodoMutation,
    deleteTodo: deleteTodoMutation,
  }),
});

export default mutationType;
