import { ReactElement } from "react";
import Image from "next/image";
import registerFooter from "../../assets/registerFooter2.jpg"

const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<>
		   <div className="bg-[#E3F3F0] min-h-[70vh] text-black p-12">{children}</div>
        <Image src={registerFooter} className="w-full"></Image>
		</>
	)
};
export default Layout;
