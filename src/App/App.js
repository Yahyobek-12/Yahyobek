import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import About from '../Components/About';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App