'use client'
import { useState, useReducer, SyntheticEvent } from 'react';

type formState = {
	email: { 
		value: string, 
		error: string, 
		touched: boolean, 
		blured:boolean, 
		hasError: boolean, 
		isValid:boolean 
	},
	password: { 
		value: string, 
		error: string, 
		touched: boolean, 
		blured:boolean, 
		hasError: boolean, 
		isValid:boolean 
	},
	isFormValid: boolean,
}

const initialState: formState = {
	email: { value: '', error: '', touched: false, blured:false, hasError: false, isValid:false },
	password: { value: '', error: '', touched: false, blured:false, hasError: false, isValid:false },
	isFormValid: false,
};

const formReducer = (state:formState, action:any) => {
	switch (action.type) {
		case 'UPDATED_FORM':
			console.log('UPDATED_FORM')
			console.log("action.data: : ", action.data)
			const { name, value, hasError, error, touched, blured, isValid, isFormValid }:{
				name:string, value:boolean, hasError:boolean, error:boolean, touched:boolean, blured:boolean, isValid:boolean, isFormValid:boolean 
			} = action.data;
			console.log("name en reducer: ", name)
			return {
				...state,
				[name]: {
					...state[name],
					value,
					hasError,
					error,
					touched,
					blured,
					isValid
				},
				isFormValid,
			};
		default:
			return state;
	}
};

const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

type handleChange = {
	e: SyntheticEvent,
	name:string
}


type handlerBlur = {
	e: SyntheticEvent,
	name:string
}
// const handleBlur = ({e,name}:handlerBlur) => {
// /* const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => { */
// 	e.preventDefault()
// 	/* setInputBlured(true); */
// 	setInput((input)=>({...input, blured:true}));
// 	/* const testEmail = EMAIL_REGEX.test(e.target.value); */
// 	try {
// 		/* const testEmail = parse(LoginSchema, { email: inputValue, password: '45631lkjihi' }); */
// 		const testEmail = EMAIL_REGEX.test(e.target.value);
// 		if (!testEmail) {
// 			/* setInputError(true); */
// 			setInput((input)=>({...input, error:false}));
// 		}
// 	}
// 	catch(err){
// 		console.log("error en handleBlur:", err)
// 	}
// };

const page = () => {

	const [formState, dispatchFormState] = useReducer(formReducer, initialState);

	const handleChange = (e,name) => {
		console.log("*** handlechange ***")
		console.log("value: ", e.target.value)
		console.log("formState.[name] en state: ",formState[name])
		/* console.log("formState[name]: ", formState[name]) */
		/* const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => { */
			e?.preventDefault();
			/* setInputValue(e.target.value); */
			const inputvalue = (e?.target as HTMLInputElement)?.value
			dispatchFormState(
				{ 
					type:'UPDATED_FORM', 
					data:{
						...formState[name],
						name:name,
						value:inputvalue
					}
				}
			)
			/* const testEmail = EMAIL_REGEX.test(e.target.value); */
			let inputTest
			if (name='email') inputTest = EMAIL_REGEX.test(inputvalue)
			if (name='password') inputTest = PASS_REGEX.test(inputvalue)
			try{
				/* const testEmail = EMAIL_REGEX.test(inputvalue); */
				const testEmail = inputTest
				console.log("inputTest: ", inputTest)
				if (!inputTest && formState[name].blured) {
					dispatchFormState({ 
							type:'UPDATED_FORM', 
							data:{
								...formState[name],
								name:name,
								value:inputvalue,
								hasError:false, 
								isValid:false
							}
						})
				}
				if (!inputTest) {
					dispatchFormState({ 
						type:'UPDATED_FORM', 
						data:{
							...formState[name],
							name:name,
							value:inputvalue,
							isValid:false
						}
					})
				}
				if (inputTest) {
					console.log("---- inputValid ----");
					dispatchFormState({ 
						type:'UPDATED_FORM', 
						data:{
							...formState[name],
							name:name,
							value:inputvalue,
							error:false, 
							isValid:true
						}
					})
				}
			}catch(err){
				console.log("err en handleChange",err)
			}
		};
		/* console.log("isValid: ",formState.email.isValid)
		console.log("value en state: ",formState.email.value)
		console.log("isValid en state: ",formState.email.isValid) */
		console.log("formState.email en state: ",formState.email)
		console.log("formState.password en state: ",formState.password)
	return (
		<>
			<div className="flex relative w-72">
					<input
						placeholder='Email'
						value={formState.email.value}
						onChange={(e)=>handleChange(e,'email')}
						className={
							formState.email.hasError
								? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
								: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
						}
						onBlur={null}
					/>
				{ formState.email.isValid? 	<span className="absolute left-[90%] top-[15%] visible">✅</span> : null }
				{ formState.email.hasError && formState.email.blured? <span className="absolute left-[90%] top-[15%] hidden">✅</span> : null }
				</div>
				{formState.email.hasError ? (
					<p className="text-[#FF0000] visible">
						El email ingrasado no es válido
					</p>
				) : (
					<p className="invisible">El email ingrasado es válido</p>
				)}

		  <div className="flex relative w-72">
				<input
					placeholder='Password'
					value={formState.password.value}
					onChange={(e)=>handleChange( e,'password' )}
					className={
						formState.password.hasError
							? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
							: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
					}
					 onBlur={null}
				/>
				{ formState.password.isValid? 	<span className="absolute left-[90%] top-[15%] visible">✅</span> : null }
				{ formState.password.hasError && formState.password.blured? <span className="absolute left-[90%] top-[15%] hidden">✅</span> : null }
			</div>
			{formState.password.hasError ? (
				<p className="text-[#FF0000] visible">
					El password ingrasado no es válido
				</p>
			) : (
				<p className="invisible">El password ingrasado es válido</p>
			)}
		</>
	)
}
export default page
