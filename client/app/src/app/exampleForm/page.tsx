"use client"
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { email, minLength, object, parse, string, required, Input } from 'valibot'
import { valibotResolver} from '@hookform/resolvers/valibot'

const LoginSchema = required(object({
	email: string([email()]),
	password: string([minLength(8)]),
}));

const initValues: Input<typeof LoginSchema> = {
	email: "",
	password: "",
}

export default function InputEmail({ ...props}) {

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },


	} = useForm({
		resolver:valibotResolver(LoginSchema),
		values: initValues,

	})

	const onSubmit: SubmitHandler<Input<typeof LoginSchema>> = (data ) => {

		console.log(data)

	}
	return (<>
	<form
		onSubmit={handleSubmit(onSubmit)}
	>
		<input {...register("email")}
		mesageError={errors.email?.message}
		isError={!!errors.email }
		
		/>
		<input 
		{...props}
		mesageError={errors.password?.message}
		isError={!!errors.password }
		type="password" {...register("password")} />
		<input type="submit" />
	</form>
	</>)
}
