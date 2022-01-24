import { createAction, props } from "@ngrx/store";
import { IUser } from "../reducers/app.reducer";

export namespace AppActions {
    export const registerUser = createAction("REGISTER_USER", props<{firstName:string, lastName: string, email: string, password: string}>())
    export const loginUser = createAction("LOGIN_USER", props<{user: IUser}>())
    export const logOut = createAction("LOG_OUT")
}