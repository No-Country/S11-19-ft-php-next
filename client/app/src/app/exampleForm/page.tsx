"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	Input as InputVali,
	email,
	minLength,
	object,
	parse,
	required,
	string,
} from "valibot";

import { Input } from "./InputEmaiMy";

const LoginSchema = object({
	email: string([email("email no valido")]),
	password: string([minLength(2, "minimo 2 caracteres")]),
});

export default function InputEmail({ ...props }) {
	const {
		register,
		handleSubmit,
		getValues,

		formState: { errors, isSubmitted },
	} = useForm({
		resolver: valibotResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<InputVali<typeof LoginSchema>> = (data) => {
		console.log(data);
	};
	console.log(getValues());

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					name="email"
					placeholder={""}
					isError={!!errors.email}
					messageError={errors.email?.message}
				/>
				<Input
					register={register}
					name="password"
					messageError={errors.password?.message}
					isError={!!errors.password}
					type="password"
				/>
				<button
					type="submit"
					onClick={() => {
						console.log("isSubmitted: ", isSubmitted);
					}}
				>
					Submit
				</button>
			</form>
		</>
	);
}
