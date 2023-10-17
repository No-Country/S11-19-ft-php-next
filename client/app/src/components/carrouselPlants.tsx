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
			items: 4.2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2.2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
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
			className="ml-7"
		>
			{children}
		</Carousel>
	);
}
