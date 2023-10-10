'use client'
import { useState } from "react"

function InputEmail({placeholder}:{placeholder:string}) {

  const [inputValue, setInputValue] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [inputBlured, setInputBlured] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const PASS_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,8}$/
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
    const testEmail = EMAIL_REGEX.test(e.target.value)
    if (!testEmail && inputBlured) {
      setEmailError(true)
    }
    if(testEmail) {
      setEmailError(false)
      setEmailValid(true)
      console.log("emailValid")
    }
  }
  const handleBlur:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputBlured(true)
    const testEmail = EMAIL_REGEX.test(e.target.value)
    if (!testEmail) {
      setEmailError(true)
    }
  }
  console.log("inputBlured: ",inputBlured)
  console.log(inputValue)
  console.log("error: ", emailError)
  return (
    <>
      <div>
        <input
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          required
          className={
            emailError?
            "  border-2 border-[#FF0000] focus:border-[#FF0000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
            :
            " border-[#A7A7A7] border-2 focus:border-[#000000] focus:border-[3px] focus:outline-none h-9 rounded-lg px-2"
          }
          onBlur={handleBlur}
        />
        <span>
        ✅
        </span>
      </div>
      {emailError?
        <p className="text-[#FF0000] visible" >
        El email ingrasado no es válido
        </p>
        :
        <p className="invisible">
        El email ingrasado es válido
        </p>
        
        
      }
      
    </>
  )
}
export default InputEmail