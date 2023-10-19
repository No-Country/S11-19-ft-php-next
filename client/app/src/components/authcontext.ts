import { createContext, useReducer } from "react";

const authContext = createContext(null)
/* const {Provider} = authContext  */

export const AuthProvider = ({children}) => {

  const initialState = {
		userName:"",
    userEmail:"",
		userImg:"",
		token:""
	}
	const useReducer = () => {
		switch (userState)
	}
	const [userState, userReducer] = useReducer(initialState)

	return (
		<authContext.Provider>
		  {children}
		</authContext.Provider>
	)
}
