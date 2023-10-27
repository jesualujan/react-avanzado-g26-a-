import React from 'react'
import { useSongContext } from "../context/useSongContext";
import './songlist.css'

const SongList = () => {
    const {list, loading, setSelectSong} = useSongContext()
  return (
    <div className="row-container">
        {
            loading 
            ? <h2>Cargando</h2>
            : list.map((song)=>(
                <div onClick={()=>{setSelectSong(song)}} key={song.id} className="row-song">
                <h4>
                   {song.title} 
                </h4>
                <p>
                {song.artist}
                </p>
            </div>
            ))
        }
    </div>
  )
}

export default SongList