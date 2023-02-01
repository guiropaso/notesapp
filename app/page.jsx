"use client"
import React, { useState } from 'react'
import AddNote from './AddNote'
import Masonry from 'react-masonry-css'

import Collection from './Collection'


export default function Index() {
  const [notes, setNotes] = useState([])

  const breakpointColumnsObj = {
    default: 5,
    1536: 5,
    1200: 4,
    900: 3,
    600: 2,
    340: 1
  };

  
  const handleAdd = (newNote) => {
    setNotes(prev => [newNote,...prev])
    
  }

  const handleEdit = (editedNote) => {
    setNotes(prev => prev.map(note => note.id == editedNote.id ? editedNote : note))
  }


  console.log('Notes Array:', notes)
  return (
    <div>
      <AddNote add={handleAdd}/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-40"
        columnClassName="my-masonry-grid_column">
        {notes.map((el, index) => <Collection key={index} element={el} onEdit={handleEdit} />)}
      </Masonry>
    </div>
  )
}
