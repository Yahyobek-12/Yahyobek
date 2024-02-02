import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Travel from '../Components/Travel';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='travel' element={<Travel />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
