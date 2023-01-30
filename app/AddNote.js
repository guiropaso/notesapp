"use client"
import React, { useEffect, useRef, useState} from 'react'
import { nanoid } from 'nanoid'

export default function AddNote({add}) {
    const titleRef = useRef('')
    const taskRef = useRef('')

    let [note, setNote] = useState({})

    useEffect(() => {
        if(note.title && note.task) {
            add(note)
            titleRef.current.innerText=''
            taskRef.current.innerText=''
        }
    },[note])
   

    const handleSubmit = () => {
        setNote({title: titleRef.current.innerText, task: taskRef.current.innerText, id: nanoid()})
    }

    
    console.log(note);

  return (
    <div className='container mx-auto md:max-w-lg flex flex-col space-y-2 text-neutral-50'>
            <div 
                className='border-2 rounded-md py-2 px-5 text-left text-zinc-400 text-lg font-medium'
                name='title'
                ref={titleRef}
                contentEditable='true'>Take a note...
            </div>
            <div
                className='border-2 rounded-md py-2 min-h-24 px-5 text-left text-neutral-50 text-base leading-6 font-normal'
                name="task"
                ref={taskRef}
                contentEditable='true'>
            </div>
            <div className='rounded-full bg-orange-500 ml-auto'>
                <button className='font-bold text-5xl pb-2 px-3' onClick={handleSubmit}>+</button>
            </div>
    </div>
  )
}
