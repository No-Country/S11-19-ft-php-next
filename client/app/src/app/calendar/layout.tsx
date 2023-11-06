"use client"
import { useContext} from 'react'
import { AuthContext } from '@/components/authcontext';
import { useRouter } from 'next/navigation';
const layout = ({children}:any) => {
	const { userState} = useContext(AuthContext);
  const router = useRouter()


	return (
		<>
		  {children}
		</>
	)
}
export default layout
