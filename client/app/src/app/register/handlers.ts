const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

type handleInputType = {
	e:React.SyntheticEvent,
	inputName:string,
	input:inputState,
	setInput:any
}

const handleChange = (e, inputName, input, setInput):handleInputType => {
	e.preventDefault();
	setInput((prev)=>({...prev, value:e.target.value}));
	let testInput;
	if (inputName="passwword") testInput = PASS_REGEX.test(e.target.value);
	if (inputName="email") testInput = EMAIL_REGEX.test(e.target.value);
	/* const testEmail = EMAIL_REGEX.test(e.target.value); */
	try{
		/* const testEmail = parse(LoginSchema, { email: e.target.value, password: '45631lkjihi' }); */
		if (!testInput && input.blured) {
			return setInput((prev)=>({...prev, isError:true, valid:false}))
		}
		if (!testInput) {
			return setInput((prev)=>({...prev, valid:false}))
		}
		if (testInput) {
			console.log("******* inputValid *******");
			return setInput((prev)=>({...prev, isError:false, valid:true}))
		}
		
	} catch(err){
		//console.log("err en handleChange",err)
	}
	console.log("testInput en handleChange: ", testInput)
};
const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (e, inputName, input, setInput) => {
	e.preventDefault()
	console.log("inputName en handleBlur: ", inputName)
	setInput({...input, blured:true})
	/* const testEmail = EMAIL_REGEX.test(e.target.value); */
	let testInput:boolean = false;
	try {
		/* const testEmail = parse(LoginSchema, { email: input.value, password: password }); */
		if (inputName === "email") {
			testInput = EMAIL_REGEX.test(e.target.value);
			console.log("test en if inputName = email: ", testInput)
		}
		if (inputName === "passwword") {
			testInput = PASS_REGEX.test(e.target.value)
			console.log("en if inputName = password")
		};
		
		if (!testInput) {
			console.log("value en if !testInput: ", e.target.value)
			console.log("testInput en if !testInput: ", testInput)
			console.log("input en if !testInput: ", input)
			setInput({...input, isError:true})
		}
		if (testInput) {
			/* console.log("value en if !testInput: ", e.target.value) */
			console.log("testInput en if testInput: ", testInput)
			/* console.log("input en if !testInput: ", input)
			setInput({...input, isError:true}) */
		}
	}
	catch(err){
		console.log("error en handleBlur:", err)
	}
};
export { handleChange, handleBlur}
