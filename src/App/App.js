import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Register from '../Admin/Register';
import Admin from '../Admin/Admin';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<Register />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
