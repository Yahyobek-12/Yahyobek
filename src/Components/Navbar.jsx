import '../Styles/Navbar.css';
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom';
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const closeNavbar = () => {
    setActive(false);
  };

  return (
    <div className='nav'>
      <Link to='/' className='logo'>Yahyobek</Link>
      <ul className={active ? 'navbar-active' : 'navbar'}>
        <NavLink to='' onClick={closeNavbar}>Home</NavLink>
        <NavLink to='about' onClick={closeNavbar}>About</NavLink>
        <NavLink to='projects' onClick={closeNavbar}>Projects</NavLink>
        <NavLink to='blog' onClick={closeNavbar}>Blog</NavLink>
        <NavLink to='https://www.instagram.com/_yahyobek_12_/'
        target='_blank' onClick={closeNavbar} className='nwt'
        >Nwt</NavLink>
      </ul>
      {active ? <FaWindowClose className='menu remove' onClick={toggleActive} /> : <IoMenuSharp className='menu' onClick={toggleActive} />}
    </div>
  )
}

export default Navbar;
