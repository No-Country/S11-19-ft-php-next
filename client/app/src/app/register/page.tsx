"use client"
import { useState } from "react";
import "./styles.register.css";
import Image from "next/image";
import registerFooter from "../../assets/registerFooter2.jpg"
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	Input as InputVali,
	custom,
	email,
	minLength,
	object,
	parse,
	required,
	string,getOutput, getPipeIssues,ValiError
} from "valibot";
import { Input } from "./Input";

export default function Register() {
	type inputState = {
		value:string,
		isError:boolean,
		blured:boolean,
		valid:boolean
	}

	/* const passwordSchema = string([
		(input) => {
			if (input.password !== input.confirmPassword) {
				return getPipeIssues('custom', 'Invalid length', input);
			}
			return getOutput(input);
		},
	]) */


const SignUpSchema = object(
  {
		name: string(),
    email: string([
      minLength(1, 'Please enter your email.'),
      email('The email address is badly formatted.'),
    ]),
    password: string([
      minLength(1, 'Please enter your password.'),
      minLength(8, 'You password must have 8 characters or more.'),
    ]),
    confirmPassword: string([minLength(1, 'Please repeat the password once.')]),
  },
  [
    custom(
      ({ password, confirmPassword }) => password === confirmPassword,
      'The passwords do not match.'
    ),
  ]
);


	const LoginSchema = object({
		name: string(),
		email: string([email("email no valido")]),
		password: string([minLength(6, "minimo 6 caracteres")]),
		confirmPassword: string([
			(input) => {
				if (input.password !== input.confirmPassword) {
					return getPipeIssues('custom', 'Invalid length', input);
				}
				return getOutput(input);
			},
		])

	});
	///////////////////////////////

	/* const RegisterSchema = object(
		{
			name: string(),
		  email: string([email("email no valido")]),
		  password: string([minLength(6, "minimo 6 caracteres")]),
			confirmPassword:string()
		},
		[
			(input) => {

	
				if (input.password !==input.confirmPassword) {
					return {
						issues: [
							{
								validation: 'custom',
								message: 'The Return Date must be on or after the Departure Date',
								input,
								path: [{ schema: 'object', input: input, key: 'returnDate', value: input.returnDate }]
							}
						]
					}
				}
				return { output: input }
			}
		]
	) */

	



	const {
		register,
		handleSubmit,
		getValues,

		formState: { errors, isSubmitted },
	} = useForm({
		resolver: valibotResolver(SignUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		},
	});

	const onSubmit: SubmitHandler<InputVali<typeof LoginSchema>> = (data) => {

		console.log(data);
	};
	//console.log(getValues());
	
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
						className="max-w-[90%]"
						register={register}
						name="name"
						isError={!!errors.name}
						messageError={errors.name?.message}
					/>
					<Input
						placeholder="Email"
						label="Email"
						inputName="email"
						className="max-w-[90%]"
						register={register}
						name="email"
						isError={!!errors.email}
						messageError={errors.email?.message}
					/>
					<Input
						placeholder="Contraseña"
						label="Contraseña"
						inputName="password"
						className="max-w-[90%]"
						register={register}
						name="password"
						isError={!!errors.password}
						messageError={errors.password?.message}
					/>
					<Input
						placeholder="Repetir Contraseña"
						label="Repetir Contraseña"
						inputName="consfirmPassword"
						className="max-w-[90%]"
						register={register}
						name="consfirmPassword"
						isError={!!errors.consfirmPassword}
						messageError={errors.consfirmPassword?.message}
					/>
					<button
						className=" w-72 lg:w-80 h-10 max-w-[80vw] border-2 bg-[#104938] text-[white] rounded-[50px] mt-5 "
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
