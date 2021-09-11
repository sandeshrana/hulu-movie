
import Link from 'next/link'
import { useState } from 'react'

//main fn()
export default function Pratice() {
  //your variable, funct8on and hooks go here
  const [open, setOpen] = useState()

  //main return
  return (
    <>
      {/* Code Starts from here */}


      <div className="flex">
        <div className="bg-pink-200 w-1/12">Amazon</div>
        <div className="bg-green-200 w-1/12">Nepal</div>
        <div className="bg-yellow-300 w-6/12">Search</div>
        <div className='bg-purple-200 w-1/12'>Flag</div>
        <div className="bg-blue-200 w-1/12">Account</div>
        <div className="bg-gray-500 w-1/12">Return</div>
        <div className="bg-red-500 w-1/12">Cart</div>
      </div>

    </>
  )
};
