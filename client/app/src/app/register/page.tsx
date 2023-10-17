"use client"
import { useState } from "react";
import InputEmail from "./InputEmail";
/* import { email, minLength, object, type Output, parse, string } from 'valibot' */
import "./styles.testRoute.css";
import { handleBlur, handleChange } from "./handlers";
import Image from "next/image";
import registerFooter from "../../assets/registerFooter2.jpg"
import registerTop from "../../assets/registerTop.png"

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
		<section className="flex flex-row">
			{/* color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: italic;
font-weight: 500;
line-height: normal; */}
		<div className="bg-[#104938] hidden lg:flex w-1/2 text-[#FFF] font-Poppins font-medium italic flex-col justify-center items-center ">
			<p>Logo</p>
      <p>Donde la Naturaleza y la Tecnología Se Unen</p>
		</div>
		<div className="flex flex-col w-1/2 registerBgImg">
			{/* <Image src={registerTop} className="w-[8em]" alt="plant image"/> */}
			<h1 className="text-center text-4xl font-Poppins font-medium pt-16  pb-14 text-[#61B78E]">Registrarse</h1>
			<form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
				<InputEmail 
					placeholder="Nombre y Apellido"
					label="Nombre y Apellido" 
					input={name} 
					inputName="name"
					setInput={setName} 
					handleChange={(e)=>handleChange(e, "name", name, setName)}
					handleBlur={(e)=>handleBlur(e, "name", name, setName)}
					className="max-w-[90%]"
					/>
				<InputEmail 
				  placeholder="Email" 
					label="Email"
					input={inputEmail} 
					inputName="email"
					setInput={setInputEmail} 
					handleChange={(e)=>handleChange(e, "email", inputEmail, setInputEmail)}
					handleBlur={(e)=>handleBlur(e, "email", inputEmail, setInputEmail)}
					className="max-w-[90%]"
				/>
				<InputEmail 
				  placeholder="Contraseña" 
					label="Contraseña"
					input={password} 
					inputName="password"
					setInput={setPassword} 
					handleChange={(e)=>handleChange(e, "password", password, setPassword)}
					className="max-w-[90%]"
				/>
				<InputEmail 
				  placeholder="Repetir Contraseña" 
					label="Repetir Contraseña"
					input={repitedPassword} 
					inputName="repitedPassword"
					setInput={setRepitedPassword} 
					handleChange={(e)=>handleChange(e, "repitedPassword", repitedPassword, setRepitedPassword)}
					className="max-w-[90%]"
				/>
				<button 
				  className=" w-72 lg:w-80 h-11 max-w-[80vw] border-2 bg-[#104938] text-[white] rounded-[50px] " 
					type="submit"
				>
					Enviar
				</button>
			</form>
			<Image src={registerFooter} className="w-full" alt="plant image"/>
		</div>
		</section>
	);
}
