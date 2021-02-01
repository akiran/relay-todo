/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Todo_Query$ref = any;
export type Todos_QueryVariables = {||};
export type Todos_QueryResponse = {|
  +todos: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: Todo_Query$ref,
  |}>
|};
export type Todos_Query = {|
  variables: Todos_QueryVariables,
  response: Todos_QueryResponse,
|};
*/


/*
query Todos_Query {
  todos {
    id
    ...Todo_Query
  }
}

fragment Todo_Query on Todo {
  id
  title
  completed
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Todos_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Todo_Query"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Todos_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3af90c810e219290b5f0afc2bc8a4c2b",
    "id": null,
    "metadata": {},
    "name": "Todos_Query",
    "operationKind": "query",
    "text": "query Todos_Query {\n  todos {\n    id\n    ...Todo_Query\n  }\n}\n\nfragment Todo_Query on Todo {\n  id\n  title\n  completed\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1cb54401d257f40d6ed514a2a69ef040';

module.exports = node;
