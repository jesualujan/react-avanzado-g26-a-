import React from 'react'
import './home.css'
import SongList from '../components/SongList'
import SongDetail from '../components/SongDetail'
import { SongProvider } from '../context/SongContext'

const Home = () => {
  return (
    <SongProvider>
    <div className='home-container'>
        <div className='izquierdo'>
            <h2>Lado izquierdo</h2>
            <SongList/>
        </div>
        <div className='derecho'>
            <h2>Lado derecho</h2>
            <SongDetail/>
        </div>
    </div>
    </SongProvider>
  )
}

export default Home