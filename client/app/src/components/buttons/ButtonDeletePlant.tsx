"use client";
import Link from "next/link";
import React from "react";
import { BiTrash } from "react-icons/bi";

function ButtonDeletePlant() {
	return (
		<Link href="">
			<BiTrash className="hover:text-secondary ease-in-out duration-300"></BiTrash>
		</Link>
	);
}

export default ButtonDeletePlant;
