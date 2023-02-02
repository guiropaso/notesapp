'use client'
import { useEffect, useRef, useState } from "react"
import {MdSkipNext} from 'react-icons/md'



export default function Pomodoro() {
  const [currentActivity, setCurrentActivity] = useState('Pomodoro')
  const activities = ['Pomodoro', 'Short Break', 'Long Break']
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [remainingTime, setRemainingTime] = useState(1500)
  const [isRunning, setIsRunning] = useState(false)
  let intervalRef = useRef(null)

  function changeActivity(e) {
    setCurrentActivity(e.target.getAttribute('data-value'))
    const parentElement = document.querySelector('.activities--div')
    const siblingElements = parentElement.querySelectorAll('.activities--button')
    siblingElements.forEach(sibling => sibling.classList.remove('activities--button-active'))
    e.target.classList.add('activities--button-active')
  }

  useEffect(() => {
    switch(currentActivity) {
      case 'Pomodoro': {
        setRemainingTime(1500)
        setMinutes(25)
        setSeconds(0)
        break
      }
      case 'Short Break': {
        setRemainingTime(300)
        setMinutes(5)
        setSeconds(0)
        break
      }
      case 'Long Break': {
        setRemainingTime(600)
        setMinutes(10)
        setSeconds(0)
        break
      }
      default: {
        console.log('not found', currentActivity)
      }
    }
  },[currentActivity])

 
// useEffect(() => {
//   let intervalo
//   if(!isRunning) {
//     intervalo = setInterval(() => {
//       setRemainingTime(prevState => prevState - 1)
//     },1000)
//   }
// },[isRunning])



let minutesStr = minutes.toString().padStart(2,'0')
let secondsStr = seconds.toString().padStart(2,'0')


  return (

    <div className="max-w-lg mx-auto flex flex-col text-neutral-50 bg-amber-500 justify-center items-center p-10 rounded-lg">
      <div className="flex flex-row flex-nowrap space-x-2 activities--div">
        {activities.map(activity => (
          <button
            className=" p-2 rounded-md activities--button"
            type='button'
            key={activity}
            data-value={activity}
            onClick={changeActivity}
          >
          {activity}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <span className="text-9xl text-neutral-50" >{minutesStr}:{secondsStr}</span>
      </div>
      <div className="toggleButtons--container mt-10 w-full text-center relative">
        <button className="text-4xl font-semibold py-5 bg-slate-900/40 rounded-md toggleButtons--startButton"
          onClick={() => setIsRunning(!isRunning)}
        >{isRunning ? 'Pause' : 'Start'}</button>
        {isRunning && <div className="toggleButtons--skipDiv absolute" >
          <div className="flex flex-row justify-center h-full items-center">
            <MdSkipNext className="text-3xl toggleButtons--skipIcon"/>
          </div>
        </div>}
        <p>{remainingTime}</p>
      </div>
      <div>

      </div>
    </div>
  )
}
