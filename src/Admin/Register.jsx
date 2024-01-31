import 'animate.css';
import '../Styles/Admin/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import key__logo from '../Images/key.webp';
import { useEffect, useState } from 'react';
import ps__logo from '../Images/password.png';
import { FaWindowClose } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [ps, setPs] = useState('example');
    const [modal, setModal] = useState(false);
    const myPs = '123456';

    const navigate = useNavigate()

    const handlePs = (e) => {
        e.preventDefault()
        if (ps === myPs) {
            setModal(true)
            toast.success('Correct Password...');
        } else {
            toast.error('You Are Not Admin...');
            setTimeout(() => {
              navigate('/')
            }, 5000)
          }
        setPs('');
        e.target.reset();
    }

    useEffect(() => {
        document.title = 'Register';
    }, []);

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className='way'>
            <ToastContainer />
            <form className="way-card" onSubmit={handlePs}>
                <img src={ps__logo} alt="ps__logo" />
                <TextField id="outlined-basic" label="Enter a Password" variant="outlined" className='writer'
                    value={ps} onChange={(e) => setPs(e.target.value)} />
                <Button sx={{ mt: 2 }} variant='contained' className='go' type='submit'>Login</Button>
            </form>
            {modal && (
                <div className="modal animate__animated animate__bounceInDown">
                    <FaWindowClose className='closer' onClick={closeModal} />
                    <div className="modal-card">
                        <h2>Welcome Yahyobek</h2>
                        <p>Your Grace Key Click The Key And Go To Dashboard</p>
                        <Link to='/admin'><img src={key__logo} alt="key__logo" /></Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Register;
