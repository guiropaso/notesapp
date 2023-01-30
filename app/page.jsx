"use client"
import React, { useState } from 'react'
import AddNote from './AddNote'

import Collection from './Collection'
import {Masonry} from '@mui/lab'


export default function Index() {
  const [notes, setNotes] = useState([])

  
  const handleAdd = (newNote) => {
    setNotes(prev => [newNote,...prev])
    
  }

  const handleEdit = (editedNote) => {
    setNotes(prev => prev.map(note => note.id == editedNote.id ? editedNote : note))
  }


  console.log('Notes Array:', notes)
  return (
    <div className='text-center'>
      <h2 className='text-3xl mb-10 text-neutral-50' >Notes App</h2>

      <AddNote add={handleAdd}/>
      <Masonry className='container mx-auto' columns={[1,2,3,4,5]} spacing={1}>
        {notes.map((el, index) => <Collection key={index} element={el} onEdit={handleEdit} />)}
      </Masonry>
    </div>
  )
}
