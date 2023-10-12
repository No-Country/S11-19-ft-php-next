import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
	return <div className="bg-white h-[100vh] text-black p-12">{children}</div>;
};
export default Layout;
