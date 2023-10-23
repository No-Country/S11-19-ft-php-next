"use client";
import { useState, useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
import "./styles.register.css";
import Image from "next/image";
import registerFooter from "../../assets/registerFooter2.jpg";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	Input as InputVali,
	ValiError,
	email,
	minLength,
	object,
	parse,
	required,
	string,
	custom,
} from "valibot";
import { Input } from "./Input";
import { AuthContext } from "@/components/authcontext";
import Logo from "../../assets/brandLogo.jpg"

/* type inputState = {
	value: string;
	isError: boolean;
	blured: boolean;
	valid: boolean;
}; */

const LoginSchema = object({
	email: string([email("email no valido")]),
	password: string([minLength(6, "minimo 6 caracteres")]),
});

export default function Register() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState,
		getValues,
		setError,

		formState: { errors, isSubmitted },
	} = useForm({
		resolver: valibotResolver(LoginSchema),

		defaultValues: {
			email: "",
			password: "",
		},
	});

	const {userState, dispatchUser} = useContext(AuthContext)
	//console.log("userState: ", userState)
	//console.log("dispatch: ", dispatchUser)

	/* const {user, handleUser} = useContext(AuthContext)
	console.log("user: ", user) */

	const onSubmit: SubmitHandler<InputVali<typeof LoginSchema>> = (data) => {
		console.log("data de onSubmit",data);
		
		const dataMocked = {
			name:"Pepe",
			email:formState.email,
			img:"ede",
			token:"1223eijfiri"
		}
		/* const URL = "../src/app/login/data.json" */
		
    /* fetch(URL)
		.then(res =>res.json())
		.then(data => {
			console.log("data en then: ", data)
			if (data) {
				dispatchUser({
					type:"LOGIN-CREDENTIALS", 
					payload: data
				})
				console.log("ESTADO EN THEN: ", userState )
				redirect("/plants")
			}
			
		}) */
		async function getUser() {

			try{
				const URL = "./data.json"
				const response = await fetch(URL)
				const data = await response.json()
				console.log("data en getUser: ", data)
				if (data) {
					await dispatchUser({
						type:"LOGIN-CREDENTIALS", 
						payload: data
					})
					console.log("ESTADO EN THEN: ", userState )
					/* redirect("/plants") */
					router.push("/plants")
				}
			}catch(err) {console.log(err)}
		}

		getUser()

		/* handleUser(dataMocked) */
		console.log("STATE: ", formState.errors)
		
	};
	// useEffect( () => {
	// 	/* const URL = "../src/app/login/data.json" */
	// 	const URL = "./data.json"
  //   fetch(URL)
	// 	.then(res =>res.json())
	// 	.then(data => console.log("data: ", data))
	// },[] )

	
	return (
		<section className="flex flex-row">
			<div className="bg-[#104938] hidden lg:flex lg:flex-col w-1/2 text-[#FFF] font-Poppins font-medium italic pt-[12%]  items-center">
				<Image src={Logo} alt="logo de Garden Wise" className="pb-[2em] w-[15.5em] h-[auto]  "/>
				<p>Donde la Naturaleza y la Tecnología Se Unen</p>
			</div>
			<div className="flex flex-col w-full lg:w-1/2 registerBgImg">
				{/* <Image src={registerTop} className="w-[8em]" alt="plant image"/> */}
				<h1 className="text-center text-4xl font-Poppins font-medium mt-16 mb-24  text-[#61B78E]">
					Iniciar sesión
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center items-center w-full pt-2 pb-2"
				>
					<Input
						placeholder="Email"
						label="Email"
						inputName="email"
						/* className="max-w-[90%]" */
						register={register}
						name="email"
						isError={!!errors.email}
						messageError={errors.email?.message}
					/>
					<Input
						placeholder="Contraseña"
						label="Contraseña"
						inputName="password"
						/* className="max-w-[90%]" */
						register={register}
						name="password"
						isError={!!errors.password}
						messageError={errors.password?.message}
					/>
					<button
						className=" w-72 h-10 max-w-[80vw] border-2 bg-[#104938] text-[white] rounded-[50px] mt-5 "
						type="submit"
					>
						Enviar
					</button>
				</form>
				<Image src={registerFooter} className="w-full pt-2" alt="plant image" />
			</div>
		</section>
	);
}
