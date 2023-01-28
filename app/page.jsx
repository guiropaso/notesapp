"use client"
import React, { useState } from 'react'
import AddNote from './AddNote'
import Collection from './Collection'
import {Masonry} from '@mui/lab'
import { Drawer, Box, IconButton} from '@mui/material'
import Menu from '@mui/icons-material/Menu'


export default function Index() {
  const [notes, setNotes] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const handleAdd = (newNote) => {
    setNotes(prev => [newNote,...prev])
    
  }

  const handleEdit = (editedNote) => {
    setNotes(prev => prev.map(note => note.id == editedNote.id ? editedNote : note))
  }


  console.log('Notes Array:', notes)
  return (
    <>
      <header className='container mx-auto grid mt-10 mb-20'>
        <div>
          <IconButton edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true) }>
            <Menu className='text-3xl' />
          </IconButton>
        </div>
        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Box p={2} width='300px' textAlign='center'>
            <h2 className='text-3xl'>Notes App</h2>
            <h2 className='text-3xl'>Pomodoro Timer</h2>
          </Box>
        </Drawer>
        <div className="text-center">
          <h2 className='font-bold text-3xl'>Note Taking App</h2>
        </div>
      </header>
        <AddNote add={handleAdd}/>
          <Masonry className='container mx-auto' columns={[1,2,3,4,5]} spacing={1}>
            {notes.map((el, index) => <Collection key={index} element={el} onEdit={handleEdit} />)}
          </Masonry>
    </>
  )
}
