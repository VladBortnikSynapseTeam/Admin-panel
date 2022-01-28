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
    avatarURL: string;
    createdDate: Date;
}
export interface IUserList {
    userList: IUser[];
    dashboardData: IDashboardGraph;
    products: IProductList[];
    currentUser: any,
    notifications: INotifications;
}

export interface INotifications{
    notificationsEmail: boolean,
    notificationsPush: boolean,
    notificationsText: boolean,
    notificationsPhone: boolean,
    messagesEmail: boolean,
    messagesPush: boolean,
    messagesText: boolean,
}

export interface IProductList {
    imgUrl: string;
    title: string;
    text: string;
}

export interface IDashboardGraph{
    budget: number;
    totalUsers: number;
    progress: number;
    totalProfit: number;
}
export const initialState: IUserList = {
    userList: [
        {
            userId: generateGuid(), 
            firstName: "Ivan",
            lastName: "Ivanov",
            nickname: "SampleUser",
            email: "user@mail.com",
            password:"Cardlord231202!",
            phone: "0980954256",
            country: "Ukraine",
            city: "Vinnytsia",
            avatarURL:"../../../../../assets/no-avatar.png",
            createdDate: new Date()
        }
    ],
    dashboardData: {
        budget: 24000,
        totalUsers: 1600,
        progress: 75.5,
        totalProfit: 23200
    },
    products: [
        {
            imgUrl: "../../../../../assets/products/dropbox.svg",
            title: "Dropbox",
            text: "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud."
        },
        {
            imgUrl: "../../../../../assets/products/medium.svg",
            title: "Medium Corporation",
            text: "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012."
        },
        {
            imgUrl: "../../../../../assets/products/stack.svg",
            title: "Slack",
            text: "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield."
        },
        {
            imgUrl: "../../../../../assets/products/lyft.svg",
            title: "Lyft",
            text: "Lyft is an on-demand transportation company based in San Francisco, California."
        },
        {
            imgUrl: "../../../../../assets/products/git.svg",
            title: "GitHub",
            text: "GitHub is a web-based hosting service for version control of code using Git."
        },
        {
            imgUrl: "../../../../../assets/products/squarespace.svg",
            title: "Squarespace",
            text: "Squarespace provides software as a service for website building and hosting. Headquartered in NYC."
        },
        
    ],
    currentUser: {},
    notifications: {
        notificationsEmail: false,
        notificationsPush: false,
        notificationsText: false,
        notificationsPhone: false,
        messagesEmail: false,
        messagesPush: false,
        messagesText: false,
    }
}

const appReducer = createReducer(
    initialState,
    on(AppActions.registerUser, (state, { firstName, lastName, email, password }) => {
        const newUserList: IUser = {
            userId: generateGuid(),
            firstName,
            lastName,
            nickname: "Guest",
            email,
            password,
            phone: "Unknown",
            country: "Unknown",
            city: "Unknown",
            avatarURL:"../../../../../assets/no-avatar.png",
            createdDate: new Date()
        };
        return {...state, userList: [...state.userList, newUserList],currentUser: newUserList};
      }),
    on(AppActions.loginUser, (state, {user})=>{
        return {...state, currentUser: user}
    }),
    on(AppActions.logOut, state => {
        return {...state, currentUser: {}}
    }),
    on(AppActions.changeAvatar, (state, {imgPath})=>{
        return {
            ...state,
            userList: state.userList.map(user => user.userId === state.currentUser.userId ? {...user, avatarURL: `../../../../../assets/${imgPath}`}: user),
            currentUser: {...state.currentUser, avatarURL: `../../../../../assets/${imgPath}`} 
        }
    }),
    on(AppActions.removeAvatar, state => {
        return{
                ...state,
                userList: state.userList.map(user => user.userId === state.currentUser.userId ? {...user, avatarURL: "../../../../../assets/no-avatar.png"}: user),
                currentUser: {...state.currentUser, avatarURL: "../../../../../assets/no-avatar.png"} 
        }
    }),
    on(AppActions.editNotifications, (state,{
        notificationsEmail,
        notificationsPush,
        notificationsText,
        notificationsPhone,
        messagesEmail,
        messagesPush,
        messagesText,
    }) => {
        return{
            ...state,
            notifications: {
                notificationsEmail,
                notificationsPush,
                notificationsText,
                notificationsPhone,
                messagesEmail,
                messagesPush,
                messagesText,
            }
        }
    }),
    on(AppActions.editUserInfo, (state,{
        firstName,
        lastName,
        email,
        phone,
        country,
        city}) => {
            return {
                ...state,
                userList: state.userList.map(user => user.userId === state.currentUser.userId ? {
                    ...user, 
                    firstName, 
                    lastName, 
                    email, 
                    phone, 
                    country,
                    city
                }: user),
                currentUser: {...state.currentUser, 
                    firstName, 
                    lastName, 
                    email, 
                    phone, 
                    country,
                    city
                } 
            }
        }),
    on(AppActions.addUser, (state, {firstName,lastName,nickname,email,phone,userId,country,city})=>{
        let newUser: IUser;
        if(userId == ""){
            newUser = {
                userId: generateGuid(),
                firstName,
                lastName,
                nickname,
                email,
                password: "Cardlord231202!",
                phone,
                country,
                city,
                avatarURL:"../../../../../assets/no-avatar.png",
                createdDate: new Date()
            }
        }else{
            newUser = {
                userId,
                firstName,
                lastName,
                nickname,
                email,
                password: "Cardlord231202!",
                phone,
                country,
                city,
                avatarURL:"../../../../../assets/no-avatar.png",
                createdDate: new Date()
            }
        }
        
        return {...state, userList: [...state.userList, newUser]};
    }),
    on(AppActions.editUser, (state, {firstName,lastName,nickname,email,phone,userId,country,city})=>{
        return {...state, userList: state.userList.map(user => user.userId === userId ? {
            ...user,
            userId, 
            firstName, 
            lastName,
            nickname, 
            email, 
            phone, 
            country,
            city
        }: user)
        };
    })
    
)

export function AppReducer(state: IUserList | undefined, action: Action) {
    return appReducer(state, action)
}