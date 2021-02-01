import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
} from "graphql";

const todos = [
  { id: "1", title: "Learn relay", completed: false },
  { id: "2", title: "Learn nextjs", completed: true },
];

function getTodo(id) {
  return todos.find((todo) => todo.id === id);
}

const Todo = new GraphQLObjectType({
  name: "Todo",
  fields: {
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    completed: {
      type: GraphQLBoolean,
    },
  },
});

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
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
          return todos;
        },
      },
    },
  }),
});

export default schema;
