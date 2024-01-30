import { createAction, props } from "@ngrx/store";

export const TEST_INCREMENT = '[Test] Increment';

export const TEST_DECREMENT = '[Test] Decrement';

export const increment = createAction(
    TEST_INCREMENT,
    props<{value: number}>()
)

export const decrement = createAction(
    TEST_DECREMENT,
    props<{value: number}>()
)