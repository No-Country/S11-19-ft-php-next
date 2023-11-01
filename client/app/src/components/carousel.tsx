'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
export default function CarouselContainer({
  children,
}: {
  children: React.ReactNode
}) {
	const [isLongScreen, setIsLongScreen] = useState(false)
	
  const responsive = {
		desktop: {
			breakpoint: { max: 5000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1.5
		}
	};
  return (
		<>
		{isLongScreen ? (
			<div className='flex justify-center items-center space-x-10 xl:justify-around'>{children}</div>
			) : (

    <Carousel 
					responsive={responsive} 
					swipeable={true}
					draggable={true}
					infinite={true}
					keyBoardControl={true}
					removeArrowOnDeviceType={["mobile", "desktop"]}
          className='ml-7 lg:ml-32 flex justify-center items-center h-full '
					>	
	       {children}
		 </Carousel>
			)}

		</>
  )
}
