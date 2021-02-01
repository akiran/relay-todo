import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Todo } from "./types";
import { createTodo, deleteTodo } from "./helpers";

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
    todo: {
      type: Todo,
    },
  },
  mutateAndGetPayload: ({ title, completed }) => {
    const newTodo = createTodo({ title, completed });
    return {
      todo: newTodo,
    };
  },
});

const deleteTodoMutation = mutationWithClientMutationId({
  name: "DeleteTodo",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  outputFields: {
    deletedTodoId: {
      type: GraphQLID,
    },
  },
  mutateAndGetPayload: ({ id }) => {
    const deletedTodoId = deleteTodo({ id });
    return {
      deletedTodoId,
    };
  },
});

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createTodo: createTodoMutation,
    deleteTodo: deleteTodoMutation,
  }),
});

export default mutationType;
