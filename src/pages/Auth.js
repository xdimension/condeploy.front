import "../assets/css/blk-design-system.css"
import "../assets/css/page.css"
import "../assets/css/nucleo-icons.css"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { AuthForm } from "../components/AuthForm"
// import { AuthProvider } from "../components/AuthProvider"

const AuthPage = () => {

  return (
    <div className="App">
      <div className="outer-wrapper">
        <Navbar />

        <AuthForm />

        <Footer />
      </div>
    </div>
  )
}

export default AuthPage;
