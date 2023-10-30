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
		console.log("data",data);
		console.log("en onSubmit")
		if (data.password !== data.repitedPassword ) {
			console.log("en if onSubmit")
			setError("repitedPassword", {
				message: "Las contraseñas no coinciden",
			})
		}
		//console.log("STATE: ", formState.errors)
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
					<button
						className=" w-72 h-10 max-w-[80vw] border-2 bg-[#104938] text-[white] rounded-[50px] mt-5 "
						type="submit"
					>
						Enviar
					</button>
				</form>
				<Image src={registerFooter} className="w-full" alt="plant image" />
			</div>
		</section>
	);
}
