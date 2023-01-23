import Link from 'next/link'
import React from 'react'

export default function Todos() {
  return (
    <>
        <div>
            <p>
                Hola soy el Todo P
            </p>
        </div>
        <div>
            <button>
                <Link href={"/"}>Ir</Link>
            </button>
        </div>
    </>
  )
}


