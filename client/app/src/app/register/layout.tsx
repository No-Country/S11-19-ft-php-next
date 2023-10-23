import { ReactElement } from "react";



const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<>
			<div className="bg-[#E3F3F0] min-h-[80vh] text-black">{children}</div>
		</>
	);
};
export default Layout;
