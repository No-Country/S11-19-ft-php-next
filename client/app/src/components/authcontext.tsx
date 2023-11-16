"use client"
import {  createContext, ReactNode, useCallback, useContext, useMemo, useState} from "react";
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import axios from "axios";


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
		const cookieUser = getCookie("garden-wise-auth")
		if (localStorageData) {
			userFromLs = JSON.parse(localStorageData)
			//La cookie tiene que tener max-age para que el blowser no la borre a cerrar ventana
			// Borro en cada inicio, borra cookie vieja y setea una nueva.
			//en local hay error con el atributo SemeSite porque el atributo secure solo puede ser usado por sitio https
			deleteCookie("garden-wise-auth")
			setCookie("garden-wise-auth", userFromLs.token, { maxAge: 60*60*24*365, sameSite: "none", secure:true});
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

	const logOutUser =useCallback( async ( router:any) => {
		
        try{
			
					const response = await axios.post("https://garden-wise-app.fly.dev/api/logout/","", {
						headers: {
							"Content-Type": "application/json",
							"Authorization":`Bearer ${userState.token}`
						}
					})
					const data = await response.data
						if (data) {
							localStorage.removeItem("garden-wise-user")
							deleteCookie("garden-wise-auth");
							setUserState ({
								...userState, 
								name:"",
								lastname:"",
								email:"",
								img:"",
								token:"",
								id:null
							})
						}
						/* localStorage.removeItem("garden-wise-user")
						deleteCookie("garden-wise-auth");
						setUserState ({
							...userState, 
							name:"",
							lastname:"",
							email:"",
							img:"",
							token:"",
							id:null
						}) */
				

					
					router.push("/login")
				} catch(err:any){
					console.log(err.message)
				}
	},[userState])
	
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



