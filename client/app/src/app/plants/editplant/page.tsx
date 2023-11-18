import { AuthContext } from "@/components/authcontext";
import { useContext } from "react";

const page = () => {

	const { userState} = useContext(AuthContext);
	return (
		<div>page</div>
	)
}
export default page
