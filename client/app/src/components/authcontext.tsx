
"use client"
import {  createContext, useReducer,  ReactNode, useState, use,} from "react";

const initialState:stateType = {
	name:"",
	email:"",
	img:"",
	token:""
}
export const AuthContext = createContext(initialState)

type stateType = {
	name:string,
	email:string,
	img:string,
	token:string
}

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
	

type actionType = {
	type:string,
	payload:stateType
}

	const authReducer = (state: stateType, action: actionType) => {
		//console.log("en authReducer", action)
		switch (action.type) {
			case "LOGIN-CREDENTIALS":
				const { name, email, img, token} = action.payload
				console.log("EN REDUCTOR, user: ", email)
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
		}
	}
	const [userState, dispatchUser] = useReducer(authReducer, initialState)
	const contextValue = {userState, dispatchUser}


	/* const [user, setUser] = useState(initialState)
	const handleUser = (dataMocked) => {
    setUser({...user, name:dataMocked.name, email:dataMocked.email, img:"", token:dataMocked.token})
	}
	const contextValue = {user, handleUser}  */

	/* return <AuthContext.Provider value="dark">{children}</AuthContext.Provider>  */
	return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
}

