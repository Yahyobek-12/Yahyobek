import HomeA from './Home-A';
import { useEffect } from 'react';
import '../Styles/Admin/Admin.css';

const Admin = () => {

  useEffect(() => {
    document.title = 'Yahyobek || Dashboard';
  }, []);

  return (
    <div className='admin'>
      <HomeA />
    </div>
  )
}

export default Admin
