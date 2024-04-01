import '../Styles/Blog.css';
import logo from '../Images/team.jfif';
import { MdLocationOn  } from "react-icons/md";

const Blogs = () => {
  return (
    <div className='blogs'>
      <div className="blogs-card animate__animated animate__fadeIn">
        <div className="flex-location">
          <MdLocationOn  className='location-icon' />
          <p>California</p>
        </div>
        <img className='blog-image' src={logo} alt="" />
        <div className="flex-content">
          <h3 className='blog-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, voluptatibus.</h3>
        </div>
        <p className='date'>4/1/2024</p>
      </div>
    </div>
  )
}

export default Blogs
