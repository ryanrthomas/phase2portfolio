import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import LooseleafContainer from '../components/LooseleafContainer'

function App() {
  return (
    <Router>
      <LooseleafContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LooseleafContainer>
    </Router>
  )
}

export default App