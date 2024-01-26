import { Action, createAction, props } from "@ngrx/store";

export const INCREMENT = '[Counter] Increment';

export const DECREMENT = '[Counter] Decrement';

export const INIT = '[Counter] Init';

export const SET = '[Counter] Set';

export const init = createAction(
    INIT,
);

export const set = createAction(
    SET,
    props<{value: number}>()
)

export const increment = createAction(
    INCREMENT,
    props<{value: number}>()
);

export const decrement = createAction(
    DECREMENT,
    props<{value: number}>()
)

// export class IncrementAction implements Action {
//     readonly type: string = INCREMENT;

//     constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;