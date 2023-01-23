import React from 'react'
import Header from './header'

export default function Todoslayout({children}) {
  return (
    <>
        <Header/>
        {children}
    </>
   
  )
}
