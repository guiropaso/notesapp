"use client"
import { useState } from 'react';
import Link from 'next/link';
import './globals.css'
import {MdMenu} from 'react-icons/md'


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <body>
      <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex flex-row space-x-4 mt-5 mb-5">
          <label htmlFor="my-drawer" className="btn btn-square drawer-button ml-10">
            <MdMenu className='text-3xl'/>
          </label>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 bg-base-100 text-base-content">
          <h3 className="text-3xl mb-10 font-semibold">Links</h3>
          <div className="flex flex-col space-y-5 text-lg font-medium text-slate-500">
            <Link className="hover:text-blue-500" href="/">
              Notes App
            </Link>
            <Link className="hover:text-blue-500" href="pomodoro">
              Pomodoro Timer
            </Link>
          </div>
        </div>
      </div>
    </div>
      </body>
    </html>
  )
}
