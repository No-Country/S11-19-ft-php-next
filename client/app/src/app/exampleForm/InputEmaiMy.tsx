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
	isError?: boolean;
	inputBlured?: boolean;
	isValid?: boolean;
	messageError?: string;
	messageValid?: string;
	register: any;
};

export function Input({
	inputBlured,
	isError,
	isValid,
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
			<div className={clsx("flex relative w-72", props.className)}>
				<input
					{...props}
					{...register(name)}
					className={clsx(
						isError &&
							"relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2",
						!isError &&
							"relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2",
					)}
				/>
				{isValid && (
					<span className="absolute left-[90%] top-[15%] visible">✅</span>
				)}
				{isError && inputBlured && (
					<span className="absolute left-[90%] top-[15%] hidden">✅</span>
				)}
			</div>
			{isError ? (
				<p className="text-[#FF0000] visible">{messageError}</p>
			) : (
				<p className="invisible">{messageValid}</p>
			)}
		</>
	);
}
