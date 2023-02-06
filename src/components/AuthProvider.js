import { useState, createContext, useEffect } from "react";
import PocketBase from 'pocketbase'

export const AuthContext = createContext()

export function AuthProvider({children}) 
{
    const BASE_PATH = '/clients'
    const pb = new PocketBase(process.env.REACT_APP_PB_SERVER_URL)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [authData, setAuthData] = useState({})

    const doLogin = async(login, password) => {
        try {
            const authData = await pb.collection('users').authWithPassword(login, password);

            setAuthData(authData)

            window.location = BASE_PATH
        } catch(err) {
            console.log(err)
        }
    }

    const doSignup = async(email, password, passwordConfirm, name) => {
        const authData = await pb.collection('users').create({
            email:           email,
            password:        password,
            passwordConfirm: passwordConfirm,
            name:            name,
        });   

        console.log(authData)
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
                doLogin,
                doSignup,
                doSignout
            }}>
            {children}
        </AuthContext.Provider>
    )
}