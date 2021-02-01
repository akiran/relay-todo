import { GraphQLSchema } from "graphql";

import queryType from "./queryType";
import mutationType from "./mutationType";

var schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export default schema;
