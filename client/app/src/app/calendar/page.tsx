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
import { AuthContext, useAuthContext } from '@/components/authcontext';
import { redirect } from 'next/navigation';

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-10-11T13:00',
    endDatetime: '2023-10-11T14:30',
    type:1
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-10-20T09:00',
    endDatetime: '2023-10-20T11:30',
    type:1,
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-10-20T17:00',
    endDatetime: '2023-10-20T18:30',
    type:2
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-11-09T13:00',
    endDatetime: '2023-11-09T14:30',
    type:2
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-10-13T14:00',
    endDatetime: '2023-10-13T14:30',
    type:2
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let today = startOfToday()
	//console.log("DATE1: ", today.toUTCString())
	//console.log("today: ", today.toString())
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format( today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
//console.log("PRUEBA FORMATO 1", format( today, 'MMMM-yyyy', { locale: es }))
  const { userState} = useAuthContext();
	console.log("USER STATE en calendar: ", userState)
  /* const getEvents = async () => {
		try {
			const response = await fetch("https://garden-wise-app.fly.dev/api/login", {
				method:"Post",
				headers: {
					"Content-Type":"aplication/json",
					"Authorization":`Barer ${userState.token}`
				}
			})
			const requestedData = await response.json()
			console.info("userData: ", requestedData)
		} catch (err) {
			console.log("ERROR: ", err)
		}
	}
	useEffect( () => {
		if (userState.token){
			
			getEvents()
		}
	},[])
   */
	type User = {
		name:string,
		email:string,
		img:string,
		token:string
	}
	

	//const dataFromLS = retrieveUser()
  //console.log("USER EN CALENDAR", dataFromLS )

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

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  const checkEvent = (day:any) => {
		// esta función compara si el dia actual day es igual a algún dia de meetings
    const check = meetings.some( meeting => isSameDay(parseISO(meeting.startDatetime), day) )
    return check
  }
	const sendEvent = (day:any) => {
		// esta función compara si el dia actual day es igual a algún dia de meetings
    const dayEvent = meetings.find( meeting => isSameDay(parseISO(meeting.startDatetime), day) )
    //console.log("dayEvent", dayEvent)// esto retorna solo el primero que encuentra
		return dayEvent
  }
  //console.log("PRUEBA FECHA: ", format(new Date(2017, 10, 6), 'MMMM', {locale: es}))

	useEffect ( () => {
		const retrieveUser = (): User | null | undefined => {
			if ( typeof window !== undefined) {
				const userData = localStorage.getItem("garden-wise-user");
				// si no existe rdireccionar, aunque seria amejor redireccionar en el layout para evitar flash
				// pasar el token a un state, para que con un useEffect hacer la peticion con el token como dependencia
				return userData ? JSON.parse(userData) as User : null;
			}}
		const isLogged = retrieveUser()
		console.log("isLogged: ", isLogged)
		if (!isLogged?.token) {
			redirect("/login")
		} else console.info("not logged");
	},[])
	


  return (
    <div className="pt-16">
      <div className="">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM', { locale: es })}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <AiOutlineLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <AiOutlineRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>Domingo</div>
              <div>Lunes</div>
              <div>Martes</div>
              <div>Miercoles</div>
              <div>Jueves</div>
              <div>Viernes</div>
              <div>Sabado</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm w-[100%]  ">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  /* className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5 border-solid border-[black] border-[1px]'
                  )} */ // Aca da estilos al dia
                  className={ 
                    `border-solid border-[black] border-[1px] w-[100%] aspect-square
                    ${dayIdx === 0 && colStartClasses[getDay(day)] &&' '}`//aca se puede modigicar bg celda

                  }
                >
                  {/* <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-6 w-6 m-2 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button> */}

                  <div className="w-[100%] h-[100%]    "> 
                    {/* {meetings.map((meeting) => */}
                      <div className={
                        /* isSameDay(parseISO(meeting.startDatetime), day)? */
                        checkEvent(day)?
                        "w-full h-[100%] flex items-center justify-center bg-sky-500"
                        :
                        "w-full h-[100%] flex items-center justify-center "
                      }>
                        <button
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          
                          /* className='mx-auto flex h-8 w-8  items-center justify-center  border-2' */
                          className={classNames(
                            isEqual(day, selectedDay) && 'text-white',
                           /*  !isEqual(day, selectedDay) &&
                              isToday(day) &&
                              'text-red-500', */
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              isSameMonth(day, firstDayCurrentMonth) &&
                              'text-gray-900',
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              !isSameMonth(day, firstDayCurrentMonth) &&
                              'text-gray-400',
                            /* isEqual(day, selectedDay) && isToday(day) && 'bg-red-500', */
                            isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              'bg-gray-900',
                            !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                            (isEqual(day, selectedDay) || isToday(day)) &&
                              'font-semibold',
                            'mx-auto flex h-6 w-6 m-2 items-center justify-center rounded-full'
                          )}
                        >
                          <time dateTime={format(day, 'yyyy-MM-dd')}> 
                            {format(day, 'd')}   {/* este es el  numero de dia del mes */}
														{/* {checkEvent(day) && day.toString()} */}
														{/* {checkEvent(day) && format(day, 'yyyy-MM-dd-h-m')  } */}
														{sendEvent(day)?.startDatetime}
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
    </div>
  )
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
