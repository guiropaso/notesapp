"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Drawer, Box, IconButton} from '@mui/material'
import {makeStyles} from 'tss-react/mui'
import MenuIcon from '@mui/icons-material/Menu'
import './globals.css'


const useStyles = makeStyles()((theme) => {
  return {
    drawer: {
    },
    drawerPaper: {
      background: '#f8fafc'
    }
  }
})

export default function RootLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const {classes} = useStyles()

  return (
    <html lang="en">
      <head />
      <body>
        <div id='wraper' className='p-10'>
          <div>
            <IconButton edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true) }>
              <MenuIcon className='text-4xl text-neutral-50' />
            </IconButton>
          </div>
          {children}
        </div>
          <Drawer
          anchor='left'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className={classes.drawer}
          classes={{paper: classes.drawerPaper}}
          >
            <Box p={2} width='300px' textAlign='center' >
              <h2 className='text-3xl mb-20 text-stone-600'>Resources</h2>
              <div className='flex flex-col space-y-4 text-xl text-sky-600'>
                  <Link href='/'>Notes App</Link>
                  <Link href='pomodoro'>Pomodoro Timer</Link>
              </div>
            </Box>
          </Drawer>
      </body>
    </html>
  )
}
