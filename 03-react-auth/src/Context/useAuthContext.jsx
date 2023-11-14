import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";


export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('Authcontext debe ser usado dentro del AuthProvider')
    }
    return context
}
