import { useEffect, useState } from 'react';

export const useLogin = (fomrState) => {
	const [user, setUser] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
  let URL:string=""
	async function getData () {
		
		try {
			setLoading(true)
      const response = await fetch(URL, {
				method: "POST",
				body:fomrState // a cambiar cuando se tenga la estructura
			})
			const userData = await response.json()
			setUser(userData)
		} catch (err) {
			console.log("ERROR: ", err)
			setError(true)
		}
		finally { 
			setLoading(false)
		}
	}
	useEffect( () => {
		getData()
	},[])
	return {user, loading, error}
}
