import { useRef } from "react";
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import './index.css'

function App() {
  const aboutRef = useRef(null);

  return (
    <>
      <Navbar aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Skills />
    </>
  )
}

export default App
