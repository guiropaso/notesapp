"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function AddNote({add}) {
    const titleRef = useRef('')
    const taskRef = useRef('')

    let [note, setNote] = useState({})

    useEffect(() => {
        if(note.title && note.task) {
            add(note)
            titleRef.current.innerHTML=''
            taskRef.current.innerHTML=''
        }
    },[note])
   

    const handleSubmit = () => {
        setNote({title: titleRef.current.innerHTML, task: taskRef.current.innerHTML})
    }

    
    console.log(note);

  return (
    <div className='container mx-auto max-w-lg flex flex-col space-y-2'>
            <div 
                className='border-2 rounded-md py-2 px-5'
                name='title'
                ref={titleRef}
                contentEditable='true'>
            </div>
            <div
                className='border-2 rounded-md py-2 min-h-24 px-5'
                name="task"
                ref={taskRef}
                contentEditable='true'>
            </div>
            <div className='rounded-full bg-slate-200 ml-auto'>
                <button className='font-bold text-5xl pb-2 px-3' onClick={handleSubmit}>+</button>
            </div>
    </div>
  )
}
