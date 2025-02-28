import {WorkoutsContext} from "../context/WorkoutContext";
import {useContext} from "react";

// Hook to verify the context is used within the correct provider
export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error("useWorkoutsContext must be used inside an WorkoutsContextProvider")
    }

    return context
}