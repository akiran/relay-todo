import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from "graphql-relay";
import { getTodos, getTodo } from "./database";

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    if (type === "Todo") {
      return getTodo(id);
    }
    return null;
  },
  (obj) => {
    return GraphQLTodo;
  }
);

export const GraphQLTodo = new GraphQLObjectType({
  name: "Todo",
  fields: {
    id: globalIdField("Todo"),
    title: {
      type: GraphQLString,
    },
    completed: {
      type: GraphQLBoolean,
    },
  },
  interfaces: [nodeInterface],
});

export const {
  connectionType: TodosConnection,
  edgeType: GraphQLTodoEdge,
} = connectionDefinitions({
  name: "Todo",
  nodeType: GraphQLTodo,
});

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "world!!";
      },
    },
    todos: {
      type: TodosConnection,
      args: {
        status: {
          type: GraphQLString,
          defaultValue: "any",
        },
        ...connectionArgs,
      },
      resolve: (root, { status, after, before, first, last }) =>
        connectionFromArray([...getTodos(status)], {
          after,
          before,
          first,
          last,
        }),
    },
    node: nodeField,
  },
});

export default queryType;
