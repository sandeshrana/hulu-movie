
import Link from 'next/link'

//main fn()
export default function Footer() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className='flex'>
        <div className=" p-1 my-3 ml-3 ">☰</div>
        <div className="text-2xl p-2 m-1 font-bold ml-6 ">YouTube</div>
        <div className="bg-white"> <span className=' text-black'><input className='text-black border-2 p-1 m-2 ml-52 ' type="search" placeholder='Search' name="" id="" />🔍</span>
        </div>
        <div className="a"></div>
        <div className="a"></div>
        <div className="a"></div>
        <div className="a"></div>
        <div className="a"></div>
      </div>
    </>
  )
};
