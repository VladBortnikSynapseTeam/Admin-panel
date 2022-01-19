import { createFeatureSelector,createSelector } from "@ngrx/store";
import { IDashboardGraph, IUserList } from "../reducers/app.reducer";

export namespace AppSelectors {
    export const state = createFeatureSelector<IUserList>('app');
    export const userList = createSelector(state, (state)=>{state.userList})
    export const dashboardData = createSelector(state, (state)=>{state.dashboardData})
}