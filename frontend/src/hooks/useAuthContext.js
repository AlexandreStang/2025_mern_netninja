import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

// Hook to verify the context is used within the correct provider
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }

    return context
}