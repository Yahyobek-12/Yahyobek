import '../Styles/Travel.css';
import b__image from '../Images/Building.png';
import { useEffect } from 'react';

const Travel = () => {
  useEffect(() => {
    document.title = 'Yahyobek || Travel'
  }, [])

  return (
    <div className='travel'>
        <img className='animate__animated animate__fadeInUpBig' src={b__image} alt="b__image" />
    </div>
  )
}

export default Travel
