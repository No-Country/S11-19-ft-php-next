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
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/authcontext';
import Header from '@/components/header';
import axiosInstance from '@/services/axiosInstance';
import Footer from '@/components/footer';
import { clsx } from "clsx";

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

let sizeOfScreen
if (typeof window !== 'undefined') {
	sizeOfScreen = window.innerWidth
}
  
	useEffect( () => {
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
			/* fetch("/reminder/", {
				method:"GET",
				headers: {
				"Content-Type": "application/json",
				"Authorization":`Bearer ${userState.token}`
			  }
		  })
      .then((res) => console.log("res",res.json()))
          //setReminders(response.json().Reminder)
      .then(data => console.log("data: ", data))
      .catch((error) => {
          console.error("Error al obtener datos de plantas:", error);
      }); */
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
			<div className="w-full pt-10 min-h-[100vh] flex flex-col">
				<h2 className="text-2xl  my-5 text-center text-marron-oscuro   font-medium">
					Calendario
				</h2>
				<div className={
					clsx("flex justify-center items-center  md:divide-x md:divide-gray-200 pb-10",sizeOfScreen &&  "overflow-scroll")
				  }
				>
					<div className="w-11/12 md:w-2/3">
						<div className="flex w-full items-center justify-center bg-secondary h-10">
							<button
								type="button"
								onClick={previousMonth}
								className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-slate-50 hover:text-gray-500"
							>
								<span className="sr-only">Previous month</span>
								<AiOutlineLeft className="w-5 h-5" aria-hidden="true" />
							</button>
							<h2 className=" w-24 text-center font-semibold text-slate-50 capitalize">
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
						<div className="grid grid-cols-7 text-[0.65em]  md-text-xs leading-6 text-center text-gray-500">
							<div className="border border-black">Domingo</div>
							<div className="border border-black">Lunes</div>
							<div className="border border-black">Martes</div>
							<div className="border border-black">Miercoles</div>
							<div className="border border-black">Jueves</div>
							<div className="border border-black">Viernes</div>
							<div className="border border-black">Sabado</div>
						</div>
						<div className="grid grid-cols-7 text-[0.7em] md:text-sm w-[100%]  ">
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									className={
										`border-solid border-[black] border-[1px] w-[100%] aspect-square bg-white
                    ${dayIdx === 0 && colStartClasses[getDay(day)] && " "}` //aca se puede modigicar bg celda
									}
								>
									<div className="w-[100%] h-[100%]    ">
										<div
											className={
												checkEvent(day)
													? `w-full h-[100%] flex items-center justify-center  ${
															sendEvent(day)?.name === "Riego"
																? "bg-[#C3D825]"
																: sendEvent(day)?.name === "Cambio de lugar"
																? "bg-[#B67132]"
																: sendEvent(day)?.name === "Poda"
																? "bg-[#683b11b3]"
																: sendEvent(day)?.name === "Abono"
																? "bg-[#2DD4BF]"
																:  sendEvent(day)?.name === "Cambio de Maceta"
																? "bg-[#61B78E]"
																: null
													  }`
	
													: "w-full h-[100%] flex items-center justify-center "
											}
										>
											<button
												type="button"
												onClick={() => setSelectedDay(day)}
												className={classNames(
													isEqual(day, selectedDay) && "text-white",
													!isEqual(day, selectedDay) &&
														!isToday(day) &&
														isSameMonth(day, firstDayCurrentMonth) &&
														"text-gray-900",
													!isEqual(day, selectedDay) &&
														!isToday(day) &&
														!isSameMonth(day, firstDayCurrentMonth) &&
														"text-gray-400",
													isEqual(day, selectedDay) &&
														!isToday(day) &&
														"bg-gray-900",
													!isEqual(day, selectedDay) && "hover:bg-gray-200",
													(isEqual(day, selectedDay) || isToday(day)) &&
														"font-semibold",
													"mx-auto flex h-6 w-6 m-2 items-center justify-center rounded-full"
												)}
											>
												<time className="text-[0.6em] md:text-sm" dateTime={format(day, "yyyy-MM-dd")}>
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
				<Footer  />
			</div>
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
