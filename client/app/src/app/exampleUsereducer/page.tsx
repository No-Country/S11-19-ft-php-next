'use client'
import { useState, useReducer, SyntheticEvent } from 'react';
import { formReducer } from './formReducer';
import { handleBlur, handleChange} from './handlers';


type formStateType = {
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

const initialState: formStateType = {
	email: { value: '', error: '', touched: false, blured:false, hasError: false, isValid:false },
	password: { value: '', error: '', touched: false, blured:false, hasError: false, isValid:false },
	isFormValid: false,
};

type handleChange = {
	e: SyntheticEvent,
	name:string
}

type handlerBlur = {
	e: SyntheticEvent,
	name:string
}


const page = () => {
console.log("reducer: ", formReducer)
	const [formState, dispatchFormState] = useReducer(formReducer, initialState);
	const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
	const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	
	type inputState = {
			value: string, 
			error: string, 
			touched: boolean, 
			blured:boolean, 
			hasError: boolean, 
			isValid:boolean 
	}
	// const handleChange = (e:React.SyntheticEvent,name:string, dispatch:any, formState:formState.name) => {
	// 	//console.log("value: ", e.target.value)
	// 	console.log("name:: ", name)
	// 	console.log("formState[name]: ", formState[name])
	// 	console.log("dispatch: ", dispatch)
	// 		e?.preventDefault();
	// 		const inputvalue = (e.target as HTMLInputElement)?.value
	// 		// dispatch(
	// 		// 	{ 
	// 		// 		type:'UPDATED_FORM', 
	// 		// 		data:{
	// 		// 			...formState.name,
	// 		// 			/* ...formState.name */
	// 		// 			name:name,
	// 		// 			value:inputvalue
	// 		// 		}
	// 		// 	}
	// 		// )
	// 		let inputTest
	// 		if (name==='email') inputTest = EMAIL_REGEX.test(inputvalue)
	// 		if (name==='password') inputTest = PASS_REGEX.test(inputvalue)
	// 		try{
	// 			const testEmail = inputTest
	// 			console.log("inputTest: ", inputTest)
	// 			if (!inputTest && formState[name].blured) {
	// 				dispatch({ 
	// 						type:'UPDATED_FORM', 
	// 						data:{
	// 							...formState[name],
	// 							name:name,
	// 							value:inputvalue,
	// 							hasError:false, 
	// 							isValid:false
	// 						}
	// 				})
	// 			}
	// 			if (!inputTest) {
	// 				dispatch({ 
	// 					type:'UPDATED_FORM', 
	// 					data:{
	// 						...formState[name],
	// 						name:name,
	// 						value:inputvalue,
	// 						isValid:false
	// 					}
	// 				})
	// 			}
	// 			if (inputTest) {
	// 				dispatch({ 
	// 					type:'UPDATED_FORM', 
	// 					data:{
	// 						...formState[name],
	// 						name:name,
	// 						value:inputvalue,
	// 						error:false, 
	// 						isValid:true
	// 					}
	// 				})
	// 			}
	// 		}catch(err){
	// 			console.log("err en handleChange",err)
	// 		}
	// 	};
	const onChange = (e) => {
		console.log("e: ", e)
		handleChange(e,"email", dispatchFormState, formState)
	}

		console.log("formState.email en state: ",formState.email)
		console.log("formState.password en state: ",formState.password)
	return (
		<>
			<div className="flex relative w-72">
					<input
						placeholder='Email'
						value={formState.email.value}
						/* e:React.SyntheticEvent,name:string, dispatch:any, inputState:inputState */
						/* onChange={ (e)=> handleChange(e,'email', dispatchFormState, formState) } */
						onChange={onChange}
						className={
							formState.email.hasError
								? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
								: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
						}
						onBlur={ (e) => handleBlur(e,'email', dispatch, formState.email) }
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
					onChange={(e)=>handleChange( e,'password', dispatch, formState.password)}
					className={
						formState.password.hasError
							? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
							: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
					}
					onBlur={(e) => handleBlur(e,'password', dispatch, formState.password)}
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
