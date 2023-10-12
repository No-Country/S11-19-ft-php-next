"use client"
import InputEmail from "./InputEmail";
import "./styles.testRoute.css";
export default function TestRoute() {

	const handleSubmit = (e:React.SyntheticEvent) => {
		e.preventDefault();
	}
	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col w-full">
				<InputEmail placeholder="Email" />
				<button className="w-48 border-2" type="submit">Enviar</button>
			</form>
		</>
	);
}
