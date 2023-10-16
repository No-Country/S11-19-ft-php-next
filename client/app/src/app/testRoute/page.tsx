"use client"
import { useState } from "react";
import InputEmail from "./InputEmail";
import { email, minLength, object, type Output, parse, string } from 'valibot'
import "./styles.testRoute.css";

export default function TestRoute() {
	type inputState = {
		value:string,
		isError:boolean,
		blured:boolean,
		valid:boolean
	}
	const initialState = {
		value:'',
		isError:false,
		blured:false,
		valid:false
	}
	const [inputEmail, setInputEmail] = useState(initialState)
	const [password, setPassword] = useState(initialState)

	const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
	const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	type handleChangeType = {
		e:React.SyntheticEvent,
		input:inputState,
		setInput:any
	}

	const LoginSchema = object({
		email: string([email()]),
		password: string([minLength(8)]),
	});

	const handleChange = (e, input, setInput):handleChanteType => {
		e.preventDefault();
		/* setInputValue(e.target.value); */
		setInput((input)=>({...input, value:e.target.value}));
		/* const testEmail = EMAIL_REGEX.test(e.target.value); */
		try{
			const testEmail = parse(LoginSchema, { email: e.target.value, password: '45631lkjihi' });
			if (!testEmail && input.blured) {
				setInput({...input, isError:true})
				setInput({...input, valid:false})
			}
			if (!testEmail) {
				setInput({...input, valid:false})
			}
			if (testEmail) {
				setInput({...input, isError:false})
				console.log("inputValid");
				setInput({...input, valid:true})
			}
		}catch(err){
			console.log("err en handleChange",err)
		}
	};
	const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		setInput({...input, blured:true})
		/* const testEmail = EMAIL_REGEX.test(e.target.value); */
		try {
			const testEmail = parse(LoginSchema, { email: input.value, password: '45631lkjihi' });
			if (!testEmail) {
				setInput({...input, isError:true})
			}
		}
		catch(err){
			console.log("error en handleBlur:", err)
		}
	};

	const handleSubmit = (e:React.SyntheticEvent) => {
		e.preventDefault();
	}
	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col w-full">
				<InputEmail 
				  placeholder="Email" 
					input={InputEmail} 
					setInput={setEmail} 
					handleChange={(e)=>handleChange(e, email, setEmail)}
				/>
				<button className="w-48 border-2" type="submit">Enviar</button>
			</form>
		</>
	);
}
