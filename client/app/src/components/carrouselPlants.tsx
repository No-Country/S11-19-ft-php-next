"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CarouselPlants({
	children,
}: {
	children: React.ReactNode;
}) {
	// Revisar Los breakpoints en desktop
	const responsive = {
		desktop: {
			breakpoint: { max: 5000, min: 1024 },
			items: 5.4,
		},
		laptop: {
			breakpoint: { max: 1600, min: 1024 },
			items: 4.4,
		},
		tablet: {
			breakpoint: { max: 1250, min: 464 },
			items: 3.2,
		},
		md: {
			breakpoint: { max: 970, min: 464 },
			items: 2.5,
		},

		ipad: {
			breakpoint: { max: 770, min: 1024 },
			items: 2.5,
		},
		sm: {
			breakpoint: { max: 750, min: 464 },
			items: 2.2,
		},
		response: {
			breakpoint: { max: 650, min: 464 },
			items: 1.5,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1.2,
		},
	};
	return (
		<Carousel
			responsive={responsive}
			swipeable={true}
			draggable={true}
			centerMode={false}
			infinite={false}
			keyBoardControl={true}
			removeArrowOnDeviceType={["mobile"]}
			className="ml-7 py-5 bg-background"
		>
			{children}
		</Carousel>
	);
}
