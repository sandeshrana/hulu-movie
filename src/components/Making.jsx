
import Link from 'next/link'

//main fn()
export default function Making() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex bg-black ">
        <div className="text-white w-1/12 text-lg text-center font-bold">Amazon</div>
        <div className="text-white w-1/12">Deliver To Nepal</div>
        <div className="text-white w-6/12">
          <span className='bg-gray-100 text-black font-bold text-lg mr-5 p-2'>ALL <input className='border-2 text-black ' type="search" placeholder name="Search" id="" />🔍</span>
        </div>
        <div className="text-white w-1/12">Flag🇳🇵</div>
        <div className="text-white w-1/12">Account</div>
        <div className="text-white w-1/12">Order</div>
        <div className="text-white w-1/12">Cart</div>
      </div>
      <div className="flex bg-gray-500 text-white ">
        <div className="mx-3">ALL</div>
        <div className="mx-3">Today's Deals</div>
        <div className="mx-3">Customer Service</div>
        <div className="mx-3">Registry</div>
        <div className="mx-3">Gift Card</div>
        <div className="mx-3">Sell</div>
      </div>

    </>
  )
};
