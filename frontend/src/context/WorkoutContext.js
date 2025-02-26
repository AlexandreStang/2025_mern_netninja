// createContext: This function is used to create a context in React, allowing data to be shared across components
    // without prop drilling.
// useReducer: This is a React hook that helps manage complex state logic.
    // It is an alternative to useState when state transitions are dependent on the previous state.
import {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

// state: The current state.
// action: An object describing what change should happen (action.type and action.payload).
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        // Sets the workouts state to the payload (array of workouts).
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        // Adds a new workout (action.payload) to the beginning of the workouts array.
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        // Returns the existing state if the action type is unknown.
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {
    // useReducer initializes state with { workouts: null } and provides a dispatch function to update state based on actions.
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}