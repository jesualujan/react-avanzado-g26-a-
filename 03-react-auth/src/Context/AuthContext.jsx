import React, {createContext, useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'

const AuthContext = () => {
const AuthContext = createContext()
const [isAuth, setIsAuth] = useState(false)
const [userPayload, setUserPayload] = useState(null)

    const login = (token) => {
        localStorage.setItem('token',token )
            const decode = jwtDecode(token)
            setUserPayload(decode)
            setIsAuth(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUserPayload(null)
        setIsAuth(false)
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const decoded = jwtDecode(token)
            setUserPayload(decoded)
            setIsAuth(true)
        }
    }, [])
    


    const AuthProvider = ({children}) => {
        const data = {}
    }

  return (
    <AuthContext.Provider value={data}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthContext