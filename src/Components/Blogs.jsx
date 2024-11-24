import '../Styles/Blog.css';
import logo from '../Images/team.jfif';
import { MdLocationOn  } from "react-icons/md";
import { useEffect } from 'react';

const Blogs = () => {

  useEffect(() => {
    document.title = 'Yahyobek || Blog'
  })

  return (
    <div className='blogs'>
      <div className="blogs-card animate__animated animate__fadeIn">
        <div className="flex-location">
          <MdLocationOn  className='location-icon' />
          <p>Andijan</p>
        </div>
        <img className='blog-image' src={logo} alt="" />
        <div className="flex-content">
          <h3 className='blog-title'>is expected...</h3>
        </div>
        <p className='date'>is expected...</p>
      </div>
    </div>
  )
}

export default Blogs
