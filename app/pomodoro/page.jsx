'use client'
import { useEffect, useRef, useState } from "react"
import {MdSkipNext} from 'react-icons/md'



export default function Pomodoro() {
  const times = {
    'Pomodoro': 3,
    'Short Break': 300,
    'Long Break': 600
  }
  const activities = ['Pomodoro', 'Short Break', 'Long Break']
  const [remainingTime, setRemainingTime] = useState(times.Pomodoro)
  const [isRunning, setIsRunning] = useState(false)
  let intervalRef = useRef(null)

  function changeActivity(e) {
    const parentElement = document.querySelector('.activities--div')
    const siblingElements = parentElement.querySelectorAll('.activities--button')
    siblingElements.forEach(sibling => sibling.classList.remove('activities--button-active'))
    e.target.classList.add('activities--button-active')
    const selectedActivity = e.target.getAttribute('data-value')
    setRemainingTime(times[selectedActivity])
    setIsRunning(false)
    clearInterval(intervalRef.current)

  }

  function handleClick() {
    
    if(!isRunning) {
      setIsRunning(true)
      intervalRef.current = setInterval(() => {
        setRemainingTime(prevState => prevState - 1)
      },1000)
    }
    else {
      clearInterval(intervalRef.current)
      setIsRunning(false)
    }
  }
  
function checkTime() {
  if(remainingTime > 0) {

    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    
    let minutesStr = minutes.toString().padStart(2,'0')
    let secondsStr = seconds.toString().padStart(2,'0')
    return `${minutesStr}:${secondsStr}`
  }
  else {
    clearInterval(intervalRef.current)
    setIsRunning(false)
    return 0
  }
  
}

  return (

    <div className="max-w-lg mx-auto flex flex-col text-neutral-50 bg-amber-500 justify-center items-center p-10 rounded-lg">
      <div className="flex flex-row flex-nowrap space-x-2 activities--div">
        {activities.map((activity,index) => (
          <button
            className= {`p-2 rounded-md activities--button ${index === 0 ? 'activities--button-active' : ''}`}
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
        <span className="text-9xl text-neutral-50" >{checkTime()}</span>
      </div>
      <div className="toggleButtons--container mt-10 w-full text-center relative">
        <button className="text-4xl font-semibold py-5 bg-slate-900/40 rounded-md toggleButtons--startButton"
          onClick={handleClick}
        >{isRunning ? 'Pause' : 'Start'}</button>
        {isRunning && <div className="toggleButtons--skipDiv absolute" >
          <div className="flex flex-row justify-center h-full items-center">
            <MdSkipNext className="text-3xl toggleButtons--skipIcon"/>
          </div>
        </div>}
      </div>
      <div>

      </div>
    </div>
  )
}
