import { createContext, useReducer } from "react";

const authContext = createContext(null)
/* const {Provider} = authContext  */

type stateType = {
	name:string,
	email:string,
	img:string,
	token:string
}
export const AuthProvider = ({children}) => {


  const initialState:stateType = {
		name:"",
    email:"",
		img:"",
		token:""
	}
	const userReducer = (state: stateType, action: any) => {
		switch (action.type) {
			case "LOGIN-CREDENTIALS":
				const { name, email, img, token} = action.data
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
	const [userState, dispatchUser] = useReducer(userReducer, initialState)
	const contextValue = {userState,dispatchUser}
	

	return (
		<authContext.Provider value={contextValue} >
		  {children}
		</authContext.Provider>
	)
}
