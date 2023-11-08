"use client";
import { useState, useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
import "./styles.register.css";
import Image from "next/image";
import registerFooter from "../../assets/registerFooter2.jpg";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	Input as InputVali,
	ValiError,
	email,
	minLength,
	object,
	parse,
	required,
	string,
	custom,
} from "valibot";
import { Input } from "./Input";
import { AuthContext } from "@/components/authcontext";
import Logo from "../../assets/brandLogo.jpg"
import Link from "next/link";
import FadeLoader from "react-spinners/FadeLoader";
import BounceLoader from "react-spinners/BounceLoader"
import BarLoader from "react-spinners/BarLoader"
import { setCookie } from "cookies-next";
/* type inputState = {
	value: string;
	isError: boolean;
	blured: boolean;
	valid: boolean;
}; */

const LoginSchema = object({
	email: string([email("email no valido")]),
	password: string([minLength(6, "minimo 6 caracteres")]),
});

export default function Login() {
	const router = useRouter()
	const [userData, setUserData] = useState("")
	const [loading, setLoading] = useState(false)
	const [dataError, setdataError] = useState(false)

	const {
		register,
		handleSubmit,
		formState,
		getValues,
		setError,
		formState: { errors, isSubmitted },
	} = useForm({
		resolver: valibotResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const {userState, loginUser, logOutUser} = useContext(AuthContext)

	const onSubmit: SubmitHandler<InputVali<typeof LoginSchema>> = (data) => {
		
		/* const dataMocked = {
			name:"Pepe",
			email:formState.email,
			img:"ede",
			token:"1223eijfiri"
		} */
		/* const URL = "../src/app/login/data.json" */

		// async function getUser() {
		// 	try{
		// 		//
		// 		const URL = "./data.json"
		// 		const response = await fetch(URL)
		// 		const data = await response.json()
		// 		console.log("data en getUser: ", data)
		// 		if (data) {  // cambiar por user cuando tome del customhook
		// 			await dispatchUser({
		// 				type:"LOGIN-CREDENTIALS", 
		// 				payload: data
		// 			})
		// 			console.log("ESTADO EN THEN: ", userState )
		// 			/* redirect("/plants") */
		// 			router.push("/plants")
		// 		}
		// 	}catch(err) {console.log(err)}
		// }
		// getUser()
		// console.log("STATE: ", formState.errors)

		const submitLogin = async () => {

			console.log("bodyData: ", )
			const { email, password} = data
		const bodyData = ({
				email:email,
				password: password
			})
			// fetch("https://garden-wise-app.fly.dev/api/register", {
			// 		method: "POST", 
			// 	headers: {
			// 		"content-type":"aplication/json",
			// 	},
			// 	body:JSON.stringify(bodyData) // a cambiar cuando se tenga los keys requeridos en el endpoint
			// 	})
			// 	.then(res => res.json())
			// 	.then(data => console.log("data",data))


			try {
				setLoading(true)
				const response = await fetch("https://garden-wise-app.fly.dev/api/login", {
					method:"Post",
					headers: {
						"Content-Type":"aplication/json",
					},
					body:JSON.stringify(bodyData) // a cambiar cuando se tenga los keys requeridos en el endpoint
				})
				const requestedData = await response.json()
				setUserData(requestedData)
				const user = {
					name:requestedData.data.user.name,
					lastname:requestedData.data.user.lastname,
					email:requestedData.data.user.email,
					img:requestedData.data.user.img,
					token:requestedData.data.token,
					id:requestedData.data.user.id

				}

				if (requestedData.status === "success") { 
					await loginUser(user)
					setCookie("garden-wise-auth", requestedData.data.token, { maxAge: 60 * 60 * 24, sameSite: "none", secure:true});
					router.push("/plants")
				
				}
			} catch (err) {
          console.warn("ERR: ", err)
			}
			finally {
				setLoading(false)
			}
		}
		submitLogin()

	};

	const override: any = {
		/* display: "block", */
		position: "absolute",
		zIndex:20,
		bottom:"40%",
		/* top: "45%",*/
		/* left:"40%",  */
		left:"35%", 
		margin: "0 auto",
	};
	
	return (
		<section className="flex flex-row ">
			<div className="bg-[#104938] hidden lg:flex lg:flex-col w-1/2 text-[#FFF] font-Poppins font-medium italic pt-[12%]  items-center min-h-[100vh]">
				<Image src={Logo} alt="logo de Garden Wise" className="pb-[2em] w-[15.5em] h-[auto]  "/>
				<p>Donde la Naturaleza y la Tecnología Se Unen</p>
			</div>
			<div className="flex flex-col w-full lg:w-1/2 registerBgImg relative ">
				<h1 className="text-center text-4xl font-Poppins font-medium mt-16 mb-24  text-[#61B78E]">
					Iniciar sesión
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center items-center w-full pt-2 pb-2"
				>
					<Input
						placeholder="Email"
						label="Email"
						inputName="email"
						/* className="max-w-[90%]" */
						register={register}
						name="email"
						isError={!!errors.email}
						messageError={errors.email?.message}
						className="relative z-0"
					/>
					<Input
						placeholder="Contraseña"
						label="Contraseña"
						inputName="password"
						className="relative z-0"
						register={register}
						name="password"
						isError={!!errors.password}
						messageError={errors.password?.message}
					/>
					<p className="w-80 lg:w-80 max-w-[80vw] text-end  z-0">¿no tienes cuenta? <span><Link href={'/register'} className="text-primary">Registrate</Link></span></p>
					{/* <FadeLoader loading={loading}  cssOverride={override} width={7} height={72} radius={10} /> */}
					{/* <BounceLoader loading={loading}  cssOverride={override} width={7} height={72} />
					 */}
					<button
						className=" w-72 h-10 border-2 bg-primary text-[white] rounded-[20px] mt-5 relative z-20 px-1"
						type="submit"
					>
						iniciar sesión
					</button>
				</form>
				<BarLoader loading={loading} cssOverride={override} width="30%" height={6}  />
				<Image src={registerFooter} className="w-full pt-24 relative z-0" alt="plant image" />
			</div>
		</section>
	);
}
