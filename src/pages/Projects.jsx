import "../assets/css/blk-design-system.css"
import "../assets/css/page.css"
import "../assets/css/nucleo-icons.css"
import { Web3Provider } from '../components/Web3Provider'
import { StatusBar } from '../components/StatusBar'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { Footer } from '../components/Footer'
// import { AuthProvider } from "../components/AuthProvider"

const ProjectsPage = () => {
  return (
    <>
    <Web3Provider>
        <div className="App">
          <StatusBar />
          
          <div className="outer-wrapper">
            <Navbar />

            <Projects />

            <Footer />
          </div>
        </div>
    </Web3Provider>
  </>
  )
}

export default ProjectsPage;
