import { useEffect, useState } from 'react';

export const useRegister = (bodyData) => {
	const [data, setData] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
  let URL:string=""
	async function getData () {
		
		try {
			setLoading(true)
      const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type":"aplication/json"
				},
				body:JSON.stringify(bodyData) // a cambiar cuando se tenga los keys requeridos en el endpoint
			})
			const userData = await response.json()
			setData(userData)
		} catch (err) {
			console.log("ERROR: ", err)
			setError(true)
		}
		finally { 
			setLoading(false)
		}
	}
	/* useEffect( () => {
		getData()
	}) */
	getData()
	return {data, loading, error}
}
