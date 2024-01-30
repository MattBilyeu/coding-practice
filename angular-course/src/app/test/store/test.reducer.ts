import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./test.actions";


const initialState = 0;

export const testReducer = createReducer(
    initialState,
    on(decrement, (state, action) => state - action.value),
    on(increment, (state, action) => state + action.value)
);