/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Todo_Query$ref: FragmentReference;
declare export opaque type Todo_Query$fragmentType: Todo_Query$ref;
export type Todo_Query = {|
  +id: string,
  +title: ?string,
  +completed: ?boolean,
  +$refType: Todo_Query$ref,
|};
export type Todo_Query$data = Todo_Query;
export type Todo_Query$key = {
  +$data?: Todo_Query$data,
  +$fragmentRefs: Todo_Query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_Query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
  "type": "Todo",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '895e3b05de464f78d28fc6dcdbb41c26';

module.exports = node;
