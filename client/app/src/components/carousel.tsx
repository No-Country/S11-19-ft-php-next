'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function CarouselContainer({
  children,
}: {
  children: React.ReactNode
}) {
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
    <Carousel 
					responsive={responsive} 
					swipeable={true}
					draggable={true}
					infinite={true}
					keyBoardControl={true}
					removeArrowOnDeviceType={["mobile"]}
          className='ml-7'
				>	
         {children}
				</Carousel>
  )
}
