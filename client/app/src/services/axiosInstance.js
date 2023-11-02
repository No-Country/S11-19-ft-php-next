"use client";
import axios from "axios";


let token;
if (typeof window !== 'undefined') {
	const localStorageData = window.localStorage.getItem("garden-wise-user")
	
		token = localStorageData? JSON.parse(localStorageData).token : null
	console.log("TOKEN en instancia AXIOS: ", token)
}


/* const userData = JSON.parse(localStorage.getItem("garden-wise-user"));

const token = userData ? userData.token : null; */

const axiosInstance = axios.create({
	baseURL: "https://garden-wise-app.fly.dev/api",
	headers: {
		Authorization: `Bearer ${token} `,
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
