import { createAction, createReducer, on } from "@ngrx/store";

export const nkvAction = createAction('test');

export const nkvReducer = createReducer({
    order: {},
    preorder: {},
    items: {},
},
on(nkvAction, (store) => ({...store, order: [1,2,3,4]})));

