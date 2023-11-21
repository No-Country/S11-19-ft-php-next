"use client"

import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { remindersInterface} from "./models";
import EditReminderButton from "./EditReminderButton";



export const ReminderList = ({reminders, additionalStyles, handleEditReminder}:remindersInterface) => {
  const [list,setList] = useState<any>(null)
  
	useEffect( () => {
		setList(reminders)
	},[reminders])

	return (
		<section className={`text-[0.6rem] md:text-lg text-primary ${additionalStyles}`}>
			<div className='flex row justify-center bg-secondary  '>
				<div className='w-1/6 text-center border-[1px] border-primary py-1'>
					<p>Cuidado</p>
				</div>
				<div className='w-1/6 text-center border-[1px] border-primary py-1'>
					<p>Planta</p>
				</div>
				<div className='w-1/6 text-center border-[1px] border-primary py-1'>
					<p>Fecha</p>
				</div>
				<div className='w-1/6 text-center border-[1px] border-primary py-1'>
					<p>Hora</p>
				</div>
				<div className='w-3/12 text-center border-[1px] border-primary py-1'>
					<p>Periodicidad</p>
				</div>
				<div className='w-1/12 flex flex-row justify-center items-center'> 
				  <BiEdit />
				</div>
			</div>
			{list?.length? list?.map( (el:any) => (
				<div key={el.id} className='flex row justify-center bg-white '>
					<div  className='w-1/6 text-center border-[1px] border-primary py-1'>
						<p>{el.name}</p>
					</div>
					<div className='w-1/6 text-center border-[1px] border-primary py-1' >
						<p>{el.plant.name}</p>
					</div>
					<div className='w-1/6 text-center border-[1px] border-primary py-1' >
						<p>{el.date}</p>
					</div>
					<div className='w-1/6 text-center border-[1px] border-primary py-1'>
						<p>{el.time}</p>
					</div>
					<div className='w-3/12 text-center border-[1px] border-primary py-1'>
						<p>{el.frequency}</p>
					</div>
					<div className='w-1/12 flex row justify-center items-center border-[1px] border-primary py-1'>
						<EditReminderButton  handleEditReminder={handleEditReminder} element={el} />
					</div>
				</div>))
				:
				<div  className='flex row justify-center bg-white '>
					<div  className='w-1/6 text-center border-[1px] border-primary py-1'>
						<p>-</p>
					</div>
					<div className='w-1/6 text-center border-[1px] border-primary py-1' >
						<p>-</p>
					</div>
					<div className='w-1/6 text-center border-[1px] border-primary py-1' >
						<p>-</p>
					</div>
					<div className='w-1/6 text-center border-[1px] border-primary py-1'>
						<p>-</p>
					</div>
					<div className='w-3/12 text-center border-[1px] border-primary py-1'>
						<p>-</p>
					</div>
					<div className='w-1/12 text-center border-[1px] border-primary py-1'>
						<p>-</p>
					</div>
				</div>
			}
			
		</section>
	)
}
