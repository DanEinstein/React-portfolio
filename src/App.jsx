import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'; // ✅ Correct relative import

import Contact from './components/Contact'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// my-portfolio/src/App.jsx
// Importing components for the portfolio application


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />  
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    
      /* 
    </div>
  )
}

export default App
