import React, { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext() // Creamos el contexto

const AuthProvider = ({ children }) => { // Funcion de Proveedor de contexto
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  const login = (token) => { // Decodificar token cuando me he logueado y pasar a usuario autenticado
    localStorage.setItem('token', token)
    const decode = jwtDecode(token)
    setUserPayload(decode)
    setIsAuth(true)
  }

  const logout = () => { // Remover token al hacer logout para borrar datos del usuario en memoria
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  useEffect(() => { // Verificar que exista un token memoria para que el usuario no tenga que volver a loguearse
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  const data = { isAuth, userPayload, login, logout }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
