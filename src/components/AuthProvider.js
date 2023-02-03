import { useState, createContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PocketBase from 'pocketbase'

export const AuthContext = createContext()

export function AuthProvider({children}) 
{
    const pb = new PocketBase(process.env.REACT_APP_PB_SERVER_URL)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [authData, setAuthData] = useState({})

    const doLogin = async(login, password) => {
        try {
            const authData = await pb.collection('users').authWithPassword(login, password);

            setAuthData(authData)

            window.location = '/clients'
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
            }}>
            {children}
        </AuthContext.Provider>
    )
}