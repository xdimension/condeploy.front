import { AuthContext } from "./AuthProvider"
import { useState, useContext } from "react"

export const AuthForm = () => {
    const [formSignup, setFormSignup] = useState({
                                email: "",
                                password: "",
                                passwordConfirm: "",
                                name: ""
                            })

    const [formSignin, setFormSignin] = useState({
                                email: "",
                                password: "",
                            })

    const {authData, doSignup, doLogin} = useContext(AuthContext)

    const signUpHandler = async() => {
        console.log(formSignup)
        await doSignup(formSignup.email, formSignup.password, formSignup.passwordConfirm, formSignup.name)
    }

    return (
        <section className="section section-lg section-signin">
            <div className="container">
                <div className="row">

                {/*-----------          Register        ------------*/}
                <div className="col-lg-6 col-md-6">
                    <div className="card card-register">
                    <div className="card-header">
                        <h4 className="card-title">Register</h4>
                    </div>
                    <div className="card-body">
                        <form className="form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-single-02"></i>
                            </div>
                            </div>
                            <input 
                                type="text" 
                                name="name" 
                                value={formSignup.name} 
                                onChange={e => setFormSignup({...formSignup, name: e.target.value})}
                                placeholder="Your name" 
                                className="form-control" 
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-email-85"></i>
                            </div>
                            </div>
                            <input 
                                type="text" 
                                value={formSignup.email} 
                                onChange={e => setFormSignup({...formSignup, email: e.target.value})} 
                                placeholder="Email" 
                                className="form-control" 
                            />                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-lock-circle"></i>
                            </div>
                            </div>
                            <input 
                                type="text" 
                                name="password" 
                                value={formSignup.password} 
                                onChange={e => setFormSignup({...formSignup, password: e.target.value})}
                                placeholder="Password" 
                                className="form-control" 
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-lock-circle"></i>
                            </div>
                            </div>
                            <input 
                                type="text" 
                                name="passwordConfirm" 
                                value={formSignup.passwordConfirm} 
                                onChange={e => setFormSignup({...formSignup, passwordConfirm: e.target.value})}
                                placeholder="Confirm password" 
                                className="form-control" 
                            />
                        </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button 
                            onClick={() => doSignup(formSignup.email, formSignup.password, formSignup.passwordConfirm, formSignup.name)} 
                            className="btn btn-success btn-lg"
                        >
                            Sign Up
                        </button>
                    </div>
                    </div>
                </div>

                {/*-----------          Sign In        ------------*/}
                <div className="col-lg-6 col-md-6">
                    <div className="card card-register">
                    <div className="card-header">
                        <h4 className="card-title">Sign In</h4>
                    </div>
                    <div className="card-body">
                        <form className="form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-email-85"></i>
                            </div>
                            </div>
                            <input 
                                type="text" 
                                value={formSignin.email} 
                                onChange={e => setFormSignin({...formSignin, email: e.target.value})} 
                                placeholder="Email" 
                                className="form-control" 
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-lock-circle"></i>
                            </div>
                            </div>
                            <input 
                                type="text" 
                                value={formSignin.password}
                                onChange={e => setFormSignin({...formSignin, password: e.target.value})} 
                                placeholder="Password" 
                                className="form-control" 
                            />
                        </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button 
                            onClick={() => doLogin(formSignin.email, formSignin.password)} 
                            className="btn btn-info btn-lg"
                        >
                            Sign In
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
    
}