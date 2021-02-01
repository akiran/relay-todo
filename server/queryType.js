import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from "graphql";
import { getTodos, getTodo } from "./helpers";
import { Todo } from "./types";

const queryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "world!!";
      },
    },
    todo: {
      type: Todo,
      args: {
        id: { type: GraphQLID },
      },
      resolve(_, args) {
        return getTodo(args.id);
      },
    },
    todos: {
      type: new GraphQLList(Todo),
      resolve() {
        return getTodos();
      },
    },
  },
});

export default queryType;
