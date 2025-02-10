import { createAction, createReducer, createSelector, on } from "@ngrx/store";

export const nkvAction = createAction('test');

export const nkvReducer = createReducer({
    order: {},
    preorder: {},
    items: {},
},
on(nkvAction, (store: any) => ({...store, order: [1,2,3,4]})));

export const nkvSelector = createSelector((state) => state, state => state);
