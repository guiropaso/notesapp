"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent } from '@mui/material'




export default function Collection({element, onEdit}) {

  const [isOpen, setIsOpen] = useState(false)
  const [editNote, setEditNote] = useState({})

  const titleRef = useRef('')
  const taskRef = useRef('')

  useEffect(() => {
    if(isOpen === false) {
      onEdit(editNote)
    }
  },[isOpen])

 

  return (
    <>
      <div className='border-2 border-red-500 px-4 rounded-lg py-2 overflow-hidden' onClick={() => setIsOpen(true)}>
        <div >{element.title}</div> 
        <div >{element.task}</div> 
      </div>
      <Dialog
      open={isOpen}
      onClose={() => {
        setEditNote({title: titleRef.current.innerText, task: taskRef.current.innerText, id: element.id})
        setIsOpen(false)
        }}>

        <DialogContent>
          <div className='text-3xl pb-10' contentEditable='true' suppressContentEditableWarning={true} ref={titleRef}>{element.title}</div>
          <div contentEditable='true'  suppressContentEditableWarning={true} ref={taskRef}>{element.task}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}
