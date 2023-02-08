import { useLocation } from 'react-router-dom'
import { useContext } from "react"
import { ConnectToWallet } from "./ConnectToWallet"
import { AuthContext } from './AuthProvider'

export const Navbar = () => {
    const location = useLocation()

    const {doSignout} = useContext(AuthContext)

    const signoutHandler = (e) => {
        e.preventDefault()
        doSignout()
    }

    return (
        <>
    <nav className="navbar navbar-absolute navbar-expand-lg navbar-transparent">
        <div className="container">
        <div className="navbar-translate">
            <a className="navbar-brand" href="/" rel="tooltip" title="Homepage" data-placement="bottom" target="_blank">
            Member <span>Area</span>
            </a>
            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <div className="navbar-collapse-header">
                <div className="row">
                    <div className="col-6 collapse-brand">
                        <a>
                            Member Area
                        </a>
                    </div>
                    <div className="col-6 collapse-close text-right">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="tim-icons icon-simple-remove"></i>
                        </button>
                    </div>
                </div>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Homepage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#purchase">Purchase</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#contact">Contact Us</a>
                </li>
                
                {location.pathname != '/login' && 
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="">My Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={signoutHandler} href="#">Sign Out</a>
                    </li>
                    <li className="nav-item">
                        <ConnectToWallet />
                    </li>
                </>}   
            </ul>
        </div>
        </div>
    </nav>

        </>
    )
}