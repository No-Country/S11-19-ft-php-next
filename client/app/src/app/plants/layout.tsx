"use client";
import { ReactElement } from "react";
import Footer from "@/components/footer";

const Layout = ({ children }: { children: ReactElement }) => {

	return (
		<>
			<div>{children}</div>
			<Footer />
		</>
	);
};
export default Layout;
