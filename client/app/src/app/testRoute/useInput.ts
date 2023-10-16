"use client";
import { useState } from "react";
const useInput = () => {
	const initialState = {
		value:'',
		erros:false,
		blured:false,
		valid:false
	}
	const [inputValue, setInputValue] = useState("");
	const [inputError, setInputError] = useState(false);
	const [inputBlured, setInputBlured] = useState(false);
	const [inputValid, setInputValid] = useState(false);
	const [input, setInput] = useState(initialState)

	const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
	const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		/* setInputValue(e.target.value); */
		setInput((input)=>({...input, value:e.target.value}));
		/* const testEmail = EMAIL_REGEX.test(e.target.value); */
		try{
			/* const testEmail = parse(LoginSchema, { email: inputValue, password: '45631lkjihi' }); */
			const testEmail = EMAIL_REGEX.test(e.target.value);
			if (!testEmail && inputBlured) {
				/* setInputError(true);
				setInputValid(false) */
				setInput((input)=>({...input, error:false, valid:false}));
			}
			if (!testEmail) {
				/* setInputValid(false) */
				setInput((input)=>({...input, valid:false}));
			}
			if (testEmail) {
				/* setInputError(false); */
				console.log("inputValid");
				/* setInputValid(true) */
				setInput((input)=>({...input, error:false, valid:true}));
			}
		}catch(err){
			console.log("err en handleChange",err)
		}
	};

	const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		/* setInputBlured(true); */
		setInput((input)=>({...input, blured:true}));
		/* const testEmail = EMAIL_REGEX.test(e.target.value); */
		try {
			/* const testEmail = parse(LoginSchema, { email: inputValue, password: '45631lkjihi' }); */
			const testEmail = EMAIL_REGEX.test(e.target.value);
			if (!testEmail) {
				/* setInputError(true); */
				setInput((input)=>({...input, error:false}));
			}
		}
		catch(err){
			console.log("error en handleBlur:", err)
		}
	};
	return { handleChange, handleBlur, input }
}
