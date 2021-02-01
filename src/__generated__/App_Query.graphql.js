/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type App_QueryVariables = {||};
export type App_QueryResponse = {|
  +hello: ?string
|};
export type App_Query = {|
  variables: App_QueryVariables,
  response: App_QueryResponse,
|};
*/


/*
query App_Query {
  hello
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "App_Query",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "App_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5c63db4a86abc0b1749bb7ff8279cad3",
    "id": null,
    "metadata": {},
    "name": "App_Query",
    "operationKind": "query",
    "text": "query App_Query {\n  hello\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46afade86a286968438f33de24bb6a84';

module.exports = node;
