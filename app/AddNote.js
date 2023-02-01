"use client"
import React, { useEffect, useRef, useState} from 'react'
import { nanoid } from 'nanoid'

export default function AddNote({add}) {
    const titleRef = useRef('')
    const divRef = useRef(null)
    const taskRef = useRef('')

    let [note, setNote] = useState({})

    useEffect(() => {
        if(note.title && note.task) {
            add(note)
            titleRef.current.innerText=''
            taskRef.current.innerText=''
            titleRef.current.classList.add('hidden')
        }
    },[note])

    useEffect(() => {
        function onClickOutside(ele, cb) {
            document.addEventListener('click', event => {
                if(!ele.contains(event.target)) cb()
            })
        }
    
        onClickOutside(divRef.current, () => {
            if(titleRef.current.innerText !== '' && taskRef.current.innerText !== '') {
                handleSubmit()
            }
            else {
                titleRef.current.classList.add('hidden')
                taskRef.current.innerText='Take a note...'
            }
        })
    },[])

    const handleClick = () => {
        if(titleRef.current.classList.contains('hidden')) {
            titleRef.current.classList.remove("hidden")
        }
        taskRef.current.innerText=''

    }
   

    const handleSubmit = () => {
        setNote({title: titleRef.current.innerText, task: taskRef.current.innerText, id: nanoid()})
    }


  return (
    <div id='div-add' ref={divRef} className='container mx-auto md:max-w-lg flex flex-col text-neutral-50 border-2 rounded-md'>
            <div 
                className=' rounded-md py-2 px-5 text-left text-zinc-400 text-lg font-medium focus:outline-0 hidden'
                name='title'
                ref={titleRef}
                contentEditable='true'>
            </div>
            <div
                id='div-task'
                className=' rounded-md py-2 min-h-24 px-5 text-left text-neutral-50 text-base focus:outline-0 leading-6 font-normal'
                name="task"
                ref={taskRef}
                suppressContentEditableWarning={true}
                contentEditable='true' onClick={handleClick}>Take a note...
            </div>
            {/* <div className='rounded-full bg-orange-500 ml-auto'>
                <button className='font-bold text-5xl pb-2 px-3' onClick={handleSubmit}>+</button>
            </div> */}
    </div>
  )
}
