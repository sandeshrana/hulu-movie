
import Link from 'next/link'

//main fn()
export default function PhotoGallery() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="bg-blue-700">
        <div className="container px-2 mx-auto">

          {/* BUTTOM COMPONENT */}

          <button className="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">Find Friends</button>
          <button className="font-bold py-2 px-4 roundedd bg-blue-500 text-white">Find Group</button>
          {/* ALERT COMPONENT */}
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role='alert'>
            <strong className="font-bold">Alert!</strong>
            <span className="block sm:inline">Please update your password</span>
          </div>


        </div>
      </div>
      {/* CARD COMPENENT */}
      <div className="max-w-sm mx-auto flex p-6 bg-gray-400 rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img src="https://source.unsplash.com/1600x900/?nature and water" alt="" className='h-12 w-12' />
        </div>
        <div className="ml-6 pt-1">
          <h4 className='textxl text-gray-900'>Nature and water</h4>
          <p className="text-base text-gray-600"></p>Peace☮️
        </div>
      </div>
      {/* CARD COLUMNS */}
      <div className='container mt-5'>
        <div className='md:flex'>
          <div className='flex-1 text-gray-700 text-center-700 bg-gray-400 px-5 py-5 m-2 rounded'>
            <div className='lg:flex lg:item-center'>
              <div className='lg:flex-shrink-0'>
                <img className='rounded-lg  lg:w-64' src="https://source.unsplash.com/1600x900/?garden" alt="ERROR" />
              </div>
              <div className="mt-4 lg:mt-0 ml-6">
                <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold'>
                  Beautiful Nature & Water
                </div>
                <a href="#"
                  className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'
                >I lOVE PEACE .🕊️🤍</a>
              </div>
            </div>
          </div>
          <div className='flex-1 text-green-700 text-center bg-gray-400 px-5 py-5 m-2 rounded'>
            <div className='lg:flex lg:items-center'>
              <div className='lg:flex-shrink-0'>
                <img className='rounded-lg lg:w-64' src="https://source.unsplash.com/1600x900/? forest," alt="ERROR" />
              </div>
              <div className='mt-4 lg:m-0 lg:ml-6'>
                <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold'>Beautiful Nature & Water</div>
                <a href="#" className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'>WE SHOULDN'T DESTORY OUR NATURE🥺  WE SHOULD PROTECT OUE NATURE .✊🌏</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};
