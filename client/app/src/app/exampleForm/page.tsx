"use client"
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm,  FormProvider, useFormContext } from 'react-hook-form'
import { email, minLength, object, parse, string, required, Input } from 'valibot'
import { valibotResolver} from '@hookform/resolvers/valibot'
import InputField from './InputField' // no usado

const LoginSchema = required(object({
	email: string([email('El email no tiene formato correcto.')]),
	password: string([minLength(8, 'Your password must have 8 characters or more.')]),
}));

const initValues: Input<typeof LoginSchema> = {
	email: "",
	password: "",
}
interface InputForm {
  email: string
  password: string
}

export default function InputsLogin({ ...props}) {
	const [emailLength, setEmailLength] = useState(0)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, dirtyFields },
	} = useForm({
		resolver:valibotResolver(LoginSchema),
		values: initValues,
		mode:'onTouched'  // ejecuta la primera validacion cuando hace blur=saca el foco del input, posteriormente en cada cambio

	})
  console.log("ERRORS: ", errors )
	console.log("DIRTYFIELDS",dirtyFields)
	!errors?.email && dirtyFields.email && emailLength >1 ? console.log("TRUE!!!!"):console.log("FALSE!!!!!")
	const onSubmit: SubmitHandler<InputForm> = (data) => console.log("data: ",data)
	
	
	const handleInput = (e:any) => {
		setEmailLength(e.target.value.length)// superfluo
	}


	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* <InputField
					{...register("email")}
					messageError={errors?.email?.message}
					isError={!!errors.email}
					placeholder='Email'
				/>   //  Da error */}
				<div className="flex flex-col relative w-72">
					<input 
							{...register("email")}
							onInput={handleInput}
							placeholder="Email"
							className={
								errors?.email
									? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
									: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
							}
							/* onBlur={handleBlur} */
						/>
					{ !errors?.email && dirtyFields.email && emailLength >1 ? 	<span className="absolute left-[90%] top-[15%] visible">✅</span> : null }
				{/*  { errors?.email && dirtyFields.email ? <span className="absolute left-[90%] top-[15%] hidden">✅</span> : null } */}
						{errors?.email  ? (
					<p className="text-[#FF0000] visible">
						El email ingrasado no es válido
					</p>
				) : (
					<p className="invisible">El email ingrasado es válido</p>
				)}
			</div>
			<div className="flex flex-col relative w-72">
				<input 
							{...register("password")}
							placeholder="password"
							className={
								errors?.password
									? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
									: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
							}
							/* onBlur={handleBlur} */
						/>
						{errors?.password ? (
					<p className="text-[#FF0000] visible">
						El password ingrasado no es válido
					</p>
				) : (
					<p className="invisible">El password ingrasado es válido</p>
				)}
			</div>
				{/* <InputField
					{...register("password")}
					{...props}
					messageError={errors.password?.message}
					isError={!!errors.password}
          placeholder='password'
				/> */}
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
