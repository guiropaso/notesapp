import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
    <>
    <p className='container max-w-2xl mx-auto p-20 my-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae eos tempora vitae alias enim, quod modi cupiditate incidunt, necessitatibus error asperiores laborum veritatis aperiam.</p>
    <button>
      <Link href={"/todos"}>Ir a todos</Link>
    </button>
    </>
  )
}
