import { useContext } from "react";
import { SongContext } from "./SongContext";


export const useSongContext = () => {
    const context = useContext(SongContext)
    if(!context) {
        throw new Error('useSongContext debe ser usado dentro del SongProvider')
    }
    return context
}
