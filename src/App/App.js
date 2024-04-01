import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, About, Projects, Blog, Footer } from '../Constans/index';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
