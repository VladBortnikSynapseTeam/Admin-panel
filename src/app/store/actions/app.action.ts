import { createAction, props } from "@ngrx/store";

export namespace AppActions {
    export const registerUser = createAction("REGISTER_USER", props<{firstName:string, lastName: string, email: string, password: string}>())
    export const loginUser = createAction("LOGIN_USER", props<{email: string, password: string}>())
}