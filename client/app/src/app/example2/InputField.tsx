interface Inputfield {
	placeholder:string, 
	messageError:string | undefined,
	/* inputError:string,  */
	isError:boolean
}

const InputField = ({placeholder, messageError, isError}:Inputfield) => {
	return (
		<>
			<input
						placeholder={placeholder}
						/* {...props} */
						/* value={inputValue}
						onChange={handleChange} */
						className={
							isError
								? "relative w-72  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
								: "relative w-72 border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
						}
						/* onBlur={handleBlur} */
			/>
			{isError ? (
				<p className="text-[#FF0000] visible">
					El email ingrasado no es válido
				</p>
			) : (
				<p className="invisible">El email ingrasado es válido</p>
			)}
		</>
	)
}
export default InputField
