"use client"
import  { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { es} from 'date-fns/locale';

/* import format from "date-fns/fp/formatWithOptions"; */
import { Fragment, useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/authcontext';
import { redirect } from 'next/navigation';
import Header from '@/components/header';
import CreateReminderModal from './createReminderModal';
import axiosInstance from '@/services/axiosInstance';



function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let today = startOfToday()
type reminder = {
	date:string,
	name:string
}

  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format( today, 'MMM-yyyy'))
  const [reminders, setReminders] = useState<[reminder] | []>([])
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  const [openModal ,setOpenModal] = useState(false)

const { userState} = useContext(AuthContext);
  
	useEffect( () => {
      /* axiosInstance
      .get("/reminder/")
      .then((response) => {
          setReminders(response.data.Reminder)
      })
      .catch((error) => {
          console.error("Error al obtener datos de plantas:", error);
      }); */
			getReminders()
	},[])
	const getReminders = () => {
		axiosInstance
      .get("/reminder/")
      .then((response) => {
				console.log("getReminders: ", response.data)
          setReminders(response.data.Reminder)
      })
      .catch((error) => {
          console.error("Error al obtener datos de plantas:", error);
      });
	}

	type User = {
		name:string,
		email:string,
		img:string,
		token:string
	}
	
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  // let selectedDayMeetings = meetings.filter((meeting) =>
  //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
  // )

  const checkEvent = (day:any) => {
		// esta función compara si el dia actual day es igual a algún dia de meetings
    const check = reminders.some( reminder => isSameDay(parseISO(reminder.date), day) )
    return check
  }
	const sendEvent = (day:any) => {
		// esta función compara si el dia actual day es igual a algún dia de meetings
    const dayEvent = reminders.find( reminder => isSameDay(parseISO(reminder.date), day) )

		return dayEvent
  }

	


  return (
		<div className=" w-full">
			<Header />
			{openModal && (
				<CreateReminderModal
					setOpenModal={setOpenModal}
					getReminders={getReminders}
				/>
			)}
			<div className="w-full pt-10  px-3">
				<h2 className="text-2xl  my-5 text-center text-marron-oscuro   font-medium">
					Calendario
				</h2>
				<div className="flex justify-center items-center  md:divide-x md:divide-gray-200">
					<div className="w-2/3">
						<div className="flex w-full items-center justify-between bg-secondary">
							<button
								type="button"
								onClick={previousMonth}
								className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-slate-50 hover:text-gray-500"
							>
								<span className="sr-only">Previous month</span>
								<AiOutlineLeft className="w-5 h-5" aria-hidden="true" />
							</button>
							<h2 className=" font-semibold text-slate-50">
								{format(firstDayCurrentMonth, "MMMM", { locale: es })}
							</h2>
							<button
								onClick={nextMonth}
								type="button"
								className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-slate-50 hover:text-gray-500"
							>
								<span className="sr-only">Next month</span>
								<AiOutlineRight className="w-5 h-5" aria-hidden="true" />
							</button>
						</div>
						<div className="grid grid-cols-7  text-xs leading-6 text-center text-gray-500">
							<div className="border border-black">Domingo</div>
							<div className="border border-black">Lunes</div>
							<div className="border border-black">Martes</div>
							<div className="border border-black">Miercoles</div>
							<div className="border border-black">Jueves</div>
							<div className="border border-black">Viernes</div>
							<div className="border border-black">Sabado</div>
						</div>
						<div className="grid grid-cols-7 text-sm w-[100%]  ">
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									/* className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5 border-solid border-[black] border-[1px]'
                  )} */ // Aca da estilos al dia
									className={
										`border-solid border-[black] border-[1px] w-[100%] aspect-square
                    ${dayIdx === 0 && colStartClasses[getDay(day)] && " "}` //aca se puede modigicar bg celda
									}
								>
									<div className="w-[100%] h-[100%]    ">
										{/* {meetings.map((meeting) => */}
										<div
											className={
												/* isSameDay(parseISO(meeting.startDatetime), day)? */
												checkEvent(day)
													? "w-full h-[100%] flex items-center justify-center bg-[#C3D825]"
													: "w-full h-[100%] flex items-center justify-center "
											}
										>
											<button
												type="button"
												onClick={() => setSelectedDay(day)}
												/* className='mx-auto flex h-8 w-8  items-center justify-center  border-2' */
												className={classNames(
													isEqual(day, selectedDay) && "text-white",
													/*  !isEqual(day, selectedDay) &&
                              isToday(day) &&
                              'text-red-500', */
													!isEqual(day, selectedDay) &&
														!isToday(day) &&
														isSameMonth(day, firstDayCurrentMonth) &&
														"text-gray-900",
													!isEqual(day, selectedDay) &&
														!isToday(day) &&
														!isSameMonth(day, firstDayCurrentMonth) &&
														"text-gray-400",
													/* isEqual(day, selectedDay) && isToday(day) && 'bg-red-500', */
													isEqual(day, selectedDay) &&
														!isToday(day) &&
														"bg-gray-900",
													!isEqual(day, selectedDay) && "hover:bg-gray-200",
													(isEqual(day, selectedDay) || isToday(day)) &&
														"font-semibold",
													"mx-auto flex h-6 w-6 m-2 items-center justify-center rounded-full"
												)}
											>
												<time dateTime={format(day, "yyyy-MM-dd")}>
													{format(day, "d")}{" "}
													{/* este es el  numero de dia del mes */}
													{/* {checkEvent(day) && day.toString()} */}
													{/* {checkEvent(day) && format(day, 'yyyy-MM-dd-h-m')  } */}
													{sendEvent(day)?.name}
												</time>
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<section className="flex justify-center items-center mt-10">
				<button
					onClick={() => setOpenModal(true)}
					className="p-3 bg-secondary text-slate-100 rounded-md m-auto"
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
			</section>
		</div>
	);
}



let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
