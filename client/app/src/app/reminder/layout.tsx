/* import {  ReactNode } from "react"
interface Props {
  children: ReactNode;
} */
const layout = ({children}:{
	children: React.ReactNode;
}) => {
	return (
		<div className="min-h-[100vh] flex flex-col">{children}</div>
	)
}
export default layout

