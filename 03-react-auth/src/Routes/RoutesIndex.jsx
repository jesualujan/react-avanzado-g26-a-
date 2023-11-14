import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Signup } from '@/Pages'
import { useAuthContext } from '@/Context/useAuthContext'

const RoutesIndex = () => {
  const { isAuth, userPayload } = useAuthContext()
  console.log(isAuth, userPayload)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={isAuth ? <Secret /> : <Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
