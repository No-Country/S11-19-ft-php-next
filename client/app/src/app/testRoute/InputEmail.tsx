"use client";
import { useState } from "react";
import { email, minLength, object, type Output, parse, string } from 'valibot'


interface inputemail {
	placeholder: string;
}

function InputEmail({ placeholder }: inputemail) {
	const [inputValue, setInputValue] = useState("");
	const [inputError, setInputError] = useState(false);
	const [inputBlured, setInputBlured] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	const LoginSchema = object({
		email: string([email()]),
		password: string([minLength(8)]),
	});
	
	const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
	const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		setInputValue(e.target.value);
		/* const testEmail = EMAIL_REGEX.test(e.target.value); */
		try{
			const testEmail = parse(LoginSchema, { email: inputValue, password: '45631lkjihi' });
			if (!testEmail && inputBlured) {
				setInputError(true);
				setInputValid(false)
			}
			if (!testEmail) {
				setInputValid(false)
			}
			if (testEmail) {
				setInputError(false);
				console.log("inputValid");
				setInputValid(true)
			}
		}catch(err){
			console.log("err en handleChange",err)
		}
	};
	const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		setInputBlured(true);
		/* const testEmail = EMAIL_REGEX.test(e.target.value); */
		try {
			const testEmail = parse(LoginSchema, { email: inputValue, password: '45631lkjihi' });
			if (!testEmail) {
				setInputError(true);
			}
		}
		catch(err){
			console.log("error en handleBlur:", err)
		}
	};
	console.log("inputBlured: ", inputBlured);
	console.log(inputValue);
	console.log("error: ", inputError);
	return (
		<>
			<div className="flex relative w-72">
				<input
					placeholder={placeholder}
					value={inputValue}
					onChange={handleChange}
					className={
						inputError
							? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
							: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
					}
					onBlur={handleBlur}
				/>
			{ inputValid? 	<span className="absolute left-[90%] top-[15%] visible">✅</span> : null }
			{ inputError && inputBlured? <span className="absolute left-[90%] top-[15%] hidden">✅</span> : null }
			</div>
			{inputError ? (
				<p className="text-[#FF0000] visible">
					El email ingrasado no es válido
				</p>
			) : (
				<p className="invisible">El email ingrasado es válido</p>
			)}
		</>
	);
}
export default InputEmail;
