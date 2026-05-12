import { useRef } from "react";
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import './index.css'

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  return (
    <>
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
    </>
  )
}

export default App
