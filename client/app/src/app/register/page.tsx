"use client";
import { useState } from "react";
import "./styles.register.css";
import Image from "next/image";
import registerFooter from "../../assets/registerFooter2.jpg";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	Input as InputVali,
	email,
	minLength,
	object,
	required,
	string,
	custom,
} from "valibot";
import { Input } from "./Input";
import Logo from "../../assets/brandLogo.jpg"
import Link from "next/link";

/* type inputState = {
	value: string;
	isError: boolean;
	blured: boolean;
	valid: boolean;
}; */

const RegisterSchema = object({
	name: string([minLength(3, "minimo 3 caracteres")]),
	email: string([email("email no valido")]),
	password: string([minLength(6, "minimo 6 caracteres")]),
	repitedPassword: string([minLength(6, "minimo 6 caracteres")]),
});

export default function Register() {
	const {
		register,
		handleSubmit,
		formState,
		getValues,
		setError,

		formState: { errors, isSubmitted },
	} = useForm({
		resolver: valibotResolver(RegisterSchema),

		defaultValues: {
			name: "",
			email: "",
			password: "",
			repitedPassword: "",
		},
	});


	const onSubmit: SubmitHandler<InputVali<typeof RegisterSchema>> = (data) => {
		if (data.password !== data.repitedPassword ) {
			setError("repitedPassword", {
				message: "Las contraseñas no coinciden",
			})
			return
		}
		const {name, email, password} = data
		const bodyData = JSON.stringify({
				name:name,
				/* lastName:lastName */
				email:email,
				password: password
			})
		//const {userData, loading, error} = useRegister(bodyData)
		/* if (user) {  // 
      const user = {
				name: userData.user.name,
				email:userData.user.email,
				img:userData.user.img,
				token:userData.token
			}
			await dispatchUser({
				type:"LOGIN-CREDENTIALS", 
				payload: user
			})
			console.log("ESTADO EN THEN: ", userState )
			router.push("/plants")
		} */
	};

	const onInvalid: SubmitHandler<InputVali<typeof RegisterSchema>> = (error) => {
		//console.log("data",error);
		if (error.password !== error.repitedPassword || error.repitedPassword.length < 6) {
			setError("repitedPassword", {
				message: "Las contraseñas no coinciden",
			})
		}
	};


	return (
		<section className="flex flex-row">
			<div className="bg-[#104938] hidden lg:flex lg:flex-col w-1/2 text-[#FFF] font-Poppins font-medium italic pt-[12%]  items-center">
				<Image src={Logo} alt="logo de Garden Wise" className="pb-[2em] w-[15.5em] h-[auto]" />
				<p>Donde la Naturaleza y la Tecnología Se Unen</p>
			</div>
			<div className="flex flex-col w-full lg:w-1/2 registerBgImg">
				<h1 className="text-center text-4xl font-Poppins font-medium pt-16  pb-14 text-[#61B78E]">
					Registrarse
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center items-center w-full"
				>
					<Input
						placeholder="Nombre y Apellido"
						label="Nombre y Apellido"
						inputName="name"
						register={register}
						name="name"
						isError={!!errors.name}
						messageError={errors.name?.message}
					/>
					<Input
						placeholder="Email"
						label="Email"
						inputName="email"
						register={register}
						name="email"
						isError={!!errors.email}
						messageError={errors.email?.message}
					/>
					<Input
						placeholder="Contraseña"
						label="Contraseña"
						inputName="password"
						register={register}
						name="password"
						isError={!!errors.password}
						messageError={errors.password?.message}
					/>
					<Input
						placeholder="Repetir Contraseña"
						label="Repetir Contraseña"
						inputName="consfirmPassword"
						register={register}
						name="repitedPassword"
						isError={!!errors.repitedPassword}
						messageError={errors.repitedPassword?.message}
					/>
					<p className="w-80 lg:w-80 max-w-[80vw] text-end">¿ya tienes cuenta? <span><Link href={'/login'} className="text-primary">Ingresa</Link></span></p>
					<button
						className=" w-72 h-10 max-w-[80vw] border-2 bg-primary text-[white] rounded-[50px] mt-5 "
						type="submit"
					>
						Registrarme
					</button>
				</form>
				<Image src={registerFooter} className="w-full " alt="plant image" />
			</div>
		</section>
	);
}