import '../Styles/Blog.css';
import logo from '../Images/team.jfif';
import { MdLocationOn  } from "react-icons/md";

const Blogs = () => {
  return (
    <div className='blogs'>
      <div className="blogs-card animate__animated animate__fadeIn">
        <div className="flex-location">
          <MdLocationOn  className='location-icon' />
          <p>Bulding...</p>
        </div>
        <img className='blog-image' src={logo} alt="" />
        <div className="flex-content">
          <h3 className='blog-title'>Writing...</h3>
        </div>
        <p className='date'>Uncoming...</p>
      </div>
    </div>
  )
}

export default Blogs
