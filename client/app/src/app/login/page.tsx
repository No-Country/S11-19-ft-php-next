"use client";
import { useState } from "react";
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

/* type inputState = {
	value: string;
	isError: boolean;
	blured: boolean;
	valid: boolean;
}; */

const LoginSchema = object({
	name: string([minLength(3, "minimo 3 caracteres")]),
	email: string([email("email no valido")]),
	password: string([minLength(6, "minimo 6 caracteres")]),
	/* repitedPassword: string([minLength(2, "minimo 2 caracteres")]), */
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
		resolver: valibotResolver(LoginSchema),

		defaultValues: {
			name: "",
			email: "",
			password: "",
			repitedPassword: "",
		},
	});


	const onSubmit: SubmitHandler<InputVali<typeof LoginSchema>> = (data) => {
		/* console.log("data",data);
		console.log("en onSubmit")
		if (data.password !== data.repitedPassword ) {
			console.log("en if onSubmit")
			setError("repitedPassword", {
				message: "Las contraseñas no coinciden",
			})
		} */
		console.log("STATE: ", formState.errors)
	};

	/* const onInvalid: SubmitHandler<InputVali<typeof LoginSchema>> = (error) => {
		console.log("data",error);
		if (error.password !== error.repitedPassword || error.repitedPassword.length < 6) {
			setError("repitedPassword", {
				message: "Las contraseñas no coinciden",
			})
		}
	}; */

	/* const handleSubmit = (e:React.SyntheticEvent) => {
		e.preventDefault();
	} */
	return (
		<section className="flex flex-row">
			<div className="bg-[#104938] hidden lg:flex w-1/2 text-[#FFF] font-Poppins font-medium italic flex-col justify-center items-center ">
				<p>Logo</p>
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
