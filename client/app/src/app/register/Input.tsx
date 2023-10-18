"use client";
import {
	HtmlHTMLAttributes,
	InputHTMLAttributes,
	useEffect,
	useState,
} from "react";

import { clsx } from "clsx";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
	placeholder?: string;
	label:string,
	inputName:string,
	isError?: boolean;
	inputBlured?: boolean;
	isValid?: boolean;
	messageError?: string;
	messageValid?: string;
	register: any;
};

export function Input({
	placeholder, 
	label,
	inputName,

	inputBlured,
	isError,
	isValid, // no implementado
	messageError,
	messageValid,
	name,
	register,
	...props
}: inputProps) {
	useEffect(() => {
		console.log(props);
	}, []);
	return (
		<>
			<div className={clsx("flex flex-col relative my-2", props.className)}>
			  <label htmlFor='inputName' className='font-Poppins text-[#104938]'>{label}</label>
				<input
					{...props}
					placeholder={placeholder}
					{...register(name)}
					className={clsx(
						isError &&
							"relative w-80 lg:w-96 max-w-[80vw]  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-10 rounded-lg px-2",
						!isError &&
						  "relative w-80 lg:w-96 max-w-[80vw]  border-2 border-[#000000] focus:border-[#000000] focus:border-[3px] focus:outline-none h-10 rounded-lg px-2",
					)}
				/>
				{isValid && (
					<span className="absolute left-[90%] top-[15%] visible">✅</span>
				)}
				{isError && inputBlured && (
					<span className="absolute left-[90%] top-[15%] hidden">✅</span>
				)}
			</div>
			{/* {isError ? (
				<p className="text-[#FF0000] visible">{messageError}</p>
			) : (
				<p className="invisible">{messageValid}</p>
			)} */}
		</>
	);
}
