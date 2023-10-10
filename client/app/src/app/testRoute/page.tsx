import InputEmail from "./InputEmail";
import './styles.testRoute.css'
export default function TestRoute() {
  return(
    <>
      <form className="flex flex-col w-full">
        <InputEmail placeholder="Email" />
        <button >Enviar</button>
      </form>
    </>

  )
}