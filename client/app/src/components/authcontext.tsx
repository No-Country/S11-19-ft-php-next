"use client"
import {  createContext, ReactNode, useCallback, useContext, useMemo, useState} from "react";
import { deleteCookie, getCookie } from 'cookies-next'
import { getCookies } from 'cookies-next';


type stateType = {
	name:string,
	lastname:string,
	email:string,
	img:string,
	token:string,
	id:number | null
}

type contextType = {
	userState:stateType,
	loginUser:()=>{},
	logOutUser:()=>{}
}

export const AuthContext = createContext<any>(null)

export const AuthContextProvider = ({children}: {children: ReactNode}) => {

const initialState:stateType = useMemo(
	() => ({
	name:"",
	lastname:"",
	email:"",
	img:"",
	token:"",
	id:null
	}),
	[]
);

	let userFromLs;
	if (typeof window !== 'undefined') {
		const localStorageData = window.localStorage.getItem("garden-wise-user")
		if (localStorageData) {
			userFromLs = JSON.parse(localStorageData)
	  }
	}

  const [userState, setUserState] = useState(userFromLs === null
		? null
		: userFromLs)

  const loginUser =useCallback( (user:stateType) => {
		const { name, lastname ,email, img, token, id} = user
				setUserState ({
					...userState, 
					name:name,
					lastname:lastname,
          email:email,
					img:img,
					token:token,
					id:id
				})
				localStorage.setItem("garden-wise-user", JSON.stringify(user))
	},[])

	const logOutUser =useCallback( (redirect:any) => {
		
		/* const { name,lastname, email, img, token, id} = user */
        try{
					setUserState ({
						...userState, 
						name:"",
						lastname:"",
						email:"",
						img:"",
						token:"",
						id:null
					})
					localStorage.removeItem("garden-wise-user")
					console.log("logOutUser")
					console.log("COOKIE: ",getCookie("garden-wise-auth"));
					deleteCookie("garden-wise-auth");
          console.log("ALL COOKIES: ",getCookies())
					//cambiar domain for deploy
					redirect()
				} catch(err:any){
					console.log(err.message)
				}
	},[])
	
	const contextValue = useMemo(
    () => ({
      loginUser,
			logOutUser,
      userState,
    }),
    [userState, loginUser, logOutUser]
  );

	return <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}



