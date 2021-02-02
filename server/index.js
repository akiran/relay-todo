import express from "express";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

var app = express();
app.use(morgan("combined"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
    customFormatErrorFn: (e) => console.log(e),
  })
);
app.listen(4000);
