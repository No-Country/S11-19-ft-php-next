"use client"
import {  createContext, ReactNode, useState} from "react";

type stateType = {
	name:string,
	email:string,
	img:string,
	token:string
}

type contextType = {
	userState:stateType,
	loginUser:()=>{}
}
export const AuthContext = createContext<any>(null)


export const AuthContextProvider = ({children}: {children: ReactNode}) => {
	
	const initialState:stateType = {
		name:"",
		email:"",
		img:"",
		token:""
	}

/* type actionType = {
	type:string,
	payload?:stateType 
} */
  const [userState, setUserState] = useState(initialState)
  const loginUser = (user:stateType) => {
		const { name, email, img, token} = user
				console.log("loginUser, user: ", user)
				setUserState ({
					...userState, 
					name:name,
          email:email,
					img:img,
					token:token
				})
				localStorage.setItem("garden-wise-user", JSON.stringify(user))
	}
	
	const contextValue = {userState, loginUser}

	return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
}




// "use client"
// import {  createContext, useReducer,  ReactNode, useState, use, Dispatch,} from "react";

// type stateType = {
// 	name:string,
// 	email:string,
// 	img:string,
// 	token:string
// }

// /* type contextType = {
// 	userState:stateType,
// 	dispatchUser:(user:stateType) => void
// } */
// /* type contextType = {
// 	userState:stateType,
// 	dispatchUser:Dispatch<action>
// } */
// export const AuthContext = createContext<any>(null)


// export const AuthContextProvider = ({children}: {children: ReactNode}) => {
	
// 	const initialState:stateType = {
// 		name:"",
// 		email:"",
// 		img:"",
// 		token:""
// 	}

// type actionType = {
// 	type:string,
// 	payload?:stateType 
// }

// 	const authReducer = (state: stateType, action: actionType) => {
// 		switch (action.type) {
// 			case "LOGIN-CREDENTIALS":
// 				const { name, email, img, token} = action.payload!
// 				console.log("EN REDUCTOR, user: ", state)
// 				return {
// 					...state, 
// 					name:name,
//           email:email,
// 					img:img,
// 					token:token
// 				}
// 				case "LOG-OUT":
// 					return {
// 						...state, 
// 						name:"",
// 						email:"",
// 						img:"",
// 						token:""
// 					}
// 				default: return { ...state}
// 		}
// 	}
// 	const [userState, dispatchUser] = useReducer<any>(authReducer, initialState)
// 	const contextValue = {userState, dispatchUser}
//   console.log("userState en context: ", userState)
// 	return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
// }

