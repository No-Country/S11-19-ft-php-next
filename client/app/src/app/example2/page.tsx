"use client"
import React from 'react'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { email, minLength, object, parse, string, required, Input } from 'valibot'
import { valibotResolver} from '@hookform/resolvers/valibot'
import InputField from '../exampleForm/InputField'
import { useInput } from './useInput'



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
	console.log("BANDERA")
	const methods = useForm()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, dirtyFields, isValid },
	} = useInput({
		resolver:valibotResolver(LoginSchema),
		values: initValues,
		mode:'onTouched' // ejecuta la primera validacion cuando hace blur=saca el foco del input, posteriormente en cada cambio

	})
  console.log("ERRORS: ", errors )
	console.log("DIRTYFIELDS",dirtyFields)
	!errors?.email && dirtyFields.email ? console.log("TRUE!!!!"):console.log("FALSE!!!!!")
	console.log("isValid: ", isValid)
	const onSubmit: SubmitHandler<InputForm> = (data) => console.log(data)

	
	return (
		<>
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{/* <InputField
					{...register("email")}
					messageError={errors?.email?.message}
					isError={!!errors.email}
					placeholder='Email'
				/> */}
				<input 
				    {...register("email")}
						placeholder="Email"
						name='Email'
						/* value={inputValue}
						onChange={handleChange} */
						className={
							errors?.email
								? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
								: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
						}
						/* onBlur={handleBlur} */
			    />
				{ !errors?.email && dirtyFields.email && email.length>1 ? 	<span className="absolute left-[90%] top-[15%] visible">✅</span> : null }
			 {/*  { errors?.email && dirtyFields.email ? <span className="absolute left-[90%] top-[15%] hidden">✅</span> : null } */}
					{errors?.email  ? (
				<p className="text-[#FF0000] visible">
					El email ingrasado no es válido
				</p>
			) : (
				<p className="invisible">El email ingrasado es válido</p>
			)}
			<input 
				    {...register("password")}
						placeholder="password"
						
						/* value={inputValue}
						onChange={handleChange} */
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
				{/* <InputField
					{...register("password")}
					{...props}
					messageError={errors.password?.message}
					isError={!!errors.password}
          placeholder='password'
				/> */}
				<button type="submit">Enviar</button>
			</form>
			</FormProvider>
		</>
	);
}
