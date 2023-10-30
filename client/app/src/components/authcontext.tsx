
"use client"
import {  createContext, useReducer,  ReactNode, useState, use,} from "react";

type stateType = {
	name:string,
	email:string,
	img:string,
	token:string
}

type contextType = {
	userState:stateType,
	dispatchUser:(user:stateType) => void
}
export const AuthContext = createContext<contextType | null>(null)


export const AuthContextProvider = ({children}: {children: ReactNode}) => {
	
	const initialState:stateType = {
		name:"",
		email:"",
		img:"",
		token:""
	}

type actionType = {
	type:string,
	payload?:stateType 
}

	const authReducer = (state: stateType, action: actionType) => {
		switch (action.type) {
			case "LOGIN-CREDENTIALS":
				const { name, email, img, token} = action.payload!
				console.log("EN REDUCTOR, user: ", state)
				return {
					...state, 
					name:name,
          email:email,
					img:img,
					token:token
				}
				case "LOG-OUT":
					return {
						...state, 
						name:"",
						email:"",
						img:"",
						token:""
					}
				default: return { ...state}
		}
	}
	const [userState, dispatchUser] = useReducer<any>(authReducer, initialState)
	const contextValue = {userState, dispatchUser}

	return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
}

