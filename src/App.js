import "./assets/css/blk-design-system.css"
import "./assets/css/page.css"
import "./assets/css/nucleo-icons.css"
import { Web3Provider } from './components/Web3Provider'
import { StatusBar } from './components/StatusBar'
import { Navbar } from './components/Navbar'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
    <Web3Provider>
      <div className="App">
        <StatusBar />
        
        <section className="outer-wrapper">
          <Navbar />

          <Project />

          <Footer />
        </section>
      </div>
    </Web3Provider>
  </>
  )
}

export default App;
