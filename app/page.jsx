"use client"
import React, { useState } from 'react'
import AddNote from './AddNote'
import Collection from './Collection'

export default function Index() {
  let [notes, setNotes] = useState([])
  
  const handleAdd = (newNote) => {
    setNotes(prev => [...prev,newNote])
    
  }

  console.log('Notes Array:', notes)
  return (
    <>
      <header>
        <div className="text-center">
          <h2 className='font-bold text-3xl pt-20 pb-10'>Note Taking App</h2>
        </div>
      </header>
        <AddNote add={handleAdd}/>
        <div className='grid grid-cols-5 gap-4 container mx-auto '>
          {notes.map((el, index) => <Collection key={index} element={el}/>)}
        </div>
    </>
  )
}
