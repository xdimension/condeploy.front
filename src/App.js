import logo from './logo.svg'
import './App.css'
import "./assets/css/blk-design-system.css"
import "./assets/css/page.css"
import "./assets/css/nucleo-icons.css"
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Project />

      <Footer />
  </>
  )
}

export default App;
