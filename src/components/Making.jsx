
import Link from 'next/link'
// import { IoLocationOutline } from 'react-icons/io'
//main fn()
export default function Making() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex bg-black ">
        <div className="text-white w-1/12 text-2xl text-center font-bold my-auto">amazon</div>
        <div className="text-white w-1/12 text-sm text-xss text-center my-auto text-sm p-2">Deliver to <span className='font-bold text-lg' >Nepal</span></div>
        <div className="text-white w-6/12">
          <span className='bg-gray-100 text-black  text-lg mr-5 p-2 text-sm'>All <input className='border-2 text-black  ' type="search" placeholder name="Search" id="" />🔍</span>
        </div>
        <div className="text-white w-1/12 font-bold my-auto">Flag 🇳🇵</div>
        <div className="text-white w-1/12 text-sm my-auto text-xs ">Hello,Sing in <span className='font-bold text-sm'>
          Account & List</span></div>
        <div className="text-white w-1/12 text-sm font-bold my-auto">Return & Order</div>
        <div className="text-white w-1/12 font-bold text-sm my-auto text-center ">Cart</div>
      </div>
      <div className="flex bg-gray-700 text-white ">
        <div className="mx-3 text-sm p-1 font-bold">☰ All</div>
        <div className="mx-3">Today's Deals</div>
        <div className="mx-3">Customer Service</div>
        <div className="mx-3">Registry</div>
        <div className="mx-3">Gift Card</div>
        <div className="mx-3">Sell</div>
      </div>
      <div className='lg:flex-shrink-0'>
        <img className='' src="https://source.unsplash.com/1400x200/?Colothes and Shoes" alt="" />
      </div>

    </>
  )
};
