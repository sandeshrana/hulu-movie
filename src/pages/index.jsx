import Link from 'next/link'
import Making from '../components/Making'
import PhotoGallery from '../components/PhotoGallery'
import Pratice from '../components/Pratice'


//main fn()
export default function index() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      <div>
        {/* <PhotoGallery /> */}
        {/* <Pratice /> */}
        <Making />
      </div>
    </>
  )
};
