import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
