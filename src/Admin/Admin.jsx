import { useEffect } from 'react'
import '../Styles/Admin/Admin.css'
import HomeA from './Home-A';
import NavbarA from './Navbar-A';

const Admin = () => {

  useEffect(() => {
    document.title = 'Yahyobek || Dashboard';
  }, []);

  return (
    <div className='admin'>
      {/* <NavbarA /> */}
      <HomeA />
    </div>
  )
}

export default Admin
