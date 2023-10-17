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
// export const handleChange = (e:React.SyntheticEvent,name:string, dispatch:any, inputState:inputState) => {
// 	//console.log("value: ", e.target.value)
// 	console.log("inputState: ", inputState)
// 	console.log("dispatch: ", dispatch)
// 		e?.preventDefault();
// 		const inputvalue = (e.target as HTMLInputElement)?.value
// 		// dispatch(
// 		// 	{ 
// 		// 		type:'UPDATED_FORM', 
// 		// 		data:{
// 		// 			...inputState,
// 		// 			/* ...inputState */
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
// 			if (!inputTest && inputState.blured) {
// 				dispatch({ 
// 						type:'UPDATED_FORM', 
// 						data:{
// 							...inputState,
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
// 						...inputState,
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
// 						...inputState,
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
export const handleChange = (e:React.SyntheticEvent,name:string, dispatch:any, formState:formState.name) => {
	//console.log("value: ", e.target.value)
	//console.log("name:: ", name)
	//console.log("formState[name]: ", formState[name])
	//console.log("dispatch: ", dispatch)
		e.preventDefault();
		const inputvalue = (e.target as HTMLInputElement)?.value
		// dispatch(
		// 	{ 
		// 		type:'UPDATED_FORM', 
		// 		data:{
		// 			...formState.name,
		// 			/* ...formState.name */
		// 			name:name,
		// 			value:inputvalue
		// 		}
		// 	}
		// )
		let inputTest
		if (name==='email') inputTest = EMAIL_REGEX.test(inputvalue)
		if (name==='password') inputTest = PASS_REGEX.test(inputvalue)
		try{
			const testEmail = inputTest
			console.log("inputTest: ", inputTest)
			if (!inputTest && formState[name].blured) {
				dispatch({ 
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
				dispatch({ 
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
				dispatch({ 
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


export const handleBlur = (e:React.SyntheticEvent,name:string, dispatch, inputState) => {
		/* const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => { */
			e.preventDefault()
			const inputvalue = (e.target as HTMLInputElement)?.value
			/* dispatch({ 
					type:'UPDATED_FORM', 
					data:{ ...inputState, blured:true }
				}) */
			try {
				/* const testEmail = parse(LoginSchema, { email: inputValue, password: '45631lkjihi' }); */
				let inputTest
				if (name==='email') inputTest = EMAIL_REGEX.test(inputvalue)
				if (name==='password') inputTest = PASS_REGEX.test(inputvalue)
				if (!inputTest) {
					dispatch({ 
						type:'UPDATED_FORM', 
						data:{
							...inputState,
							blured:true,
							error:false
						}
					})
				} else {
					dispatch({
						type: "UPDATED_FORM",
						data: { ...inputState, blured: true },
					});
				}
			}
			catch(err){
				console.log("error en handleBlur:", err)
			}
		};

	
