
import { AuthContextProvider } from "@/components/authcontext";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";


const poppins = Poppins({ 
	subsets: ["latin"], 
  weight:['400','500','600']
});

export const metadata: Metadata = {
	title: "Garden Wise",
	description: "App para ayudarte en el cuidado de  tus plantas, proyecto grupal de No Country",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<AuthContextProvider>
				{/* acá poner el Header y pasarle como prop el estado de logeo */}
				{/* <body className="font-Poppins bg-background">{children}</body> */}
				<body className={` ${poppins.className} bg-background min-h-[100vh] flex flex-col`}>{children}</body>
			</AuthContextProvider>
		</html>
	);
}
