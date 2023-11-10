import { useContext } from "react";
import { AuthContext } from "@/Context/useAuthContext";


export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('Authcontext debe ser usado dentro del SongProvider')
    }
    return context
}
