"use client"
import {  createContext, ReactNode, useCallback, useContext, useMemo, useState} from "react";

type stateType = {
	name:string,
	email:string,
	img:string,
	token:string,
	id:number | null
}

type contextType = {
	userState:stateType,
	loginUser:()=>{}
}




export const AuthContext = createContext<any>(null)


export const AuthContextProvider = ({children}: {children: ReactNode}) => {
	
	/* const initialState:stateType = {
		name:"",
		email:"",
		img:"",
		token:"",
		id:null
	} */
	

/* type actionType = {
	type:string,
	payload?:stateType 
} */

const initialState:stateType = useMemo(
	() => ({
		name:"",
	email:"",
	img:"",
	token:"",
	id:null
	}),
	[]
);

/* let initialUserState:stateType | null;
	if (typeof window !== 'undefined') {
		const localStorageData = window.localStorage.getItem("garden-wise-user")
		if (localStorageData) {
			initialUserState = JSON.parse(localStorageData)
		  console.log("initialUserState en profile: ",initialUserState)
	  }
	} else {
		initialUserState = initialState
		console.log("no token")
	} */
	const localStorageData = window.localStorage.getItem("garden-wise-user")


  const [userState, setUserState] = useState(localStorageData === null
		? null
		: JSON.parse(localStorageData))
/* 	const [name, setName] = useState("")
	const [email,setEmail] = useState("")
	const [img,setImg] = useState("")
	const [token,setToken] = useState("")
	const [id,setId] = useState("") */

  const loginUser =useCallback( (user:stateType) => {
		console.log("ejecuta loginUser")
		const { name, email, img, token, id} = user
				console.log("loginUser, user: ", user)
				setUserState ({
					...userState, 
					name:name,
          email:email,
					img:img,
					token:token,
					id:id
				})
				localStorage.setItem("garden-wise-user", JSON.stringify(user))
	},[])
	
	/* const contextValue = {userState, loginUser} */
	const contextValue = useMemo(
    () => ({
      loginUser,
      userState,
    }),
    [userState, loginUser]
  );
	console.log("data en CONTEXT: ", userState)

	return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
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

