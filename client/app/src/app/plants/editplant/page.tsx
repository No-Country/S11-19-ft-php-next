import { AuthContext } from "@/components/authcontext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";



const page = () => {

	const { userState} = useContext(AuthContext);
  const router = useRouter()
	useEffect( () => {
		if(!userState?.token) {
			router.push("/login")
		}
	})
	return (
		<div>page</div>
	)
}
export default page
