"use client"
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";

function ButtonEditPlant() {
	return (
		<Link href="">
			<BiEdit className="hover:text-secondary ease-in-out duration-300"></BiEdit>
		</Link>
	);
}

export default ButtonEditPlant;
