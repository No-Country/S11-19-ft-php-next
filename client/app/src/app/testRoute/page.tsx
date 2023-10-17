"use client"
import { useState } from "react";
import InputEmail from "./InputEmail";
/* import { email, minLength, object, type Output, parse, string } from 'valibot' */
import "./styles.testRoute.css";
import { handleBlur, handleChange } from "./handlers";

export default function TestRoute() {
	type inputState = {
		value:string,
		isError:boolean,
		blured:boolean,
		valid:boolean
	}
	const initialState = {
		value:'',
		isError:false,
		blured:false,
		valid:false
	}
	const [name, setName] = useState(initialState)
	const [inputEmail, setInputEmail] = useState(initialState)
	const [password, setPassword] = useState(initialState)
	const [repitedPassword, setRepitedPassword] = useState(initialState)



	

	/* const LoginSchema = object({
		email: string([email()]),
		password: string([minLength(8)]),
	}); */
	console.log("email: ", inputEmail)

	
	const handleSubmit = (e:React.SyntheticEvent) => {
		e.preventDefault();
	}
	return (
		<>
		<h1 className="text-center text-4xl font-Poppins font-medium pt-14 pb-14 text-[#61B78E]">Registrarse</h1>
			<form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
			<InputEmail 
				  placeholder="Nombre y Apellido" 
					input={name} 
					inputName="name"
					setInput={setName} 
					handleChange={(e)=>handleChange(e, "name", name, setName)}
					handleBlur={(e)=>handleBlur(e, "name", name, setName)}
					className="max-w-[90%]"
				/>
				<InputEmail 
				  placeholder="Email" 
					input={inputEmail} 
					inputName="email"
					setInput={setInputEmail} 
					handleChange={(e)=>handleChange(e, "email", inputEmail, setInputEmail)}
					handleBlur={(e)=>handleBlur(e, "email", inputEmail, setInputEmail)}
					className="max-w-[90%]"
				/>
				<InputEmail 
				  placeholder="Contraseña" 
					input={password} 
					inputName="password"
					setInput={setPassword} 
					handleChange={(e)=>handleChange(e, "password", password, setPassword)}
					className="max-w-[90%]"
				/>
				<InputEmail 
				  placeholder="Repetir Contraseña" 
					input={repitedPassword} 
					inputName="repitedPassword"
					setInput={setRepitedPassword} 
					handleChange={(e)=>handleChange(e, "repitedPassword", repitedPassword, setRepitedPassword)}
					className="max-w-[90%]"
				/>
				<button className="w-80 lg:w-96 h-12 max-w-[80vw] border-2 bg-[#104938] text-[white] rounded-[50px] " type="submit">Enviar</button>
			</form>
		</>
	);
}
