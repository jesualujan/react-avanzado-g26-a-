import { createContext, useState, useEffect } from "react";
import canciones from '../assets/listaCanciones.json'

const SongContext = createContext()

const SongProvider = ({children}) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectSong, setSelectSong] = useState({})

    useEffect(() => {
        setTimeout(()=>{
            setList(canciones)
            setLoading(false)
        }, 2000)
    }, [])

    const data = {
        list,
        loading,
        selectSong,
        setSelectSong
    }

    return (
      <SongContext.Provider value={data}>
        {children}
      </SongContext.Provider>
    )
    
}

export {SongProvider, SongContext}