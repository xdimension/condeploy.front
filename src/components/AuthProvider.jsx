import { useState, createContext, useEffect } from "react";
import PocketBase from 'pocketbase'

export const AuthContext = createContext()

export function AuthProvider({children}) 
{
    const BASE_PATH = '/clients'
    const pb = new PocketBase(import.meta.env.VITE_PB_SERVER_URL)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [authData, setAuthData] = useState({})
    const [authMessage, setAuthMessage] = useState("")

    const doLogin = async(login, password) => {
        if (login == "" || password == "") {
            setAuthMessage("Please enter your email and password")
        }

        if (login != "" && password != "") {
            try {
                const authData = await pb.collection('users').authWithPassword(login, password);

                setAuthData(authData)

                window.location = BASE_PATH
            } catch(err) {
                setAuthMessage(
                    <>
                        {err.message}<br/>
                        Make sure you entered your email and password correctly.
                    </>
                )
                
                console.log(err)
            }
        }
    }

    const doSignup = async(email, password, passwordConfirm, name) => {
        try {
            const authData = await pb.collection('users').create({
                email:           email,
                password:        password,
                passwordConfirm: passwordConfirm,
                name:            name,
            });  
            
            setAuthData(authData)
        } catch(err) {
            setAuthMessage(
                <>
                    {err.message}<br/>
                    Make sure you filled the sign-up form correctly.
                </>
            )
            
            console.log(err)
        } 
    }

    const doSignout = async() => {
        try {
            await fetch(BASE_PATH + '/logout')

            window.location = BASE_PATH + '/login'
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (authData?.record?.id) {
            setIsLoggedIn(true)
        }
    }, [authData])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                authData,
                authMessage,
                doLogin,
                doSignup,
                doSignout
            }}>
            {children}
        </AuthContext.Provider>
    )
}