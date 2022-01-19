import { Action, createReducer, on } from "@ngrx/store";
import { generateGuid } from "src/app/helpers/generate-guid";
import { AppActions } from "../actions/app.action";
export interface IUser{
    userId: string;
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    city: string;
}

export interface IUserList {
    userList: IUser[],
    dashboardData: IDashboardGraph;
}

export interface IDashboardGraph{
    budget: number;
    totalUsers: number;
    progress: number;
    totalProfit: number;
}
export const initialState: IUserList = {
    userList: [
        {userId: generateGuid(), firstName: "Ivan", lastName: "Ivanov", nickname: "SampleUser", email: "sampleuser1@mail.com", password:"Cardlord231202!", phone: "+380980954256", country: "Ukraine", city: "Vinnytsia"}
    ],
    dashboardData: {
        budget: 24000,
        totalUsers: 1600,
        progress: 75.5,
        totalProfit: 23200
    }
}

const appReducer = createReducer(
    initialState,
    on(AppActions.registerUser, (state, { firstName, lastName, email, password }) => {
        const newUserList: IUser = {userId: generateGuid(), firstName, lastName, nickname: "Guest", email, password, phone: "Unknown",country: "Unknown", city: "Unknown"};
        return {...state, userList: [...state.userList, newUserList]};
      })
)

export function AppReducer(state: IUserList | undefined, action: Action) {
    return appReducer(state, action)
}