"use Cliente"
function isAuthCheck () {
	let isAuth:any
	if (typeof window !== 'undefined') {
		isAuth = localStorage.getItem("garden-wise-user")
		console.log("isAuth en isAuthenticated: ", isAuth)
	}
  return isAuth
}
export { isAuthCheck}
