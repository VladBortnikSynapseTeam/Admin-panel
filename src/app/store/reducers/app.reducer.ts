import { Action, createReducer, on } from "@ngrx/store";
import { generateGuid } from "src/app/helpers/generate-guid";
import { AppActions } from "../actions/app.action";
export interface IUser{
    userId: string;
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    phone: string;
    country: string;
    city: string;
}

export interface IUserList {
    userList: IUser[]
}

export const initialState: IUserList = {
    userList: [
        {userId: generateGuid(), firstName: "Ivan", lastName: "Ivanov", nickname: "SampleUser", email: "sampleuser1@mail.com", phone: "+380980954256", country: "Ukraine", city: "Vinnytsia"}
    ]
}

const appReducer = createReducer(
    initialState,
    
)

export function AppReducer(state: IUserList | undefined, action: Action) {
    return appReducer(state, action)
}