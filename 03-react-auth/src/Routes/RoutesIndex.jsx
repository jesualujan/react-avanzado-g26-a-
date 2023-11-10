import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Signup } from '@/Pages'
import { useAuthContext } from '../Context/useAuthContext'

const {isAuth} = useAuthContext

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/secret' element={<Secret/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default RoutesIndex