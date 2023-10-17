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

export const formReducer = (state:formStateType, action:any) => {
	switch (action.type) {
		case 'UPDATED_FORM':
			console.log("action.data: : ", action.data)
			const { name, value, hasError, error, touched, blured, isValid, isFormValid }:{
				name:string, value:boolean, hasError:boolean, error:boolean, touched:boolean, blured:boolean, isValid:boolean, isFormValid:boolean 
			} = action.data;
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
