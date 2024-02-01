import 'animate.css';
import '../Styles/Admin/Home-A.css';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import ds__logo1 from '../Images/dashboard-logo-1.webp';

const HomeA = () => {
  return (
    <div className='home-a'>
      <CgMenuGridO className='menu-a' />
      <div className="home-a-in">
        <div className="home-a-in-txt animate__animated animate__fadeInDown">
          <h1>Welcome Yahyobek</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque eius officiis autem libero eveniet!</p>
          <Link to=''>Go To Analitcs</Link>
        </div>
        <img src={ds__logo1} alt="ds-logo" className=' animate__animated animate__slideInLeft' />
      </div>
    </div>
  )
}

export default HomeA
