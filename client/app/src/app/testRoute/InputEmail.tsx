"use client";
import { useState } from "react";
import { email, minLength, object, type Output, parse, string } from 'valibot'

interface inputemail {
	placeholder: string;
}

function InputEmail({ placeholder, input, setInput, handleChange }) {

	/* const initialState = {
		value:'',
		isError:false,
		blured:false,
		valid:false
	} */

	//const [input, setInput] = useState(initialState)

	const LoginSchema = object({
		email: string([email()]),
		password: string([minLength(8)]),
	});
	
	// const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
	// const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	// const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
	// 	e.preventDefault();
	// 	/* setInputValue(e.target.value); */
	// 	setInput((input)=>({...input, value:e.target.value}));
	// 	/* const testEmail = EMAIL_REGEX.test(e.target.value); */
	// 	try{
	// 		const testEmail = parse(LoginSchema, { email: input.value, password: '45631lkjihi' });
	// 		if (!testEmail && input.blured) {
	// 			setInput({...input, isError:true})
	// 			setInput({...input, valid:false})
	// 		}
	// 		if (!testEmail) {
	// 			setInput({...input, valid:false})
	// 		}
	// 		if (testEmail) {
	// 			setInput({...input, isError:false})
	// 			console.log("inputValid");
	// 			setInput({...input, valid:true})
	// 		}
	// 	}catch(err){
	// 		console.log("err en handleChange",err)
	// 	}
	// };
	// const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
	// 	e.preventDefault()
	// 	setInput({...input, blured:true})
	// 	/* const testEmail = EMAIL_REGEX.test(e.target.value); */
	// 	try {
	// 		const testEmail = parse(LoginSchema, { email: input.value, password: '45631lkjihi' });
	// 		if (!testEmail) {
	// 			setInput({...input, isError:true})
	// 		}
	// 	}
	// 	catch(err){
	// 		console.log("error en handleBlur:", err)
	// 	}
	// };
	console.log("inputBlured: ", input.blured);
	console.log(input.value);
	console.log("error: ", input.isError);
	console.log("input en InputEmail: ", input)
	return (
		<>
			<div className="flex relative w-72">
				<input
					placeholder={placeholder}
					value={input.value}
					onChange={handleChange}
					className={
						input.isError
							? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
							: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
					}
					onBlur={null}
				/>
			{ input.valid? 	<span className="absolute left-[90%] top-[15%] visible">✅</span> : null }
			{ input.isError && input.blured? <span className="absolute left-[90%] top-[15%] hidden">✅</span> : null }
			</div>
			{input.isError ? (
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
