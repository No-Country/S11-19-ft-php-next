"use client";
import { email, minLength, object, type Output, parse, string } from 'valibot'

interface inputemail {
	placeholder: string;
}

function InputEmail({ placeholder, label, input, inputName, setInput, handleChange, handleBlur }) {

	const LoginSchema = object({
		email: string([email()]),
		password: string([minLength(8)]),
	});
	
	// const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
	// const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	
	//console.log("inputBlured: ", input?.blured);
	//console.log("input.value",input?.value);
	//console.log("error: ", input?.isError);
	//console.log("input en InputEmail: ", input)
	return (
		<>
			<div className="flex flex-col relative ">
				<label htmlFor='inputName' className='font-Poppins text-[#104938]'>{label}</label>
				<input
				  id={inputName}
					placeholder={placeholder}
					value={input.value}
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						input.isError
							? "relative w-80 lg:w-96 max-w-[80vw]  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-11 rounded-lg px-2"
							: "relative w-80 lg:w-96 max-w-[80vw]  border-2 border-[#A7A7A7] focus:border-[#104938] focus:border-[3px] focus:outline-none h-11 rounded-lg px-2"
					}
				/>
			{ input.valid && <span className="absolute left-[90%] top-[20%] visible">✅</span> }
			{ input.isError && input.blured && <span className="absolute left-[90%] top-[20%] hidden">✅</span>  }
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
