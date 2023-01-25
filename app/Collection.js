import React from 'react'

export default function Collection({element}) {
  return (
    <div className='border-2 border-red-500 px-4 rounded-lg py-2 basis-1/5 overflow-hidden'>
        <div>{element.title}</div> 
        <div>{element.task}</div> 
    </div>
  )
}
