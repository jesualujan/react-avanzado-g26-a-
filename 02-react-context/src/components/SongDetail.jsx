import React from 'react'
import { useSongContext } from '../context/useSongContext'

const SongDetail = () => {
  const {selectSong} = useSongContext()
  return (
    <>
    {
      selectSong.title ? (
        <div>
          <img src={selectSong.img_url}/>
          <h3>{selectSong.title}</h3>
          <p>{selectSong.artist}</p>
          <p>{selectSong.year}</p>
        </div>
      )
      : (
        <div>
        <h2>Selecciona una cancion</h2>
        </div>
      )
    }
    </>
  )
}

export default SongDetail