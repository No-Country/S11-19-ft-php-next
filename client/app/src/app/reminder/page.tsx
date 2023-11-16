"use client"
import React, {useEffect, useContext, useState} from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/components/authcontext';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/services/axiosInstance';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Swal from 'sweetalert2'
import {
  format,
  getDay,
  isEqual,
  isSameDay,
	isSameWeek,
  isSameMonth,
  isToday,
  parse,
  parseISO,
} from 'date-fns'
import { es} from 'date-fns/locale';
import { ReminderList} from './ReminderList';
import axios from 'axios';
import BarLoader from 'react-spinners/BarLoader';
import { reminderType } from './models';
import CreateReminderModal from './CreateReminderModal';

export default function Reminders() {
  const { userState} = useContext(AuthContext);
	const [reminders, setReminders] = useState<reminderType[] | []>([])
	const [todayReminders, setTodayReminders] = useState<reminderType[] | null>(null)
	const [weekReminders, setWeekReminders] = useState<reminderType[] | null>(null)
	const [loading, setLoading] = useState(false)
  //const {register, handleSubmit, reset} = useForm()
	const [openModal ,setOpenModal] = useState(false)

  //const [plants, setPlants] = useState<[any] | []>([])
  const router = useRouter();
 /*  useEffect(() => {
    axiosInstance
        .get("/plants/")
        .then((response) => {
            //console.log(response);
            setPlants(response.data.data);
        })
        .catch((error) => {
            console.error("Error al obtener datos de plantas:", error);
        });
}, []); */

	useEffect( () => {
		getReminders()
},[])
const getReminders = () => {
	setLoading(true)
	axios.get("https://garden-wise-app.fly.dev/api/reminder", {
		headers: {
		"Content-Type": "application/json",
		"Authorization":`Bearer ${userState.token}`
	}
  })
	.then((response) => {
		console.log("getReminders: ", response.data)
			setReminders(response.data.Reminder)
	})
	.catch((error) => {
			console.error("Error al obtener datos de reminders:", error);
	})
	.finally(()=>setLoading(false))
}

useEffect( () => {
	if (reminders?.length) {
		let week:any = []
		let day:any = []
		for (const reminder of reminders)  {
			if( isToday(parseISO(reminder.date)))  {
				day.push(reminder) 
			}
			if( isSameWeek(parseISO(reminder.date), new Date()))  {
				week.push(reminder)
			}
		}
		setTodayReminders(day)
		setWeekReminders(week)
	}
}, [reminders])

const override: any = {
	display:"flex",
	flexDirection:"row",
	justifyContent:"center"
};
/* interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  getReminders: () => void;
} */
interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  getReminders: () => void;
}

  return (
    <>
      <Header />
      <main className='px-24'>
			{openModal && (
				<CreateReminderModal {...{ setOpenModal, getReminders } as ModalProps} /> 
			)}
			<div className='flex row '>
				<h1 className='my-10 text-marron-oscuro text-3xl font-semibold'>Recordatorios</h1>
				<button
					onClick={() => setOpenModal(true)}
					className="p-2 bg-secondary text-slate-100 rounded-md m-auto"
				>
					Agregar Recordatorio
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="inline"
						width="26"
						height="24"
						viewBox="0 0 26 24"
						fill="none"
					>
						<path
							d="M13.2344 6V12M13.2344 12V18M13.2344 12H19.4639M13.2344 12H7.00488"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
				{loading && (
				  <div className='w-full h-64 flex row justify-center items-center'>
						<BarLoader loading={loading} className='text-center'  width="30%" height={6}  />
					</div>
				)}
        {todayReminders? 
				<>
					<h2 className='my-10 text-marron-oscuro text-xl'>Hoy</h2>
					<ReminderList reminders={todayReminders} />
				</>
					: 
					null/* <p>No tienes rerordatorios del hoy</p> */ 
					}
				{weekReminders? 
					<>
						<h2 className='my-10 text-marron-oscuro text-xl'>Esta semana</h2>
						<ReminderList reminders={weekReminders} additionalStyles="mb-10" />
					</>
						: 
						null /* <p>No tienes recordatorios esta semana</p> */
					}
			</main>
      <Footer />
    </>
  )
}
