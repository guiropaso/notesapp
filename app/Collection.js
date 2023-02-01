"use client"

import React, { useState, useRef, useEffect } from 'react'

export default function Collection({element, onEdit}) {

  const [editNote, setEditNote] = useState({})

  const titleRef = useRef('')
  const taskRef = useRef('')
  const checkboxRef = useRef('')

  useEffect(() => {
    if(checkboxRef.current.checked === false) {
      onEdit(editNote)
    }
  },[checkboxRef.current.checked])

 

  return (
    <>
      <label htmlFor={element.id}>
        <div className='border-2 border-amber-400 px-4 rounded-lg py-2 overflow-hidden'>
          <div className='text-zinc-400 text-lg font-medium' >{element.title}</div> 
          <div className='text-neutral-50' >{element.task}</div> 
        </div>
      </label>
      <input type="checkbox" id={element.id} ref={checkboxRef} className="modal-toggle" onChange={() => {
          console.log('onchange',editNote)
          setEditNote({title: titleRef.current.innerText, task: taskRef.current.innerText, id: element.id})
      }}/>
      <label htmlFor={element.id} className="modal cursor-pointer">
        <label className="modal-box relative bg-baseColor border-amber-400 border-2" htmlFor="">
          <div className='text-3xl pb-10 focus:outline-0 text-zinc-400 text-md font-medium ' contentEditable='true' suppressContentEditableWarning={true} ref={titleRef}>{element.title}</div>
          <div contentEditable='true'  className='focus:outline-0 text-neutral-50' suppressContentEditableWarning={true} ref={taskRef}>{element.task}</div>
        </label>
      </label>
    </>
  )
}
