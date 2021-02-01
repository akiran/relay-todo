import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
} from "graphql";

export const Todo = new GraphQLObjectType({
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
